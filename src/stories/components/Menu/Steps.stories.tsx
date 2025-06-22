import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Steps, StepsProps } from 'primereact/steps';
import { MenuItem } from 'primereact/menuitem';

export default {
    title: 'Components/Menu/Steps',
    component: Steps
} as Meta;

const Template: StoryFn<StepsProps> = (args) => {
    const items: MenuItem[] = [
        {
            label: 'Personal Info'
        },
        {
            label: 'Seat'
        },
        {
            label: 'Payment'
        },
        {
            label: 'Confirmation'
        }
    ];
    
    return (
        <Steps {...args} model={items} />
    );
};

export const Default = Template.bind({});
Default.args = {}; 