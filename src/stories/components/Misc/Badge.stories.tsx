import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Badge, BadgeProps } from 'primereact/badge';

export default {
    title: 'Components/Misc/Badge',
    component: Badge
} as Meta;

const Template: StoryFn<BadgeProps> = (args) => {
    return (
        <Badge {...args} />
    );
};

export const Default = Template.bind({});
Default.args = {
    value: 2
}; 