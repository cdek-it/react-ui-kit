import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Divider, DividerProps } from 'primereact/divider';

export default {
  title: 'Components/Panel/Divider',
  component: Divider,
} as Meta;

const Template: StoryFn<DividerProps> = (args) => {
    return (
        <div>
            <p>Lorem ipsum dolor sit amet...</p>
            <Divider {...args} />
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem...</p>
        </div>
    )
}
export const Default = Template.bind({});
Default.args = {}; 