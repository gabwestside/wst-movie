import axios from "axios";
import MovieCard from "components/MovieCard";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";
import Pagination from "../../components/Pagination";

function Listing() {

  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=0`)
    .then((response) => {
      const data = response.data as MoviePage;
      console.log(data);
      setPageNumber(data.number);
    });
  }, []);

  
  return (
    <>
      <p>{pageNumber}</p>
      <Pagination />

      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Listing;
