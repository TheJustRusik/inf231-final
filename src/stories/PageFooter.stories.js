import PageFooter from '../components/PageFooter.vue';

export default {
  title: 'Content/PageFooter',
  tags: ["autodocs"],
  component: PageFooter,
};

const Template = (args) => ({
  components: { PageFooter },
  setup() {
    return { args };
  },
  template: '<PageFooter v-bind="args">Optional slot content like links or info</PageFooter>'
});

export const Default = Template.bind({});
Default.args = {
  copyright: '© 2023 Your Company Name'
};

export const CustomContent = Template.bind({});
CustomContent.args = {};
