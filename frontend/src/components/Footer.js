import "../styles/footer.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <ul className="link-list">
          <li className="link-list-item">
            <a className="link-list-item-link" href="/contact">
              Contact
            </a>
          </li>
          <li className="link-list-item">
            <a
              className="link-list-item-link"
              href="https://dot.gov.in/network-status"
            >
              Network Status
            </a>
          </li>
          <li className="link-list-item">
            <a
              className="link-list-item-link"
              href="https://www.random.org/faq/"
            >
              FAQ
            </a>
          </li>
        </ul>
        <form>
          <h3 className="form-heading">Contact</h3>
          <input type="email" id="email" placeholder="Enter email address" />
          <button className="btn">Send</button>
        </form>
      </footer>
    </>
  );
};

export default Footer;
