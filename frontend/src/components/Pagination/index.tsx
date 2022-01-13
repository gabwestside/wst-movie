import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import './styles.css';

function Pagination() {
  return (
    <div className="wstmovie-pagination-container">
      <div className="wstmovie-pagination-box">
        <button className="wstmovie-pagination-button" disabled={true}>
          <Arrow />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="wstmovie-pagination-button" disabled={false}>
          <Arrow className="wstmovie-flip-horizontal" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
