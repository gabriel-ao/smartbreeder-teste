export default function user(state = [], action) {
  switch (action.type) {
    case 'ADD_USER':
      console.log('action', action);
      console.log('state', state);

      return [
        ...state,
        {
          id: Math.random(),
          email: action.payload.email,
          password: action.payload.password,
        },
      ];

    case 'LOGGED_IN':
      return state;
    case 'LOGIN_FAIL':
      return {};
    case 'LOGGED_OUT':
      return {};
    default:
      return state;
  }
}
