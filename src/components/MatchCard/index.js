import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  let resultColorClass = ''

  if (matchCardDetails.match_status === 'Won') {
    resultColorClass = 'text-green'
  } else {
    resultColorClass = 'text-red'
  }

  return (
    <li>
      <div className="match-card-container">
        <img
          src={matchCardDetails.competing_team_logo}
          className="competing-img"
          alt={`competing team ${matchCardDetails.competing_team}`}
        />
        <p className="competing-team">{matchCardDetails.competing_team}</p>
        <p className="result">{matchCardDetails.result}</p>
        <p className={resultColorClass}>{matchCardDetails.match_status}</p>
      </div>
    </li>
  )
}
export default MatchCard
