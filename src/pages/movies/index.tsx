import { getMoviesRequest } from "../../actions/movies";
import PageSkeletion from "../../components/PageSkeletion";
import { RootState } from "@/types/common";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Dispatch } from "redux";

const Movies = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<Dispatch<any>>();
  const { movies, loading, error } = useSelector(
    (state: RootState) => state.movieReducer
  );

  useEffect(() => {
    dispatch(getMoviesRequest());
  }, []);

  if (loading) {
    return <PageSkeletion />;
  } else if (error) {
    return <div className="text-red-500">{error}</div>;
  } else if (!movies || movies.length === 0) {
    return <div className="">No movies are available</div>;
  } else {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white shadow-md rounded-lg cursor-pointer flex  flex-col items-start hover:shadow-lg transition-shadow duration-50"
            onClick={() => navigate(`/movies/${movie.id}`)}
          >
            <img
              src={movie.poster}
              alt={`${movie.title} ${movie.year}`}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-2 flex-grow w-full">
              <h2 className="text-lg font-semibold">{`${movie.title} ${movie.year}`}</h2>
              <p className="text-gray-600">{`$${movie.awards}`}</p>
              <p className="text-gray-600">{`${movie.director} - ${movie.rating}`}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default Movies;
