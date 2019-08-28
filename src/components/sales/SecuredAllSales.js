import React, { Component } from 'react';
import AllTransactions from '../misc/pages/AllTransactions';
import { Redirect } from 'react-router'
import { Can } from '../../configs/Ability-context'

class SecuredAllSales extends Component {
    _isMounted = false
    state = {
        loggedIn: ''
    }
    constructor() {
        super()
        this.user = localStorage.getItem('ui')
        // console.log(this.user);

        if (this.user !== null) {
            // console.log('user not null');
            this.loggedIn = true
        }
        else {
            // console.log('user null 2');
            this.loggedIn = false
        }
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        if (this.state.loggedIn === false) {
            return <Redirect to='/login' />
        }
        else {
            return <Can I='read' a='sales'> <AllTransactions trType='sales' /></Can>
        }

    }
}



export default SecuredAllSales