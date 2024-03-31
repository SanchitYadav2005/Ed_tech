import '../styles/postNav.scss';

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
      </nav>
    </>
  );
};

export default PostNav;
