import React, { useState, useEffect, useContext } from "react";
import AddStore from "../components/AddStore";
import AuthContext from "../AuthContext";

function Store() {
  const [showModal, setShowModal] = useState(false);
  const [stores, setAllStores] = useState([]);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    fetchData();
  }, []);

  // Fetching all stores data
  const fetchData = () => {
    fetch(`http://localhost:4000/api/store/get/${authContext.user}`)
      .then((response) => response.json())
      .then((data) => {
        setAllStores(data);
      });
  };

  const modalSetting = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="col-span-12 lg:col-span-10 flex justify-center">
      <div className="flex flex-col gap-5 w-11/12 p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-extrabold text-gray-800">Stores</span>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 text-xs rounded-lg"
            onClick={modalSetting}
          >
            Add Store
          </button>
        </div>
        {showModal && <AddStore />}
        {stores.map((element) => {
          return (
            <div
              className="bg-white w-full max-w-md h-fit flex flex-col gap-4 p-4 rounded-lg shadow-md"
              key={element._id}
            >
              <div className="flex flex-col gap-3">
                <span className="text-xl font-semibold text-gray-800">{element.name}</span>
                <div className="flex items-center text-gray-600">
                  <img
                    alt="location-icon"
                    className="h-6 w-6 mr-2"
                    src={require("../assets/location-icon.png")}
                  />
                  <span>{element.address + ", " + element.city}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Store;
