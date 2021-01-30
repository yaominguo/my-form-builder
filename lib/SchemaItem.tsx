import { defineComponent } from 'vue'
import { SchemaTypes, FiledPropsDefine } from './types'
// import StringField from './fields/StringField.vue'
import StringField from './fields/StringField'
import NumberField from './fields/NumberField'

export default defineComponent({
  name: 'SchemaItem',
  props: FiledPropsDefine,
  setup(props) {
    return () => {
      const { schema } = props
      const type = schema.type
      let Component: any

      switch (type) {
        case SchemaTypes.STRING:
          Component = StringField
          break
        case SchemaTypes.NUMBER:
          Component = NumberField
          break
        default:
          console.warn(`${type} is not supported.`)
      }
      return <Component {...props} />
    }
  },
})
