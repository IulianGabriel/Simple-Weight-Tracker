import { Dialog, DialogPanel } from "@headlessui/react";
import { useMutation } from "@apollo/client";
import { FaTrashAlt } from "react-icons/fa";
import { ADD_WEIGHT } from "../queries/addWeight";
import { GET_WEIGHTS } from "../queries/weightsQuery";
import { UPDATE_WEIGHT } from "../queries/updateWeight";
import { DELETE_WEIGHT } from "../queries/deleteWeight";

interface ModalInfo {
  modalWeight: string;
  modalDate: string;
  weightId: string;
}

interface AddWeightProps {
  isOpen: string;
  setIsOpen: (state: "add" | "edit" | "closed") => void;
  modalInfo: ModalInfo;
  setModalInfo: (info: ModalInfo) => void;
}

const AddWeight = ({
  isOpen,
  setIsOpen,
  modalInfo,
  setModalInfo,
}: AddWeightProps) => {
  const { modalWeight, modalDate = "", weightId } = modalInfo;
  const [addWeight] = useMutation(ADD_WEIGHT, {
    refetchQueries: [{ query: GET_WEIGHTS }],
  });

  const [updateWeight] = useMutation(UPDATE_WEIGHT, {
    refetchQueries: [{ query: GET_WEIGHTS }],
  });

  const [deleteWeight] = useMutation(DELETE_WEIGHT, {
    refetchQueries: [{ query: GET_WEIGHTS }],
  });

  const addInputWeight = () => {
    if (isOpen === "add" && modalWeight && modalDate) {
      addWeight({
        variables: {
          id: window.crypto.randomUUID(),
          date: modalDate,
          weight: parseFloat(Number(modalWeight).toFixed(2)),
        },
      });
    } else if (isOpen === "edit" && modalWeight && modalDate) {
      updateWeight({
        variables: {
          id: weightId,
          date: modalDate,
          weight: parseFloat(Number(modalWeight).toFixed(2)),
        },
      });
    }
    setIsOpen("closed");
    setModalInfo({ modalWeight: "", modalDate: "", weightId: "" });
  };

  const deleteSelectedData = () => {
    if (isOpen === "edit") {
      deleteWeight({
        variables: {
          id: weightId,
          date: modalDate,
          weight: parseFloat(Number(modalWeight).toFixed(2)),
        },
      });
    }
    setIsOpen("closed");
  };

  return (
    <>
      <div className="flex justify-center items-center mt-8 sm:mt-4">
        <button
          onClick={() => setIsOpen("add")}
          className="w-14 h-14 text-2xl rounded-full sm:w-16 sm:h-16 sm:text-3xl text-white  bg-blue-600 hover:bg-blue-500 active:scale-90"
        >
          +
        </button>
      </div>
      <Dialog
        open={isOpen === "add" || isOpen === "edit"}
        onClose={() => {
          setIsOpen("closed");
          setModalInfo({ modalWeight: "", modalDate: "", weightId: "" });
        }}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 transition-opacity duration-300 ease-out bg-black bg-opacity-70">
          <DialogPanel
            className={`max-w-lg space-y-4 bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 ease-out ${
              isOpen === "add" || isOpen === "edit"
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0"
            }`}
          >
            <p className="text-lg font-medium text-gray-900">
              {isOpen === "add" ? "Add a record" : "Update record"}
            </p>
            <input
              type="number"
              placeholder="Weight"
              value={modalWeight}
              onChange={(e) =>
                setModalInfo({ ...modalInfo, modalWeight: e.target.value })
              }
              className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-600 placeholder-gray-400"
            />

            <div className="relative">
              <input
                type="date"
                placeholder="Date"
                value={modalDate}
                onChange={(e) =>
                  setModalInfo({ ...modalInfo, modalDate: e.target.value })
                }
                className="w-full p-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-600 placeholder-gray-400"
              />
              <span className="absolute right-4 top-4 text-gray-400"></span>
            </div>

            <div className="flex justify-between mt-6">
              <button
                className={`w-24 py-2 rounded-lg border ${
                  isOpen === "add"
                    ? "text-blue-500 bg-white border-blue-500 hover:bg-gray-100"
                    : "text-red-500 bg-white border-red-500 hover:bg-red-100"
                }`}
                onClick={deleteSelectedData}
              >
                {isOpen === "add" ? (
                  "Cancel"
                ) : (
                  <p className="flex items-center justify-center">
                    Delete
                    <FaTrashAlt className="ml-1" />
                  </p>
                )}
              </button>

              <button
                onClick={addInputWeight}
                className="w-24 py-2 text-gray-50 bg-blue-600 hover:bg-blue-500 rounded-lg"
              >
                {isOpen === "add" ? "OK" : "Update"}
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default AddWeight;
