import "./Loader.css";
import BeatLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <div className="loader-container">
      <BeatLoader color="#34b0b0" />
    </div>
  );
};

export default Loader;
