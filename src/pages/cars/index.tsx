import PageSkeletion from "../../components/PageSkeletion";
import { getCarsRequestAction } from "../../actions/cars";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "@/types/common";

const Cars = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, cars } = useSelector(
    (state: RootState) => state.carReducer
  );

  useEffect(() => {
    dispatch(getCarsRequestAction());
  }, [dispatch, getCarsRequestAction]);

  if (loading) {
    return <PageSkeletion />;
  } else if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  } else if (!cars || cars.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg">No cars available</p>
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white shadow-md rounded-lg cursor-pointer flex  flex-col items-start hover:shadow-lg transition-shadow duration-50"
            onClick={() => navigate(`/cars/${car.id}`)}
          >
            <img
              src={car.image}
              alt={`${car.make} ${car.model}`}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-2 flex-grow w-full">
              <div className="flex flex-row items-center justify-between">
                <h2 className="text-lg font-semibold">{`${car.make} ${car.model}`}</h2>
                <p className="text-gray-600">{`$${car.price}`}</p>
              </div>
              <p className="text-gray-600">{`${car.year} - ${car.color}`}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default Cars;
