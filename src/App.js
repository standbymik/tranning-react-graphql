import React, { Component } from 'react'

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import styled from 'styled-components'
import GuestBookApp from './components/GuestBookApp'
import Home from './pages/Home'
import LoginPage from './pages/Login';

/*
injectGlobal`
  body {
    background : green;
  }
`*/
/*
const Container = styled.div`
  width : 640px;
  margin: 0 auto;
  background : ${(props)=> props.background}
`
Container.defaultProps = {
  background : 'red'
}*/

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <Link to="/">Home</Link>
            {" / "}
            <Link to="/login">Login</Link>
            </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
