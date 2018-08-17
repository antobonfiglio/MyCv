import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Toggle from './Toggle';
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });

describe('Toggle component testing', function() {
  it('renders without crashing', function() {
    const wrapper = shallow(<Toggle isInEditMode={false} />);    
    expect(wrapper).to.have.length(1);    
  });
});