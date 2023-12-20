import Collapse from '../components/Collapse.vue';

export default {
  title: 'Containers/Collapse',
  component: Collapse,
  tags: ["autodocs"],
  argTypes: {
    title: { control: 'text' }
  }
};

const Template = (args) => ({
  components: { Collapse },
  setup() {
    return { args };
  },
  template: `
    <Collapse v-bind="args">
        This is collapse's content, you can put anything there (images, video, text, etc)
    </Collapse>
  `
});

export const Default = Template.bind({});
Default.args = {
  title: 'Click me!'
};
