import * as ActionTypes from '../actions/actionTypes';

const initialState = {
  comments: [],
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_COMMENT_SUCCEEDED: {
      return {
        ...state,
        comments: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default commentsReducer;
