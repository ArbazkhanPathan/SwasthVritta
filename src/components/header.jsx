

export const Header = (props) => {
  return (
    <header id='header'>
      {/* <video id="videoBG" autoPlay muted loop>
            <source href='Swas.mp4' type="video/mp4"/>
      </video>      */}
      
      {/* <iframe width="100%" height="500" src="https://www.drive.google.com/file/d/1D7e0E-FnYvt0WpVVxpWwq2BDO__qwRpy/preview?" allow="autoplay;"></iframe> */}

{/* <video width="100%" height="240"  muted autoPlay loop>
  <source src="Swas.mp4" type="video/mp4"/>
</video> */}
{/* <iframe id="VideoBG" AutoPlay src="https://drive.google.com/file/d/1D7e0E-FnYvt0WpVVxpWwq2BDO__qwRpy/preview" allow='autoplay' width="100%" height="480" ></iframe> */}
<iframe width="100%" height="600" src="https://www.youtube-nocookie.com/embed/8hWdjzpRN4A?controls=0&mute=1&autoplay=1&loop=1&rel=0&modestbranding=1&autohide=0&showinfo=0" allow="autoplay; loop; autohide;" ></iframe>
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/RnBT9uUYb1w?autoplay=1&mute=1&loop=1&controls=0"   ></iframe> */}
{/* <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/8hWdjzpRN4A?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      <div id='kyp' className="intro">
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div  className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='/prakriti'
                  className='btn btn-custom btn-lg page-scroll kyp'
                >
                  Know Your Prakriti
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
        </div>
      
    </header>
  )
}
// export default Header