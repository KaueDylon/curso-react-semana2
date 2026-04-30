import { SquarePlus, ArrowBigRight } from "lucide-react";
import { useState } from "react";

function CriarNotas({ onAddNota }) {
  const [nome, setNome] = useState("");
  return (
    <div className="w-full bg-[#a0b4cd] rounded p-3">
      <div className="bg-blue-100 rounded-xl h-10 flex items-center gap-2 px-2">
        <ArrowBigRight className="text-blue-400" />

        <input
          type="text"
          placeholder="Criar nova tarefa aqui..."
          className="flex-1 h-full bg-transparent outline-none"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />

        <button
          onClick={() => {
            if (!nome.trim()) {
              return alert("Erro! Preencha o campo de nome.");
            }
            onAddNota(nome);
            setNome("");
          }}
        >
          <SquarePlus className="text-blue-400 cursor-pointer hover:bg-blue-300 rounded transition" />
        </button>
      </div>
    </div>
  );
}

export default CriarNotas;
