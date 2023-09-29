import React from 'react'
import './Pricing.css'
import TopNav from '../../Components/TopNav/TopNav'
import Footer from '../../Components/Footer/Footer'

const Pricing = () => {
  return (
    <div>
      <TopNav/>
      {/* Section-1 */}
      <div className='Pricing-Section-1'>
        <div className='Pricing-Menu-1'>
          <div className='Pricing-Menu-title'>Human Resources</div>
        </div>
        <div className='Pricing-Menu-2'>
          <div className='Pricing-Menu-title'>Payroll</div>
        </div>
        <div className='Pricing-Menu-3'>
          <div className='Pricing-Menu-title'>Roster Management</div>
        </div>
        <div className='Pricing-Menu-4'>
          <div className='Pricing-Menu-title'>Disability Providers</div>
        </div>
      </div>

      {/* Section-2 */}
      <div className='Pricing-Section-2'>
        
      </div>
      <Footer/>
    </div>
  )
}

export default Pricing