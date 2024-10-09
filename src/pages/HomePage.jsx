import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'
export const HomePage = () => {
  return (
    <>
        <Hero title="Welcome to Our Website" 
        subTitle="Discover amazing content and connect with us!" />
        <HomeCards/>
        <JobListings isHome="true"/>
        <ViewAllJobs/>
    </>
  )
}
export default HomePage
