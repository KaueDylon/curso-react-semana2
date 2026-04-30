import { useState } from "react";
import { ArrowBigRight, SquarePen, X } from "lucide-react";

function ModalEditarNota({ isOpen, nota, onClose, onEditNota }) {
  const [nome, setNome] = useState(nota?.nome || "");

  if (!isOpen) return null;

  return (
    <>
      {/* {console.log(nome)} */}

      <div>
        <div className="w-full bg-[#a0b4cd] rounded p-3">
          <button
            onClick={onClose}
            className="flex justify-center items-center h-10 w-10 text-blue-600"
          >
            <X size={18} />
          </button>
          <div className="bg-blue-100 rounded-xl h-10 flex items-center gap-2 px-2">
            <ArrowBigRight className="text-blue-400" />

            <input
              type="text"
              placeholder="Editar tarefa aqui..."
              className="flex-1 h-full bg-transparent outline-none"
              onChange={(e) => setNome(e.target.value)}
              value={nome}
            />

            <button
              onClick={() => {
                if (!nome.trim()) {
                  return alert("Erro! Preencha o campo de nome.");
                }
                onEditNota(nota.id, nome);
              }}
            >
              <SquarePen className="text-blue-400 cursor-pointer hover:bg-blue-300 rounded transition" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalEditarNota;
