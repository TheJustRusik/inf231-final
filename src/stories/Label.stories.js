import LabelsBadge from '../components/Label.vue';

export default {
  title: 'Content/LabelsBadge',
  component: LabelsBadge,
  tags: ["autodocs"],
  argTypes: {
    label: { control: 'text' },
    badge: { control: 'text' }
  }
};

const Template = (args) => ({
  components: { LabelsBadge },
  setup() {
    return { args };
  },
  template: '<LabelsBadge v-bind="args" />'
});

export const Default = Template.bind({});
Default.args = {
  label: 'New message!',
  badge: '5'
};

export const OnlyBadge = Template.bind({});
OnlyBadge.args = {
  badge: '8'
};

export const OnlyLabel = Template.bind({});
OnlyLabel.args = {
  label: 'Active users'
};
