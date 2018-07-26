import React from 'react';

import { Wrapper, Text } from './elements';

import CommentBox from './components/CommentBox';
import CommentList from './components/CommentList';

const App = () => (
  <Wrapper>
    <CommentBox />
    <CommentList />
  </Wrapper>
);

export default App;
