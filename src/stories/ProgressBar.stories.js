import ProgressBar from '../components/ProgressBar.vue';

export default {
  title: 'Content/ProgressBar',
  component: ProgressBar,
  tags: ["autodocs"],
  argTypes: {
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 }
    }
  }
};

const Template = (args) => ({
  components: { ProgressBar },
  setup() {
    return { args };
  },
  template: '<ProgressBar v-bind="args" />'
});

export const Default = Template.bind({});
Default.args = {
  progress: 50
};

export const Complete = Template.bind({});
Complete.args = {
  progress: 100
};

export const Empty = Template.bind({});
Empty.args = {
  progress: 0
};
