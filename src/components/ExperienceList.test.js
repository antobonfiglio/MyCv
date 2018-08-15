import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import ExperienceList from './ExperienceList';
import data from '../data/cv.json'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });

describe('Experiences component testing', function() {
  it('renders without crashing', function() {
    const wrapper = shallow(<ExperienceList experiences={data.Experiences} />);    
    expect(wrapper).to.have.length(1);    
  });
});