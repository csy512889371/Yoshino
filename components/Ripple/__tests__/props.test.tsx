import * as renderer from 'react-test-renderer';
import * as React from 'react';
import Ripple from '../index';

describe('Props', () => {

  test('默认', () => {
    const component = renderer.create(
      <Ripple/>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
