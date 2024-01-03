import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  return (
    <div className="latest-match-container">
      <div className="match-details-1">
        <p className="competing-team">{latestMatchDetails.competingTeam}</p>
        <p className="date-match">{latestMatchDetails.date}</p>
        <p className="latest-match-info">{latestMatchDetails.venue}</p>
        <p className="latest-match-info">{latestMatchDetails.result}</p>
      </div>
      <img
        src={latestMatchDetails.competingTeamLogo}
        className="competing-logo"
        alt={`latest match ${latestMatchDetails.competingTeam}`}
      />
      <div className="match-details-2">
        <h1 className="heading-details">First Innings</h1>
        <p className="para-details">{latestMatchDetails.firstInnings}</p>
        <h1 className="heading-details">Second Innings</h1>
        <p className="para-details">{latestMatchDetails.secondInnings}</p>
        <h1 className="heading-details">Man of the Match</h1>
        <p className="para-details">{latestMatchDetails.manOfTheMatch}</p>
        <h1 className="heading-details">Umpires</h1>
        <p className="para-details">{latestMatchDetails.umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
