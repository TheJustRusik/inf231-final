import MyRadioButton from '../components/RadioButton.vue';

export default{
    title: 'Input/RadioButton',
    component: MyRadioButton,
    tags: ["autodocs"],
    
}   
export const SingleRadio = {
    args: {
        radioGroupName: '1',
        options: [{value:'1', text:"Some Text"}]
    }
}
export const RadioGroup = {
    args: {
        radioGroupName: '2',
        options: [{value:'1', text:"Variant 1"},{value:'2', text:"Variant 2"},{value:'3', text:"Variant 3"}]
    }
}
export const RadioGroupPreselected = {
    args: {
        radioGroupName: '3',
        options: [{value:'1', text:"Variant 1"},{value:'2', text:"Variant 2"},{value:'3', text:"Variant 3"}],
        modelValue: '1'
    }
}