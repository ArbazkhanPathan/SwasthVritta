import "./gallery.css";

const Videos = () => {
    return (
        <>
  <h2 align="center"> Videos</h2>
  <div className="wrapper">
    <nav></nav>
    <div className="gallery">
    <>
  <div className="image" data-name="videos">
    <span>
      <video width="500px" height="500px" controls="controls">
        <source
          src="https://drive.google.com/uc?export=view&id=1jdRYQTqeNklwIEZ_6iWMvmsQdL1CZthb"
          type="video/mp4"
        />
      </video>{" "}
    </span>
  </div>
  <div className="image" data-name="videos">
    <span>
      <video width="500px" height="500px" controls="controls">
        <source
          src="https://drive.google.com/uc?export=view&id=1jc46ZLBp5hpMJeQrqotzqed-T4gxthDR"
          type="video/mp4"
        />
      </video>{" "}
    </span>
  </div>
</>

      
      
    </div>
  </div>
  <div className="shadow" />
</>

    )
}

export default Videos
