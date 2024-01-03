import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const teamsList = data.teams
    const formattedList = teamsList.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamList: formattedList, isLoading: false})
  }

  render() {
    const {teamList, isLoading} = this.state

    return (
      <div className="bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <div className="ipl-container">
            <div className="heading-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                className="logo-img"
                alt="ipl logo"
              />
              <h1 className="heading-dashboard">IPL Dashboard</h1>
            </div>
            <ul className="team-list-container">
              {teamList.map(eachItem => (
                <TeamCard key={eachItem.id} teamCardDetails={eachItem} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Home
