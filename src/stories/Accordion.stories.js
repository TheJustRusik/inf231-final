import Accordion from '../components/Accordion.vue';

export default {
  title: 'Containers/Accordion',
  component: Accordion,
  tags: ["autodocs"],
};

export const Default = {
    args: {
        items: [
            { header: 'Title 1', content: 'Text content 1' },
            { header: 'Title 2', content: 'Text content 2' },
            { header: 'Title 3', content: 'Text content 3' }
        ]
    }
};
