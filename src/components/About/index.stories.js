import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import About from '../About';

// About section
storiesOf('About', module).add('show About', () => <About />);
