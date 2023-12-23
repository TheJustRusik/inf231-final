import Alert from '../components/Alert.vue';

export default {
  title: 'Content/Alert',
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    message: { control: 'text' },
    type: {
      control: { type: 'select', options: ['info', 'warning', 'error', 'success'] },
    },
    isVisible: { control: 'boolean' },
  },
};

const Template = (args) => ({
  components: { Alert },
  setup() {
    return { args };
  },
  template: '<Alert v-bind="args" />',
});

export const Info = Template.bind({});
Info.args = {
  message: 'This is an info alert.',
  type: 'info',
  isVisible: true
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'This is a warning alert.',
  type: 'warning',
  isVisible: true
};

export const Error = Template.bind({});
Error.args = {
  message: 'This is an error alert.',
  type: 'error',
  isVisible: true
};

export const Success = Template.bind({});
Success.args = {
  message: 'This is a success alert.',
  type: 'success',
  isVisible: true
};
