import { GET_DATA, GET_SINGLE_ITEM, LOADING } from "../actions/types";

const initialState = {
  items: [],
  single_item: null,
  loading: false,
};

let dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING: {
      return { ...state, loading: action.payload };
    }
    case GET_DATA: {
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    }
    case GET_SINGLE_ITEM: {
      return { ...state, single_item: action.payload, loading: false };
    }
    default: {
      return state;
    }
  }
};

export default dataReducer;
