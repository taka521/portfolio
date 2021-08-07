import TopPage from '@/component/page/index';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'component/page/index',
  component: TopPage,
} as ComponentMeta<typeof TopPage>;

const Template: ComponentStory<typeof TopPage> = (args) => <TopPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
