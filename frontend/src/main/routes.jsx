import React from 'react'
import {Router, Route , Redirect , hashHistory} from 'react-router'

import Todo from '../todo/todo'
import About from '../aboute/aboute'


export default props => (
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo}/>
        <Route path='/aboute' component={About}/>
        <Redirect from='*' to='/todos'/>

        </Router>
)