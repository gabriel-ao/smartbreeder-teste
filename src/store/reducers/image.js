export default function image(state = [], action) {
  switch (action.type) {
    case 'ADD_IMG':
      return [
        ...state,
        {
          token: action.payload.token,
          title: action.payload.title,
          id: action.payload.id,
        },
      ];

    case 'UPDATE_IMG':
      return state;
    case 'DELETE_IMG':
      const newState = state.filter((stt) => stt.id !== action.payload);
      state = newState;
      return state;

    case 'IMG_FAIL':
      return {};
    case 'IMG_DELETE':
      return {};
    default:
      return state;
  }
}
