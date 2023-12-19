import MyButton from '../components/Button.vue'

export default{
    title: 'Input/Button',
    component: MyButton,
    tags: ["autodocs"],
    
}
export const Default = {
    args:{
       buttonText: "Click Me!"
    }
}
export const DropDown = {
    args:{
        buttonText: "Hover Me!",
        isDropdown: true,
        options: ["Option 1","Option 2", "Option 3"]
    }
}
