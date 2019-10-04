import Adapter from 'enzyme-adapter-react-16';
import Announcer from '../src/Announcer';
import React from 'react';
import { configure, shallow, mount } from 'enzyme';

configure({ adapter: new Adapter() });

test('Component is created', () => {
  const wrapper = mount(<Announcer text="This is an announcement!" />);
  let tree = wrapper.html();
  expect(tree).toMatchSnapshot();
});

test('Should have a default politeness prop of `polite`', () => {
  const wrapper = shallow(<Announcer text="" />);
  const politeness = wrapper.instance().props.politeness;
  expect(politeness).toBe('polite');
});

test('Text node updates when state changes', () => {
  // Since we really can't test the live announcement,
  // we can at least ensure the text node gets updated.
  const wrapper = shallow(<Announcer text="" />);
  const testAnnouncementStr = 'Here\'s a new announcement!';
  expect(wrapper.text()).toEqual('');
  wrapper.setProps({ text: testAnnouncementStr });
  expect(wrapper.text()).toEqual(testAnnouncementStr);
});
