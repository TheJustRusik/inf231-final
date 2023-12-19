import MyInputForm from '../components/InputForm.vue';

export default{
    title: 'InputForm',
    component: MyInputForm,
    tags: ["autodocs"],
    argTypes: {
        type: {
            control: 'select',
            options: ['text' ,'file', 'password', 'email', 'number', 'date']   
        },
        
    }
}   
export const Text = {
    args: {
        type: "text"
    }
}
export const File = {
    args: {
        type: "file"
    }
}
export const Password = {
    args: {
        type: "password"
    }
}
export const Email = {
    args: {
        type: "email"
    }
}
export const Number = {
    args: {
        type: "number"
    }
}
export const Date = {
    args: {
        type: "date"
    }
}