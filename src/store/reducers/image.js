export default function image(state = [], action) {
  switch (action.type) {
    case 'ADD_IMG':
      return [
        ...state,
        {
          token: action.payload.token,
          email: action.payload.title,
          password: action.payload.id,
        },
      ];

    case 'UPDATE_IMG':
      return state;
    case 'IMG_FAIL':
      return {};
    case 'IMG_DELETE':
      return {};
    default:
      return state;
  }
}
