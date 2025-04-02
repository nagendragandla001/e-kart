import { getMovieRequest } from "../../../actions/movies";
import { RootState } from "@/types/common";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Dispatch } from "redux";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch<Dispatch<any>>();
  const navigate = useNavigate();

  const { movie, loading, error } = useSelector(
    (state: RootState) => state.movieReducer
  );

  useEffect(() => {
    if (id) {
      dispatch(getMovieRequest(id));
    }
  }, [id]);

  if (loading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }
  if (!movie) {
    return <div>No movie found</div>;
  }
  return (
    <>
      <button
        className="btn px-4 py-1 rounded cursor-pointer bg-emerald-200"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <div className="flex flex-col gap-4 p-2 shadow-lg">
        <h2 className="text-lg font-semibold">{movie.title}</h2>
        <div>{movie.actors.join(" | ")}</div>
        <div>{movie.awards}</div>
        <div>{movie.director}</div>
        <div>{movie.rating}</div>
      </div>
    </>
  );
};

export default MovieDetails;
