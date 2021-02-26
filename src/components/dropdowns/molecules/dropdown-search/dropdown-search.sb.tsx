import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DropdownSearchMultipleDemo, DropdownSearchDemo } from './dropdown-search.demo';

export default {
  title: 'Dropdowns',
  component: DropdownSearchMultipleDemo,
} as Meta;

export const DropdownSearchMultiple: Story = () => <DropdownSearchMultipleDemo />;
export const DropdownSearch: Story = () => <DropdownSearchDemo />;

