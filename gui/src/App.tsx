import AddWeight from "./components/AddWeight";
import { MyResponsiveLine } from "./components/Graph";
import Header from "./components/Header";
import "./index.css";

const DUMMY_DATA = [
  {
    id: "japan",
    color: "hsl(284, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 226,
      },
      {
        x: "helicopter",
        y: 180,
      },
      {
        x: "boat",
        y: 242,
      },
      {
        x: "train",
        y: 269,
      },
      {
        x: "subway",
        y: 276,
      },
      {
        x: "bus",
        y: 215,
      },
      {
        x: "car",
        y: 113,
      },
      {
        x: "moto",
        y: 146,
      },
    ],
  },
];

function App() {
  return (
    <>
      <Header />
      <div className="h-128">
        <MyResponsiveLine data={DUMMY_DATA} />
      </div>
      <AddWeight />
    </>
  );
}

export default App;
