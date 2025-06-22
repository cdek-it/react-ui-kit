import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Message, MessageProps } from 'primereact/message';

export default {
    title: 'Components/Messages/Message',
    component: Message
} as Meta;

const Template: StoryFn<MessageProps> = (args) => {
    return (
        <Message {...args} />
    );
};

export const Default = Template.bind({});
Default.args = {
    text: 'This is a message'
}; 