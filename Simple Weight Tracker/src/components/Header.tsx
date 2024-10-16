const Header = () => {
  return (
    <>
      <h3 className="text-gray-50 text-center mt-4 sm:text-3xl">
        Simple Weight Tracker
      </h3>
      <div className="bg-gray-900 text-white rounded-md p-4 grid grid-cols-3 gap-4 sm:grid-cols-3 ml-4 mr-4 mt-4">
        <div className="text-center border-r border-opacity-5 border-gray-200">
          <p className="text-sm sm:text-lg">Highest</p>
          <p className="text-lg sm:text-2xl font-bold">300kg</p>
        </div>

        <div className="text-center border-r border-opacity-5 border-gray-200">
          <p className="text-sm sm:text-lg pr-4">Current</p>
          <p className="text-lg sm:text-2xl font-bold pr-4">100kg</p>
        </div>

        <div className="text-center">
          <p className="text-sm sm:text-lg">Lowest</p>
          <p className="text-lg sm:text-2xl font-bold">50kg</p>
        </div>

        <div className="col-span-3 border-t border-opacity-5 border-gray-200 my-4"></div>

        <div className="text-center border-r border-opacity-5 border-gray-200">
          <p className="text-sm sm:text-lg">This Week</p>
          <p className="text-lg sm:text-2xl font-bold">0.2kg</p>
        </div>

        <div className="text-center border-r border-opacity-5 border-gray-200">
          <p className="text-sm sm:text-lg pr-4">This Month</p>
          <p className="text-lg sm:text-2xl font-bold pr-4">13.1kg</p>
        </div>

        <div className="text-center">
          <p className="text-sm sm:text-lg">Total</p>
          <p className="text-lg sm:text-2xl font-bold">200kg</p>
        </div>
      </div>
    </>
  );
};

export default Header;
