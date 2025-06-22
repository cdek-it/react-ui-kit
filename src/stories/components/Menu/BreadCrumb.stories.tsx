import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { BreadCrumb, BreadCrumbProps } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';

export default {
    title: 'Components/Menu/BreadCrumb',
    component: BreadCrumb
} as Meta;

const Template: StoryFn<BreadCrumbProps> = (args) => {
    const items: MenuItem[] = [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }];
    const home: MenuItem = { icon: 'pi pi-home', url: 'https://primereact.org' }
    
    return (
        <BreadCrumb {...args} model={items} home={home} />
    );
};

export const Default = Template.bind({});
Default.args = {}; 