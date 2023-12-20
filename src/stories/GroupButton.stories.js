import MyGroupButton from '../components/GroupButton.vue'

export default{
    title: 'Input/GroupButton',
    component: MyGroupButton,
    tags: ["autodocs"],
    
}
export const Base = {
    args:{
        buttons: [{id:1,text:'Click Me'},{id:2,text:'Click Me'},{id:3,text:'Click Me'}]
    }
}
