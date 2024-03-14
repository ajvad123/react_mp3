import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (

    <>
      <div className='w-100 d-flex justify-content-center align-items-center mt-2' style={{ height: '80vh' }}>
        <div className='row  m-5 shadow bg-dark'>

          <div className='col d-flex flex-column justify-content-center ' >

            <h1 style={{ color: 'white' }} className=' text-center'>Media Player <span style={{ color: 'yellow' }}>2024</span></h1>
            <p style={{ color: 'white' }} className=' justify'>Explore media player for youtube video upload and management. You can add and manage videos , categories and even change the videos</p>
            <div className='text-center'>

              <Link to={'/Dash'} className='btn btn-success align-items-center w-25'> Explore</Link>
            </div>
          </div>

          <div className='col' style={{ marginLeft: '200px' }}>
            <img src="https://icons.iconarchive.com/icons/danieledesantis/audio-video-outline/512/play-icon.png" className='img-fluid w-75  ' alt="img" />
          </div>



        </div>
      </div>

      <div className='mt-3 p-5'>

        <h2 className='text-center'>Features</h2>
        <div className='d-flex mt-2 flex-row justify-content-between'>

          <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif" style={{ height: '300px' }} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title" style={{ color: 'white' }}>Upload Video</h5>
              <p className="card-text" style={{ color: 'white' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src="https://dkwopwiffk.files.wordpress.com/2020/08/6455.gif" style={{ height: '300px' }} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title" style={{ color: 'white' }}>watch video</h5>
              <p className="card-text" style={{ color: 'white' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src="https://cdn.dribbble.com/users/2062196/screenshots/4204991/media/abea6711d90c78cb5330dbd9743edd0e.gif" style={{ height: '300px' }} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title" style={{ color: 'white' }}>view History</h5>
              <p className="card-text" style={{ color: 'white' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

        </div>

      </div>

      <div className='mt-5 d-flex justify-content-between p-5 align-items-center flex-row'>
        <div className='col'>
          <h2 style={{ color: 'white' }}>Simple , Fast & Secured</h2>

          <p style={{ color: 'white' }}>Media Player 2024 is a platform for simple and faster youtube video uploading and management of  video watch history too where you get a simple video player interface with the app itself</p>

        </div>
        <div className='col p-5'>

          <iframe width="560" height="315" src="https://www.youtube.com/embed/55pzldrBRJM?si=d3fmNDSkp0zadP0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>
      </div>

    </>
  )
}

export default Landing