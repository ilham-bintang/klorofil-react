import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar/Sidebar'

import Dashboard from '../../pages/Dashboard'

class Full extends Component {
    render() {
        return (
            <div id="wrapper">
                <Header/>
                <Sidebar/>
                <div class="main">
                    <Switch>
                        <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                        <Redirect from="/" to="/dashboard"/>
                    </Switch>
                </div>
                <div class="clearfix"></div>
                <footer>
                    <div class="container-fluid">
                        <p class="copyright">Created by <i class="fa fa-love"></i><a href="http://itec.sch.id">ITEC Mataram</a>
                        </p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Full