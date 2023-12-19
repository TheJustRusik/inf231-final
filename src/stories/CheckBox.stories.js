import MyCheckBox from '../components/CheckBox.vue'

export default{
    title: 'CheckBox',
    component: MyCheckBox,
    tags: ["autodocs"],
    
}
export const Base = {
    args:{
       checkboxId: "1"
    }
}
export const WithLabel = {
    args:{
        label: "Label",
        checkboxId: "2"
    }
}
export const Enabled = {
    args:{
        modelValue: true,
        checkboxId: '3'
    }
}