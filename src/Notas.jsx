import { PencilIcon, Trash } from "lucide-react";
import ModalEditarNota from "./ModalEditarNota";
import { useState } from "react";

function Notas({ notas, onDeleteNotaClick, onEditNota }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [notaSelecionada, setNotaSelecionada] = useState(null);

  return (
    <>
      <ul className="flex flex-col bg-[#a0b4cd] w-full gap-3 p-4 rounded max-h-70 overflow-y-auto">
        {notas.map((nota) => (
          <li
            key={nota.id}
            className="flex items-center justify-between bg-blue-100 rounded-xl h-12 px-3 text-gray-600"
          >
            <span className="truncate">{nota.nome}</span>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  setNotaSelecionada(nota);
                  setModalOpen(true);
                }}
                className="flex justify-center items-center bg-blue-200 h-8 w-8 rounded-lg text-blue-600 hover:bg-blue-300 transition"
              >
                <PencilIcon size={18} />
              </button>

              <button
                onClick={() => onDeleteNotaClick(nota.id)}
                className="flex justify-center items-center bg-blue-200 h-8 w-8 rounded-lg text-blue-600 hover:bg-blue-300 transition"
              >
                <Trash size={18} />
              </button>
            </div>
          </li>
        ))}
      </ul>

      <ModalEditarNota
        onEditNota={onEditNota}
        isOpen={modalOpen}
        nota={notaSelecionada}
        key={notaSelecionada?.id}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}

export default Notas;
