import { useEffect, useReducer } from "react";
import notasReducer from "../reducer/notasReducer";

const initialState = { notas: [] };

function useUtilsNotas() {
  const [state, dispatch] = useReducer(notasReducer, initialState);

  // GET
  useEffect(() => {
    const fetchNotas = async () => {
      const response = await fetch("http://localhost:3001/tarefas");
      const data = await response.json();

      dispatch({ type: "GET", payload: data });
    };

    fetchNotas();
  }, []);

  // GET-FILTRADO

  async function buscarNotasFiltro(filtro) {
    const fetchNotas = async () => {
      const url = filtro
        ? `http://localhost:3001/tarefas?q=${filtro}`
        : `http://localhost:3001/tarefas`;

      const response = await fetch(url);

      const data = await response.json();

      dispatch({ type: "GET", payload: data });
    };

    fetchNotas();
  }

  // POST
  async function onAddNota(nome) {
    try {
      const response = await fetch("http://localhost:3001/tarefas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome }),
      });

      const novaNota = await response.json();

      dispatch({ type: "POST", payload: novaNota });
    } catch (err) {
      console.error(err);
    }
  }

  // DELETE
  async function onDeleteNotaClick(id) {
    try {
      await fetch(`http://localhost:3001/tarefas/${id}`, {
        method: "DELETE",
      });

      dispatch({ type: "DELETE", payload: id });
    } catch (err) {
      console.error(err);
    }
  }

  async function onEditNota(id, nome) {
    try {
      const response = await fetch(`http://localhost:3001/tarefas/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome }),
      });

      const novaNota = await response.json();

      dispatch({ type: "PUT", payload: id, novaNota });
    } catch (err) {
      console.error(err);
    }
  }

  return {
    notas: state.notas,
    onAddNota,
    onDeleteNotaClick,
    onEditNota,
    buscarNotasFiltro,
  };
}

export default useUtilsNotas;
