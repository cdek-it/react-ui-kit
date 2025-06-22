import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Timeline, TimelineProps } from 'primereact/timeline';

export default {
    title: 'Components/Data/Timeline',
    component: Timeline
} as Meta;

interface TimelineEvent {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
}

const Template: StoryFn<TimelineProps> = (args) => {
    const events: TimelineEvent[] = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];
    
    return (
        <Timeline {...args} value={events} />
    );
};

export const Default = Template.bind({});
Default.args = {}; 