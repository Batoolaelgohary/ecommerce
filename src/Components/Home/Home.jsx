import React from 'react'
import MainSlider from '../MainSlider/MainSlider'
import Products from '../Products/Products'
import HomeCategory from '../HomeCategory/HomeCategory'
import img2 from '../../images/slider-image-2.jpeg'
import img3 from '../../images/slider-image-3.jpeg'
import { Helmet } from 'react-helmet'

export default function Home() {



  return (
    <>
  <Helmet>
  <title>Home</title>
</Helmet>

    <div className='mt-5 py-5'>
      <div className="container">
        <div className="row g-0">
          <div className="col-md-10">
      <MainSlider/>
          </div>
          <div className="col-md-2">
            <div>
          <img src={img2} alt="" style={{height:'150px'}} className='w-100'/>
            </div>
            <div>
        <img src={img3} alt="" style={{height:'150px'}} className='w-100'/>
            </div>
          </div>
        </div>
      </div>
      <HomeCategory/>
      <Products/>

    </div>
    </>
  )
}
