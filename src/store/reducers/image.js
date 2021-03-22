export default function image(state = [], action) {
  switch (action.type) {
    case 'ADD_IMG':
      console.log('action ', action);

      // const test = state.map((foto) => foto.id === action.payload.id);

      // console.log(test);
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
        return {
          ...stt,
          title: action.payload.listTitle,
          id: action.payload.listId,
          foto: action.payload.foto,
        };
      });

      state = updated;
      return state;
    case 'DELETE_IMG':
      const newState = state.filter((stt) => stt.id !== action.payload);
      state = newState;
      return state;
    default:
      return state;
  }
}
