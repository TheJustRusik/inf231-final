import SearchBar from '../components/SearchBar.vue';

export default {
  title: 'Example/SearchBar',
  component: SearchBar,
};

const Template = (args, { argTypes }) => ({
  components: { SearchBar },
  setup() {
    return { args };
  },
  template: '<SearchBar v-bind="args" @onSearch="onSearch" />',
  methods: {
    onSearch(query) {
      alert(`Поиск по запросу: "${query}"`);
    }
  }
});

export const Default = Template.bind({});
