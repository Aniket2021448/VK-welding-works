import React from 'react'
import Slide from '../component/Slide'
import ReviewCard from '../component/ReviewCard'
import CompanyInfo from '../component/CompanyInfo'
import Partners from '../component/Partners'
import Hero from '../component/Hero'

const Home = () => {
  return (
    <div>
      <Hero />
      <Slide /> 
      <CompanyInfo />
      <ReviewCard />
      <Partners />
    </div>
  )
}

export default Home