import Icons from '../components/Icon.vue';

export default {
  title: 'Content/Icons',
  component: Icons,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: { type: 'select', options: ['home', 'user', 'search'] }
    }
  }
};

const Template = (args) => ({
  components: { Icons },
  setup() {
    return { args };
  },
  template: '<Icons v-bind="args" />'
});

export const Home = Template.bind({});
Home.args = {
  icon: 'home'
};

export const User = Template.bind({});
User.args = {
  icon: 'user'
};

export const Search = Template.bind({});
Search.args = {
  icon: 'search'
};
