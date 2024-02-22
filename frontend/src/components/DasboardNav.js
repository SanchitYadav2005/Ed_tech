import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "../styles/dashboardNav.scss";

import { useNavigate } from "react-router-dom";

const DashboardNav = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1)
  };
  return (
    <>
      <ArrowBackIosIcon
        className="left-arrow"
        fontSize="larger"
        onClick={goBack}
      />
    </>
  );
};

export default DashboardNav;
