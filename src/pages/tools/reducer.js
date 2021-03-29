export const initialState = {
  loading: true,
  items: [],
  search: '',
  suggestions: [],
  results: [],
};

const name = (a, b) => a.name.localeCompare(b.name);

function reducer(draft, action) {
  switch (action.type) {
    case 'loaded': {
      draft.loading = false;
      return draft;
    }

    case 'items.list': {
      draft.items = [...action.payload].sort(name);
      return draft;
    }

    case 'search': {
      draft.search = action.payload;
      if (draft.search.length > 2) {
        draft.suggestions = draft.items
          .filter((i) => i.name.includes(draft.search))
          .slice(0, 5);
      }
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
