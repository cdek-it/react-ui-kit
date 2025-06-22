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
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  className: 'p-button-secondary',
};

export const Severity = () => {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Primary" />
            <Button label="Secondary" severity="secondary" />
            <Button label="Success" severity="success" />
            <Button label="Info" severity="info" />
            <Button label="Warning" severity="warning" />
            <Button label="Help" severity="help" />
            <Button label="Danger" severity="danger" />
        </div>
    )
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Danger Button',
  severity: 'danger',
};
