import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Checkbox, CheckboxProps } from 'primereact/checkbox';

export default {
  title: 'Components/Input/Checkbox',
  component: Checkbox,
} as Meta;

const Template: StoryFn<CheckboxProps> = (args) => {
    const [checked, setChecked] = useState(false);

    return (
        <div className="flex align-items-center">
            <Checkbox {...args} inputId="c1" checked={checked} onChange={e => setChecked(!!e.checked)} />
            <label htmlFor="c1" className="ml-2">Checkbox</label>
        </div>
    )
}
export const Default = Template.bind({});
Default.args = {}; 