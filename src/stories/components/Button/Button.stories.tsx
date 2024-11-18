import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from 'primereact/button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    icon: { control: 'text' },
    className: { control: 'text' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args: Partial<ButtonProps>) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  className: 'p-button-primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  className: 'p-button-secondary',
};
