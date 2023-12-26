import '../styles/footer.scss';

const Footer = () => {
    return ( 
        <>
            <Footer>
                <div>
                    <ul>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="https://dot.gov.in/network-status">Network Status</a></li>
                        <li><a href="https://www.random.org/faq/">FAQ</a></li>
                    </ul>
                </div>
                <form>
                    <input type='email' id='email' placeholder="Enter email address" />
                    <button>Send</button>
                </form>
            </Footer>
        </>
     );
}
 
export default Footer;