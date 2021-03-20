export const initialState = {
  search: '',
  results: []
};

function reducer(draft, action) {
  switch (action.type) {
    case 'search': {
      draft.search = action.payload;
      return draft;
    }

    case 'results': {
      draft.results = action.payload;
      return draft;
    }

    default: {
      throw new Error(`Unknown action type: "${action.type}"`);
    }
  }
}

export default reducer;
