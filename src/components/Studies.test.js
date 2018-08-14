import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Studies from './Studies';
import data from '../data/cv.json'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });

describe('Studies component testing', function() {
  it('renders without crashing', function() {
    const wrapper = shallow(<Studies studies={data.Studies} />);    
    expect(wrapper).to.have.length(1);    
  });
});