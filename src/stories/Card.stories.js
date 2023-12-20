import MyCard from '../components/Card.vue';

export default {
    title: 'Containers/Card',
    component: MyCard,
    tags: ["autodocs"],
    argTypes: {
        title: { control: 'text' },
        showActions: { control: 'boolean' }
    },
};

export const Default = {
    args: {
        title: 'Card container',
        showActions: false
    },
    parameters: {
        slots: {
            default: {
                template: `<p>This is card's content, you can put anything there (images, video, text, etc)</p>`,
            }
        }
    }
};

export const WithActions = {
    args: {
        title: 'Card with actions',
        showActions: true
    },
    parameters: {
        slots: {
            default: {
                template: `<p>This is card's content, you can put anything there (images, video, text, etc)</p>`,
            },
            actions: {
                template: `<button class="bg-blue-400 p-2 text-white rounded-lg mr-1">Button 1</button><button class="bg-blue-400 p-2 text-white rounded-lg">Button 2</button>`,
            }
        }
    }
    
};
