import Tooltip from '../components/Tooltip.vue';

export default {
  title: 'Content/Tooltip',
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    content: { control: 'text' },
    position: {
      control: { type: 'select', options: ['top', 'right', 'bottom', 'left'] }
    }
  }
};

const Template = (args) => ({
  components: { Tooltip },
  setup() {
    return { args };
  },
  template: '<div style="margin: 50px;"><Tooltip v-bind="args">Hover me</Tooltip></div>'
});

export const Top = Template.bind({});
Top.args = {
  content: 'This is a top tooltip',
  position: 'top'
};

export const Right = Template.bind({});
Right.args = {
  content: 'This is a right tooltip',
  position: 'right'
};

export const Bottom = Template.bind({});
Bottom.args = {
  content: 'This is a bottom tooltip',
  position: 'bottom'
};

export const Left = Template.bind({});
Left.args = {
  content: 'This is a left tooltip',
  position: 'left'
};
