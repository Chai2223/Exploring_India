import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>DevelopedBy: Chaithra S</h1>
          <p>USN:20201CSE0661 </p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>

          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>

          <a href="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>

          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Change Logo</a>
          <a href="/">License</a>
          <a href="/">Status</a>
          <a href="/">All Versions</a>
        </div>

        <div>
          <h4>Community</h4>
          <a href="/">Git Hub</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">twitter</a>
        </div>

        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troublehooting</a>
          <a href="/"> Contact Us</a>
        </div>

        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
