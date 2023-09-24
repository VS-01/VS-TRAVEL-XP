import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>VS TRAVEL-XP</h1>
          <p>Choose your Favourite Destination</p>
        </div>
        <a>
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a>
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a>
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a>
          <i class="fa-brands fa-twitter"></i>
        </a>
      </div>

      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">Air License</a>
          <a href="/">All Version</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">GitHub</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
