import { Meta, StoryObj } from '@storybook/react';
import Loader from '.';

const meta = {
  title: 'components/Loader',
  component: Loader,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: { duration: { control: 'number', min: 0.1, max: 3 } },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    duration: 0.5,
  },
};
