import React from 'react';
import renderer from 'react-test-renderer';

// import component to test
import About from '../About';

describe('About', () => {
  it('it should render', () => {
    const component = renderer.create(<About />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
