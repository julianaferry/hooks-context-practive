import React, { Component, createContext } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Index } from './index'
import { About }  from './about'
import { UserContext } from './UserContext'



function NewRouter () {
  return(
    <Router>
      <>
      <nav>
        <ul>
          <li>
            <Link to ='/' > Home </Link>
          </li>
          <li>
            <Link to ='/about/' > About </Link>
          </li>
        </ul>
      </nav>
      <UserContext.Provider value='new user'>
        <Route path='/' exact component={Index} />
        <Route path='/about/' exact component={About} />
   
      </UserContext.Provider>
      </>
      
    </Router>
  )
}
