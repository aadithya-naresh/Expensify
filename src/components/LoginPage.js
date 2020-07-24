import React from 'react'
import { connect } from 'react-redux'
import {startLogin} from '../actions/auth'

const LoginPage = ({ startLogin }) =>(
    <div>
        <h1>Login Page</h1>
        <button onClick={startLogin}>Login Button</button>
    </div>
)
const mapDispatchToProps = (dispatch) =>({
    startLogin : () => dispatch(startLogin())
})
export default connect(undefined,mapDispatchToProps)(LoginPage)