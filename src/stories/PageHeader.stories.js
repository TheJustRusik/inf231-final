import PageHeader from '../components/PageHeader.vue';

export default {
  title: 'Content/PageHeader',
  tags: ["autodocs"],
  component: PageHeader
};

const Template = (args) => ({
  components: { PageHeader },
  setup() {
    return { args };
  },
  template: '<PageHeader v-bind="args">Optional slot content like buttons</PageHeader>'
});

export const Default = Template.bind({});
Default.args = {
  title: 'Main Title',
  subtitle: 'Subtitle'
};

export const WithoutSubtitle = Template.bind({});
WithoutSubtitle.args = {
  title: 'Main Title'
};
