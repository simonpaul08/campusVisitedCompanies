import CompanySkill from './CompanySkill'
import CompanyYear from './CompanyYear'

const CompanyCard = () => {
  return (
    <div className='companyCard p-4 mb-4'>
        <div className="card-body text-center">
            <p className='mb-2 fs-5 company-name'>PlaySimple Ltd.</p>
            <p className='field mb-3'>Science and Programming</p>
            <p className='description mb-3'>Providing excellent tools for graphics developers and driver makers</p>
            <div className="company-years mb-3">
                <CompanyYear year="2022"/>
                <CompanyYear year="2021"/>
                <CompanyYear year="2020"/>
            </div>
            <div className="technologies">
                <CompanySkill skill="javascript"/>
                <CompanySkill skill="react js"/>
            </div>
        </div>
    </div>
  )
}

export default CompanyCard