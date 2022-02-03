import "./socialmedia.css";


const SocialMedia = () => {
    return (
        <div className="socialmedia">
    <ul>
      <li>
        <a href="https://www.facebook.com/swasthvrittaofficial/">
          <i className="fa fa-facebook" />
          <span>Facebook</span>
        </a>
      </li>
      <li>
        <a href="https://wa.me/919825219069">
          <i className="fa fa-whatsapp" />
          <span>WhatsApp</span>
        </a>
      </li>
      <li>
        <a href="https://instagram.com/swasthvritta?utm_medium=copy_link">
          <i className="fa fa-instagram" />
          <span>Instagram</span>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/swasthvritta-health-solutions">
          <i className="fa fa-linkedin" />
          <span>linkedin</span>{" "}
        </a>
      </li>
      <li>
        <a href="mailto:yourhealthmate@swasthvritta.com">
          <i className="fa fa-envelope" />
          <span>Mail</span>
        </a>
      </li>
    </ul>
  </div>
    )
}

export default SocialMedia
