import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Accordion, AccordionTab, AccordionProps } from 'primereact/accordion';

export default {
  title: 'Components/Panel/Accordion',
  component: Accordion,
} as Meta;

const Template: StoryFn<AccordionProps> = (args) => {
    return (
        <Accordion {...args}>
            <AccordionTab header="Header I">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </AccordionTab>
            <AccordionTab header="Header II">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem...</p>
            </AccordionTab>
            <AccordionTab header="Header III">
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui...</p>
            </AccordionTab>
        </Accordion>
    )
}
export const Default = Template.bind({});
Default.args = {}; 