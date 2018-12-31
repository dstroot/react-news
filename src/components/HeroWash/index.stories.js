import React from 'react';
import { storiesOf } from '@storybook/react';

// components
import HeroWash from '../HeroWash';

// images
// import image1 from './media/1.jpg';
import image2 from './media/2.jpg';
// import image3 from './media/3.jpg';
// import image4 from './media/startup.jpg';
// import image5 from './media/home.jpg';

storiesOf('HeroWash', module)
  .add('show HeroWash image 1', () => (
    <HeroWash
      image="https://www.pacificlife.com/content/dam/paclife/crp/images/brand/Brand_hero.jpg"
      tagline="You. Protected."
      line1="Our mission is protecting your financial future."
      line2="We’ve fulfilled our promise for 150 years."
    />
  ))
  .add('show HeroWash image 2', () => (
    <HeroWash
      image={image2}
      tagline="You. Protected."
      line1="Our mission is protecting your financial future."
      line2="We’ve fulfilled our promise for 150 years."
    />
  ));
