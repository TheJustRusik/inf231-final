import SidebarMenu from '../components/SidebarMenu.vue';

export default {
  title: 'Content/SidebarMenu',
  tags: ["autodocs"],
  component: SidebarMenu
};

const Template = (args) => ({
    components: { SidebarMenu },
    setup() {
      return { args };
    },
    template: '<SidebarMenu v-bind="args" />'
  });
  
  export const Default = Template.bind({});
  Default.args = {
    menuItems: [
      { name: 'Dashboard', icon: 'fa fa-home' },
      { name: 'Settings', icon: 'fa fa-cog' },
      { name: 'Messages', icon: 'fa fa-envelope' },
      { name: 'Notifications', icon: 'fa fa-bell' }
    ]
  };