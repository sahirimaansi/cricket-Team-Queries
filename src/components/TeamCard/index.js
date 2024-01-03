import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {name, id, teamImageUrl} = teamCardDetails

  return (
    <Link to={`/team-matches/${id}`} className="team-link">
      <li>
        <div className="team-card-container">
          <img src={teamImageUrl} className="team-img" alt={name} />
          <p className="team-heading">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
