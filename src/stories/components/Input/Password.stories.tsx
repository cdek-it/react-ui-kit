import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Password, PasswordProps } from 'primereact/password';

export default {
  title: 'Components/Input/Password',
  component: Password,
} as Meta;

const Template: StoryFn<PasswordProps> = (args) => {
    const [value, setValue] = useState('');

    return (
        <Password {...args} value={value} onChange={(e) => setValue(e.target.value)} />
    )
}
export const Default = Template.bind({});
Default.args = {
    placeholder: 'Password'
}; 