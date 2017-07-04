import React from 'react';
import { shallow } from 'enzyme';
import EsriMapView from 'components\esriMapView\EsriMapView.js';

describe('<EsriMapView />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<EsriMapView />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "esrimapview-component"', function () {
      expect(component.hasClass('esrimapview-component')).to.equal(true);
    });
  });
});
