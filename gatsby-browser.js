// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
import { EmailField } from "./src/components/EmailField"

export const onClientEntry = () => {
  window.tinacms.fields.add({
    name: "email",
    Component: EmailField,
  })
}
