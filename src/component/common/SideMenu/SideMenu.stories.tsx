import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SideMenu } from './index';

export default {
  title: 'component/common/SideMenu',
  component: SideMenu,
} as ComponentMeta<typeof SideMenu>;

const Template: ComponentStory<typeof SideMenu> = (args) => <SideMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
