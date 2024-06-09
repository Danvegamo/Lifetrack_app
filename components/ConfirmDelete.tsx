import React from "react";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";
import SpinnerMini from "./Loader";

interface ConfirmDeleteProps {
  title: string;
  onConfirmar: (fn?: () => void) => void;
  onCloseModal?: () => void;
  isLoading?: boolean;
}

const ConfirmDelete: React.FC<ConfirmDeleteProps> = ({
  title,
  onConfirmar,
  onCloseModal,
  isLoading = false,
}) => {
  const onAction = () => {
    onConfirmar(onCloseModal);
  };

  return (
    <div className=" flex flex-col gap-3 px-6 py-8 relative">
      <button
        type="button"
        className=" p-1 border-0  hover:opacity-70 transition absolute right-3 top-3"
        onClick={() => onCloseModal?.()}
      >
        <IoMdClose size={20} />
      </button>
      <h1 className="text-[22px] font-bold text-gray-800">{title}</h1>
      <p className="text-gray-700  text-[16px] leading-[1.6] mb-4">
        ¿Estás seguro de que quieres hacer esto? No se puede deshacer.
      </p>

      <div className="flex items-center gap-3 mt-1 h-[40px]">
        <Button onClick={() => onCloseModal?.()} className="h-full" outline>
          Cancelar
        </Button>
        <Button onClick={onAction} className="h-full flex items-center justify-center">
          {isLoading ? <SpinnerMini  /> : <span> Confirmar</span>}
        </Button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
