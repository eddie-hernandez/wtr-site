import './Landing.css'
import LandingChart from '../../components/landingChart/LandingChart'

export default function Landing({ checkYes, setCheckYes }) {
  return (
    <div className="pageContainer" id="landing">
      <LandingChart checkYes={checkYes} setCheckYes={setCheckYes} />
    </div>
  )
}
