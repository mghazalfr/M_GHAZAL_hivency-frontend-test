import React, {useState, useEffect} from 'react';
import './App.css';

//Import Components
import Header from './components/Header';
import SideNav from './components/SideNav';
import TeamsList from './components/TeamsList'
import TeamPage from './components/TeamPage'

//Import Dependencies
import axios from 'axios';
import {HashRouter, Route} from 'react-router-dom';


const App: React.FC = () => {

  //STATES------//
  // state that holds the teams
  const [ teams, setTeams ] = useState<[]>([]);
  //state that holds the players
  const [ players, setPlayers ] = useState<Players[]>(Object);
  //state that holds the team's id - set to the first item of the list
  const [ teamId, setTeamId ] = useState("133702");
  // state that defines the loading before rendering the data
  const [ isLoading, setIsLoading ] = useState(Boolean);
  // state that hold the new player
  const [ newPlayer, setNewPlayer ] = useState<Players>(Object);


  //USEEffect-------//
  // loading the list of teams
  useEffect(() => {
    const apiUrl = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=France";
    axios.get(apiUrl).then((repos) => {
      const listOfTeams = repos.data;
      setTeams(listOfTeams.teams);
      setIsLoading(true);
    })
  }, []);

  // loading the list of players
  useEffect(() => {
    const apiUrl = `https://www.thesportsdb.com/api/v1/json/40130162/lookup_all_players.php?id=${teamId}`
    axios.get(apiUrl).then((repos) => {
      const listOfPlayers = repos.data;
      setPlayers(listOfPlayers.player);
      setIsLoading(false)
    })
  }, [teamId, isLoading]);

  //HANDLERS function--------//
  const teamPageHandler = (selectedId:string) => {
    setTeamId(selectedId);
    setIsLoading(true);
  }


  return (
    <div className="App">
      <HashRouter>
        <Header />
        <SideNav />
        <main>
          <Route
            exact path="/"
            render={(props) => (
              <TeamsList {...props}
                teamsData = {teams}
                teamPageHandler = {teamPageHandler}
              />
            )}
          ></Route>
          <Route
            path="/team"
            render={(props) => (
              <TeamPage {...props}
                teamsData = {teams}
                playersData = {players}
                setPlayers = {setPlayers}
                setNewPlayer = {setNewPlayer}
                newPlayer = {newPlayer}
                isLoading = {isLoading}
              />
            )}
          ></Route>
        </main>
      </HashRouter>
    </div>
  )
}

export default App;
