import "./socialmedia.css";


const SocialMedia = () => {
    return (
        <div className="socialmedia">
    <ul>
      <li>
        <a href="#">
          <i className="fa fa-facebook" />
          <span>Facebook</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-twitter" />
          <span>Twitter</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-instagram" />
          <span>Instagram</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-linkedin" />
          <span>linkedin</span>{" "}
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fa fa-dribbble" />
          <span>Dribbble</span>
        </a>
      </li>
    </ul>
  </div>
    )
}

export default SocialMedia
