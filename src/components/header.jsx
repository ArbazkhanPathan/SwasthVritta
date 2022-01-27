

export const Header = (props) => {
  return (
    <header id='header'>
      <video id="videoBG" autoPlay muted loop>
            <source src='https://drive.google.com/file/d/1D7e0E-FnYvt0WpVVxpWwq2BDO__qwRpy/view' type="video/mp4"/>
      </video>      
      
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
                  href='https://prakriti-assessment.stackblitz.io'
                  className='btn btn-custom btn-lg page-scroll'
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