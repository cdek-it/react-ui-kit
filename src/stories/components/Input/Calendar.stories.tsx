import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Calendar, CalendarProps } from 'primereact/calendar';

export default {
  title: 'Components/Input/Calendar',
  component: Calendar,
} as Meta;

const Template: StoryFn<CalendarProps> = (args) => {
    const [date, setDate] = useState<any>(null);

    return (
        <Calendar {...args} value={date} onChange={(e: any) => setDate(e.value || null)} />
    )
}
export const Default = Template.bind({});
Default.args = {}; 