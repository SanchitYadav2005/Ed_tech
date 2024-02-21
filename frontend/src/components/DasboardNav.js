import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import '../styles/dashboardNav.scss';
import {Link} from 'react-router-dom'
const DashboardNav = () => {
  return (
    <>
      <Link to=""><ArrowBackIosIcon className="left-arrow" fontSize="larger"/></Link>
    </>
  );
};

export default DashboardNav;
