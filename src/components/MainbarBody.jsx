import React from 'react'
import CompanyCard from './CompanyCard'

const MainbarBody = () => {
  return (
    <div className='mainbar-body py-4 d-flex px-3 justify-content-between flex-wrap align-items-center'>
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
    </div>
  )
}

export default MainbarBody