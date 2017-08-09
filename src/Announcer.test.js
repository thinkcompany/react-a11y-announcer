import React from 'react';
import Announcer from './Announcer';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

test('Component is created', () => {
  const wrapper = renderer.create(
    <Announcer text="This is an announcement!" />
  );
  let tree = wrapper.toJSON();
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
