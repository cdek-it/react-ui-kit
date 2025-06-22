import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Tag, TagProps } from 'primereact/tag';

export default {
    title: 'Components/Misc/Tag',
    component: Tag
} as Meta;

const Template: StoryFn<TagProps> = (args) => {
    return (
        <Tag {...args} />
    );
};

export const Default = Template.bind({});
Default.args = {
    value: "Primary"
}; 