import { MutatingDots } from "react-loader-spinner";
import "../styles/loader.scss";
const Loader = () => {
  return (
    <div className="mutating-dots">
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#f34a23"
        secondaryColor="#f34a23"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
