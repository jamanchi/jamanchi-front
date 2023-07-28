import { Meta, StoryObj } from '@storybook/react';
import Card from '.';

const meta = {
  title: 'components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    textColor: {
      control: 'select',
      options: ['primary', 'secondary', 'gray', 'black', 'white'],
    },
    borderColor: {
      control: 'select',
      options: ['primary', 'secondary', 'gray'],
    },
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    textColor: 'primary',
    borderColor: 'primary',
    children: '카드 UI',
  },
};

export const Secondary: Story = {
  args: {
    textColor: 'black',
    borderColor: 'secondary',
    children: '카드 UI',
  },
};

export const Third: Story = {
  args: {
    textColor: 'black',
    borderColor: 'gray',
    children: '카드 UI',
  },
};
