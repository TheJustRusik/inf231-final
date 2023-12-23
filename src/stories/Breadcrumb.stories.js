import Breadcrumb from '../components/Breadcrumb.vue';

export default {
  title: 'Example/Breadcrumb',
  component: Breadcrumb,
};

const Template = (args) => ({
  components: { Breadcrumb },
  setup() {
    return { args };
  },
  template: '<Breadcrumb v-bind="args" />'
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { text: 'Home', href: '#' },
    { text: 'Library', href: '#' },
    { text: 'Data', href: '#' }
  ]
};
