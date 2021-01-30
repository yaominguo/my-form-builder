<template>
  <input type="text" :value="value" @change="handleChange" />
</template>
<script lang="ts" setup="props">
// import { defineComponent, ref } from 'vue'
import { Schema, FiledPropsDefine } from '../types'

export default {
  props: FiledPropsDefine,
}

declare const props: {
  value: any
  onChange: (v: string) => void
  schema: Schema
}

export const handleChange = (e: any) => {
  console.log(e)
  props.onChange(e.target.valuie)
}
</script>
