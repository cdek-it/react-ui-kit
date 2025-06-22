import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { AutoComplete, AutoCompleteProps } from 'primereact/autocomplete';

export default {
  title: 'Components/Input/AutoComplete',
  component: AutoComplete,
} as Meta;

const Template: StoryFn<AutoCompleteProps> = (args) => {
    const [value, setValue] = useState('');
    const [items, setItems] = useState<string[]>([]);
    const allItems = ['ActionScript', 'AppleScript', 'Asp', 'Assembly', 'BASIC', 'C', 'C++', 'Clojure', 'COBOL', 'ColdFusion', 'Erlang', 'Fortran', 'Groovy', 'Haskell', 'Java', 'JavaScript', 'Lisp', 'Perl', 'PHP', 'Python', 'Ruby', 'Scala', 'Scheme'];

    const search = (event) => {
        let _items = allItems.filter((item) => {
            return item.toLowerCase().startsWith(event.query.toLowerCase());
        });
        setItems(_items);
    }

    return (
        <AutoComplete {...args} value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} />
    )
}
export const Default = Template.bind({});
Default.args = {}; 