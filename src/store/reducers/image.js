export default function image(state = [], action) {
  switch (action.type) {
    case 'ADD_IMG':
      return [
        ...state,
        {
          foto: action.payload.foto,
          title: action.payload.title,
          id: action.payload.id,
        },
      ];

    case 'UPDATE_IMG':
      const updated = state.map(function (stt) {
        if (stt.id === action.payload.listId) {
          return {
            ...stt,
            title: action.payload.listTitle,
          };
        }
        return stt;
      });

      state = updated;
      return state;
    case 'DELETE_IMG':
      const newState = state.filter(
        (stt) => stt.id !== action.payload.id && stt.title !== action.payload.id
      );
      state = newState;
      return state;
    default:
      return state;
  }
}
