import "./index.css";
import Header from "./components/Header";
import AddWeight from "./components/AddWeight";
import { MyResponsiveLine } from "./components/Graph";
import { GET_WEIGHTS } from "./queries/weightsQuery";
import { useQuery } from "@apollo/client";
import { parseBeData } from "./utils/parseBeData";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState("closed");
  const [modalInfo, setModalInfo] = useState({
    modalWeight: "",
    modalDate: "",
    weightId: "",
  });
  const { loading, error, data } = useQuery(GET_WEIGHTS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <>
      <Header weightData={data.weight} />
      <div className="h-128">
        <MyResponsiveLine
          setIsOpen={setIsOpen}
          data={parseBeData(data)}
          setModalInfo={setModalInfo}
        />
      </div>
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
