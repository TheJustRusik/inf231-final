import MyToggleSwitch from '../components/ToggleSwitch.vue';

export default{
    title: 'ToggleSwitch',
    component: MyToggleSwitch,
    tags: ["autodocs"]
}   
export const Off = {
    args: {
        switchId: '1',
        modelValue: false   
    }
}
export const On = {
    args: {
        switchId: '2',
        modelValue: true
    }
}