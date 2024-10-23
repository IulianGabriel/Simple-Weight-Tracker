import "./index.css";
import Header from "./components/Header";
import AddWeight from "./components/AddWeight";
import { MyResponsiveLine } from "./components/Graph";
import { GET_WEIGHTS } from "./queries/weightsQuery";
import { useQuery } from "@apollo/client";
import { parseBeData } from "./utils/parseBeData";
import { useState } from "react";
import { SyncLoader } from "react-spinners";
function App() {
  const [isOpen, setIsOpen] = useState("closed");
  const [modalInfo, setModalInfo] = useState({
    modalWeight: "",
    modalDate: "",
    weightId: "",
  });

  const { loading, error, data } = useQuery(GET_WEIGHTS);

  if (error) return `Error! ${error.message}`;

  return loading ? (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-blue-500 text-xl mb-4">
        App is loading, please wait...
      </p>
      <SyncLoader color="#3b82f6" />
    </div>
  ) : (
    <>
      <Header weightData={data.weight} />
      <MyResponsiveLine
        setIsOpen={setIsOpen}
        data={parseBeData(data)}
        setModalInfo={setModalInfo}
      />
      <AddWeight
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalInfo={modalInfo}
        setModalInfo={setModalInfo}
      />
    </>
  );
}
export default App;
