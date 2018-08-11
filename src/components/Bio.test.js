import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Bio from './Bio';
import data from '../data/cv.json'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });

describe('Bio component testing', function() {
  it('renders without crashing', function() {
    const wrapper = shallow(<Bio cv={data} />);    
    expect(wrapper).to.have.length(1);    
  });
});