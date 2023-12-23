import List from '../components/List.vue';

export default {
  title: 'Content/List',
  tags: ["autodocs"],
  component: List
};

const Template = (args) => ({
  components: { List },
  setup() {
    return { args };
  },
  template: '<List v-bind="args" />'
});

export const SimpleList = Template.bind({});
SimpleList.args = {
  items: ['Item 1', 'Item 2', 'Item 3']
};

export const LongList = Template.bind({});
LongList.args = {
  items: Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`)
};
