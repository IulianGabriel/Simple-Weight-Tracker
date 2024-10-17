import "./index.css";
import Header from "./components/Header";
import AddWeight from "./components/AddWeight";
import { MyResponsiveLine } from "./components/Graph";
import { GET_WEIGHTS } from "./queries/weightsQuery";
import { useQuery } from "@apollo/client";
import { parseBeData } from "./utils/parseBeData";

function App() {
  const { loading, error, data } = useQuery(GET_WEIGHTS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <>
      <Header />
      <div className="h-128">
        <MyResponsiveLine data={parseBeData(data)} />
      </div>
      <AddWeight />
    </>
  );
}

export default App;
