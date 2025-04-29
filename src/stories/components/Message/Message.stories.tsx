import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Message, { MessageProps } from './Message';

export default {
  title: 'Components/Message',
  component: Message,
  argTypes: {
    onClose: { action: 'clicked' },
  },
} as Meta<typeof Message>;

const Template: StoryFn<MessageProps> = (args: MessageProps) => (
  <Message {...args} />
);

export const DefaultSeverity = Template.bind({});
DefaultSeverity.args = {
  summary: 'Severity по-умолчанию',
};

export const WithDetail = Template.bind({});
WithDetail.args = {
  summary: 'Severity по-умолчанию',
  detail: 'С текстом который указывается в пропсе detail',
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  summary: 'Severity по-умолчанию',
  detail: 'С текстом который указывается в пропсе detail',
  children: 'С проброшенным children',
};
