import { Meta, StoryObj } from '@storybook/react';
import CardSlider from '.';
import Card from '../Card';

const meta = {
  title: 'components/CardSlider',
  component: CardSlider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'number' },
    gap: { control: 'number' },
  },
} satisfies Meta<typeof CardSlider>;

export default meta;
type Stroy = StoryObj<typeof meta>;

export const Slider: Stroy = {
  render: (args) => (
    <CardSlider {...args}>
      <Card>카드1</Card>
      <Card>카드2</Card>
    </CardSlider>
  ),
  args: {
    width: 100,
    gap: 10,
  },
};
