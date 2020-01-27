import { addParameters } from '@storybook/react'; // <- or your storybook framework

addParameters({
  backgrounds: [
    { name: 'white', value: '#fff', default: true },
    { name: 'twitter', value: '#00aced', default: true },
    { name: 'facebook', value: '#3b5998' },
  ],
});
