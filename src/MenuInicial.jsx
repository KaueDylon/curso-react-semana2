import { useReducer } from "react";
import BuscarNotas from "./BuscarNotas";
import CriarNotas from "./CriarNotas";
import Notas from "./Notas";
import useUtilsNotas from "./hooks/useUtilsNotas";

function MenuInicial() {
  const { notas, onAddNota, onDeleteNotaClick, onEditNota, buscarNotasFiltro } =
    useUtilsNotas();

  return (
    <div className="flex flex-col items-center bg-slate-500 min-h-screen w-full gap-4 p-4">
      <h1 className="text-3xl text-slate-100 font-bold text-center">
        Gerenciador de Tarefas
      </h1>

      <div className="w-full max-w-md flex flex-col gap-4">
        <BuscarNotas buscarNotasFiltro={buscarNotasFiltro} />
        <CriarNotas useReducer={useReducer} onAddNota={onAddNota} />
        <Notas
          notas={notas}
          onDeleteNotaClick={onDeleteNotaClick}
          onEditNota={onEditNota}
        />
      </div>
    </div>
  );
}

export default MenuInicial;
