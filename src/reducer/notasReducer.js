function notasReducer(state, action) {
  switch (action.type) {
    case "GET":
      return {
        ...state,
        notas: action.payload,
      };

    case "POST":
      return {
        ...state,
        notas: [...state.notas, action.payload],
      };

    case "DELETE":
      return {
        ...state,
        notas: state.notas.filter((nota) => nota.id !== action.payload),
      };

    case "PUT":
      return {
        ...state,
        notas: state.notas.map((nota) =>
          nota.id === action.payload.id ? action.payload : nota,
        ),
      };

    default:
      throw new Error(`Erro: ${action.type}`);
  }
}

export default notasReducer;
