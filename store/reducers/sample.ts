import * as T from "../types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case T.SAMPLE_ACTION:
      return { ...state };
    default:
      return state;
  }
}
