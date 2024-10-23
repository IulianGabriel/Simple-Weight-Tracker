interface WeightData {
  weight: number;
  date: string;
}

interface HeaderProps {
  weightData: WeightData[];
}

const Header = ({ weightData }: HeaderProps) => {
  const highestWeight = Math.max(...weightData.map((data) => data.weight));
  const lowestWeight = Math.min(...weightData.map((data) => data.weight));
  const currentWeight = weightData[weightData.length - 1].weight;

  return (
    <>
      <h3 className="text-xl text-gray-50 text-center mt-8 sm:text-3xl">
        Simple Weight Tracker
      </h3>
      <div className="bg-gray-900 text-white rounded-md p-4 grid grid-cols-3 gap-4 sm:grid-cols-3 ml-4 mr-4 mt-8">
        <div className="text-center border-r border-opacity-5 border-gray-200">
          <p className="text-sm sm:text-lg">Highest</p>
          <p className="text-lg sm:text-2xl font-bold">{highestWeight}kg</p>
        </div>

        <div className="text-center border-r border-opacity-5 border-gray-200">
          <p className="text-sm sm:text-lg pr-4">Current</p>
          <p className="text-lg sm:text-2xl font-bold pr-4">
            {currentWeight}kg
          </p>
        </div>

        <div className="text-center">
          <p className="text-sm sm:text-lg">Lowest</p>
          <p className="text-lg sm:text-2xl font-bold">{lowestWeight}kg</p>
        </div>
      </div>
    </>
  );
};

export default Header;
