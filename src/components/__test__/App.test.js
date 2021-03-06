import React from 'react';
import { shallow } from 'enzyme';

import App from '../../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

//! since tests run in node, we're running the JSDOM library, a fake representation of the window. all .document and divs are fake!

it('shows comment box', () => {
  // imply that the comp is a wrapped version, not the real thing. shallow renders out only the component and none of its children (react components)
  const wrapper = shallow(<App />);
  // expect wrapper to have exactly 1 instance of CommentBox && CommentList mounted
  expect(wrapper.find(CommentBox).length).toEqual(1);
  expect(wrapper.find(CommentList).length).toEqual(1);
});
