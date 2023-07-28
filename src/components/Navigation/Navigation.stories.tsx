import { Meta, StoryObj } from '@storybook/react';
import Navigation from '.';

const meta = {
  title: 'components/Navigation',
  component: Navigation,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ width: '360px' }}>
      <Navigation />
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div style={{ width: '360px' }}>
      <Navigation>네비게이션 바</Navigation>
    </div>
  ),
};
