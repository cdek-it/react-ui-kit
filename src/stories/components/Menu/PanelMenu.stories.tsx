import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PanelMenu, PanelMenuProps } from 'primereact/panelmenu';
import { MenuItem } from 'primereact/menuitem';

export default {
    title: 'Components/Menu/PanelMenu',
    component: PanelMenu
} as Meta;

const Template: StoryFn<PanelMenuProps> = (args) => {
    const items: MenuItem[] = [
        {
            label: 'File',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-trash'
                },
            ]
        }
    ];
    
    return (
        <PanelMenu {...args} model={items} />
    );
};

export const Default = Template.bind({});
Default.args = {}; 