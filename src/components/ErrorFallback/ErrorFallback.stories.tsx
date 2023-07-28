import { Meta, StoryObj } from '@storybook/react';
import ErrorFallback from '.';

const meta = {
  title: 'components/ErrorFallback',
  component: ErrorFallback,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    error: { control: 'object' },
  },
} satisfies Meta<typeof ErrorFallback>;

export default meta;
type Stroy = StoryObj<typeof meta>;

export const Default: Stroy = {
  args: {
    error: { name: '문법 에러!', message: '문법 에러!' },
  },
};
