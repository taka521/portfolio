import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Layout } from './index';

export default {
  title: 'component/layout/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = args => <Layout {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Primary",
  children: <p>hello</p>
};
