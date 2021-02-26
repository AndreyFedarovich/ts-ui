import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DropdownDemo, DropdownMultipleDemo } from './dropdown.demo';

export default {
  title: 'Dropdowns',
  component: DropdownDemo,
} as Meta;

export const DropdownMultiple: Story = () => <DropdownMultipleDemo />;
export const Dropdown: Story = () => <DropdownDemo />;

