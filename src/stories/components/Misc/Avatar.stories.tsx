import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Avatar, AvatarProps } from 'primereact/avatar';

export default {
    title: 'Components/Misc/Avatar',
    component: Avatar
} as Meta;

const Template: StoryFn<AvatarProps> = (args) => {
    return (
        <Avatar {...args} />
    );
};

export const Default = Template.bind({});
Default.args = {
    label: 'P',
    size: 'xlarge',
    shape: 'circle'
}; 