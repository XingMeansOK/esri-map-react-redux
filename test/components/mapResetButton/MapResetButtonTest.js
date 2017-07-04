import React from 'react';
import { shallow } from 'enzyme';
import MapResetButton from 'components\mapResetButton\MapResetButton.js';

describe('<MapResetButton />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<MapResetButton />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "mapresetbutton-component"', function () {
      expect(component.hasClass('mapresetbutton-component')).to.equal(true);
    });
  });
});
