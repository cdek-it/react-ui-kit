import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { RadioButton, RadioButtonProps } from 'primereact/radiobutton';

export default {
  title: 'Components/Input/RadioButton',
  component: RadioButton,
} as Meta;

const Template: StoryFn<RadioButtonProps> = (args) => {
    const [ingredient, setIngredient] = useState('');
    
    return (
        <div className="flex flex-wrap gap-3">
            <div className="flex align-items-center">
                <RadioButton {...args} inputId="ingredient1" name="pizza" value="Cheese" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Cheese'} />
                <label htmlFor="ingredient1" className="ml-2">Cheese</label>
            </div>
            <div className="flex align-items-center">
                <RadioButton {...args} inputId="ingredient2" name="pizza" value="Mushroom" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Mushroom'} />
                <label htmlFor="ingredient2" className="ml-2">Mushroom</label>
            </div>
        </div>
    )
}
export const Default = Template.bind({});
Default.args = {}; 