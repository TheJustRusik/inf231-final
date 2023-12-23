import Table from '../components/Table.vue';

export default {
  title: 'Content/Table',
  tags: ["autodocs"],
  component: Table
};

const Template = (args) => ({
  components: { Table },
  setup() {
    return { args };
  },
  template: '<Table v-bind="args" />'
});

export const SimpleTable = Template.bind({});
SimpleTable.args = {
  headers: ['Name', 'Age', 'Country'],
  data: [
    { Name: 'John Doe', Age: 30, Country: 'USA' },
    { Name: 'Jane Smith', Age: 25, Country: 'Canada' },
    { Name: 'Sara Williams', Age: 27, Country: 'UK' }
  ]
};
