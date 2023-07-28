import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'select', options: ['primary', 'secondary'] },
    fontColor: { control: 'select', options: ['white', 'black'] },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    fontColor: 'white',
    children: 'button',
    color: 'primary',
  },
};
export const Secondary: Story = {
  args: {
    fontColor: 'black',
    children: 'button',
    color: 'secondary',
  },
};
