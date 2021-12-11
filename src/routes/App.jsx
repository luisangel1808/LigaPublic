import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import Videos from '../containers/Videos';
import Video from '../components/Video';
import AddSession from '../components/AddSession';
import Players from '../containers/Players';
import ClasificationScrapped from '../containers/ClasificationScrapped';
import Lichess from '../containers/Lichess';
import NotFound from '../containers/NotFound';
import NewTournament from '../containers/NewTournament';
import Tournament from '../containers/Tournament';
import AdmPlayers from '../containers/AdmPlayers';
import useGamesData from '../hooks/useGamesData';
import Login from '../components/Login';
import '../styles/components/App.css';
import PrivateRoute from '../components/PrivateRoute';
import { AuthProvider } from '../hooks/Authentication';
import Tests from '../containers/Tests';
import Test from '../components/Test';
import CreateTest from '../components/CreateTest';
import Board from '../components/Board';
import AddVideo from '../containers/AddVideo';
import AddClub from '../containers/AddClub';

const App = () => {
  const initialState = useGamesData();
  return (
    <AuthProvider>
        <AppContext.Provider value={initialState}>
          <BrowserRouter>
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/players" component={Players} />
                <PrivateRoute exact path="/videos" component={Videos} />
                <PrivateRoute exact path="/video/:id" component={Video} />
                <Route exact path="/clasification" component={ClasificationScrapped} />
                <PrivateRoute exact path="/lichess" component={Lichess} />
                <PrivateRoute exact path="/new-tournament" component={NewTournament} />
                <PrivateRoute exact path="/tournament" component={Tournament} />
                <PrivateRoute exact path="/add-session" component={AddSession} />
                <PrivateRoute exact path="/adm-players" component={AdmPlayers} />
                <PrivateRoute exact path="/tests" component={Tests} />
                <PrivateRoute exact path="/test/:id" component={Test} />
                <PrivateRoute exact path="/create-test" component={CreateTest} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/board" component={Board} />
                <Route exact path="/add-video" component={AddVideo} />
                <Route exact path="/add-club" component={AddClub} />
                <Route component={NotFound} />
              </Switch>
            </Layout>
          </BrowserRouter>
        </AppContext.Provider>
      </AuthProvider>
  );
};

export default App;
