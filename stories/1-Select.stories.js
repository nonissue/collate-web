import React from 'react';
import { ViewMajorMonotone } from '@shopify/polaris-icons';

import Select from '../components/Select';

const demoOptions = [
  { value: 'date', label: 'Date' },
  { value: 'popular', label: 'Popular' },
];

export default { title: 'Select' };

export const SelectInline = () => (
  <Select options={demoOptions} label="Sort by" labelinline={false} />
);

export const SelectWithIcon = () => (
  <Select options={demoOptions} label="Sort by" labelinline={false} Icon={ViewMajorMonotone} />
);
