import { ArrowBigRight, Search } from "lucide-react";
import { useEffect, useState } from "react";
import useDebounce from "./debounce/notasDebounce";

function BuscarNotas({ buscarNotasFiltro }) {
  const [filtro, setFiltro] = useState("");
  const filtroDebounced = useDebounce(filtro, 500);

  useEffect(() => {
    buscarNotasFiltro(filtroDebounced);
  }, [filtroDebounced]);

  return (
    <div className="w-full bg-[#a0b4cd] rounded p-3">
      <div className="bg-blue-100 rounded-xl h-10 flex items-center gap-2 px-2">
        <ArrowBigRight className="text-blue-400" />

        <input
          type="text"
          placeholder="Buscar tarefas aqui..."
          className="flex-1 h-full bg-transparent outline-none"
          value={filtro}
          onChange={(event) => setFiltro(event.target.value)}
        />

        <button>
          <Search className="text-blue-400 cursor-pointer hover:bg-blue-300 rounded transition" />
        </button>
      </div>
    </div>
  );
}

export default BuscarNotas;
