import MySlider from '../components/Slider.vue'

export default{
    title: 'Input/Slider',
    component: MySlider,
    tags: ["autodocs"],
    
}
export const Default = {
    args:{
       
    }
}
export const WithArgs = {
    args:{
        value: 50,
        step: 10,
        min: -50,
        max: 250
    }
}
