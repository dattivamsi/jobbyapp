import {Link} from 'react-router-dom'
import Headers from '../Headers'
import './index.css'

const Home = () => (
  <>
    <Headers />
    <div className="home-page-container">
      <div className="home-content">
        <h1 className="heading">Find the Jobs that fits Your Life</h1>
        <p className="paragraph">
          Million of Peoples are Searching For Jobs,Salary information,Company
          Reviews.Find the Jobs that fits your ablilities and potential
        </p>
        <Link to="/jobs">
          <button type="button">Find Jobs</button>
        </Link>
      </div>
    </div>
  </>
)

export default Home
