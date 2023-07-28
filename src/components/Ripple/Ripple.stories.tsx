import { Meta, StoryObj } from '@storybook/react';
import Ripple from '.';

const meta = {
  title: 'components/Ripple',
  component: Ripple,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    duration: { control: 'number', ratio: 100, min: 0, max: 900 },
    color: { control: 'color' },
  },
} satisfies Meta<typeof Ripple>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div
      style={{
        width: '200px',
        height: '200px',
        border: '1px solid #000',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Ripple {...args} />
    </div>
  ),
  args: {
    duration: 700,
    color: '#000',
  },
};
