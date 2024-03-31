import AutoComplete from "./AutoComplete";
import "../styles/postNav.scss";
import SearchIcon from "@mui/icons-material/Search";

const PostNav = () => {
  return (
    <>
      <nav className="postsNav">
        <ul className="container">
          <li className="nav-item">
            <a className="nav-links" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-links" href="/videos">
              Videos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-links" href="/notes">
              Notes
            </a>
          </li>
        </ul>
       
        <div className="box">
        <AutoComplete />
        <button className="search-btn">
        <SearchIcon />
      </button>
        </div>
      </nav>
     
    </>
  );
};

export default PostNav;
