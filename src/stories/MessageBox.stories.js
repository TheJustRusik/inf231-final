import MessageBox from '../components/MessageBox.vue';

export default {
  title: 'Content/MessageBox',
  component: MessageBox,
  tags: ["autodocs"],
  argTypes: {
    message: { control: 'text' },
    type: {
      control: { type: 'select', options: ['info', 'warning', 'error'] }
    }
  }
};

const Template = (args) => ({
  components: { MessageBox },
  setup() {
    return { args };
  },
  template: '<MessageBox v-bind="args" />'
});

export const Info = Template.bind({});
Info.args = {
  message: 'This is an informational message.',
  type: 'info'
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'This is a warning message.',
  type: 'warning'
};

export const Error = Template.bind({});
Error.args = {
  message: 'This is an error message.',
  type: 'error'
};
