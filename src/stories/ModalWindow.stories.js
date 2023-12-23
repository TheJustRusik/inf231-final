import ModalWindow from '../components/ModalWindow.vue';

export default {
  title: 'Content/ModalWindow',
  component: ModalWindow,
  tags: ["autodocs"],
  argTypes: {
    title: { control: 'text' },
    isVisible: { control: 'boolean' }
  }
};

const Template = (args, { argTypes }) => ({
  components: { ModalWindow },
  props: Object.keys(argTypes),
  setup() {
    return { args };
  },
  template: `
    <ModalWindow v-bind="args">
      <template #header>
        <h2>{{ args.title }}</h2>
      </template>
      <p>This is the content of the modal window.</p>
    </ModalWindow>
  `,
});

export const Visible = Template.bind({});
Visible.args = {
  title: 'Modal Title',
  isVisible: true
};

export const NotVisible = Template.bind({});
NotVisible.args = {
  title: 'Hidden Modal',
  isVisible: false
};
