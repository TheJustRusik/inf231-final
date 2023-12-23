import ImageCarousel from '../components/ImageCarousel.vue';

export default {
  title: 'Content/ImageCarousel',
  component: ImageCarousel,
  tags: ["autodocs"]
};

const Template = (args) => ({
  components: { ImageCarousel },
  setup() {
    return { args };
  },
  template: '<ImageCarousel v-bind="args" />'
});

export const Default = Template.bind({});
Default.args = {
  images: [
    'https://via.placeholder.com/600x400?text=First',
    'https://via.placeholder.com/600x400?text=Second',
    'https://via.placeholder.com/600x400?text=Third'
  ]
};
