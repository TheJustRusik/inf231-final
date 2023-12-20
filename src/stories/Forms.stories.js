import MyForms from '../components/Forms.vue'

export default{
    title: 'Input/Forms',
    component: MyForms,
    tags: ["autodocs"],
    
}
export const RegisterExample = {
    args:{
        name:true,
        surname:true,
        phone:true,
        email:true,
        password:true
    }
}

export const LoginExample = {
    args:{
        name:false,
        surname:false,
        phone:false,
        email:true,
        password:true
    }
}