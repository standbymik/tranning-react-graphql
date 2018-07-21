import React from 'react'
import { connect } from 'react-redux'
import { loginSuccess, logout } from '../actions/auth'
import { withRouter } from 'react-router-dom'
import { Mutation, graphql } from 'react-apollo'
import gql from 'graphql-tag'

const loginMutation = gql`
    mutation login($username: String!, $password: String!) {
        token:login(username: $username, password: $password)
    }
`

class loginForm extends React.Component {
    state = {
        username: '',
        password: ''
    }

    username = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    password = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:3000/login', {
            method: 'POST',
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            }),
            headers: {
                'content-type': 'application/json'
            }
        }).then((res) => {
            return res.json()
        }).then(json => {
            console.log(json.token)
            this.props.onLoginSuccess(json.token)
        }).catch((e) => {
            console.error(e)
        })
    }

    render() {
        if (this.props.isLoggedIn) {
            return (
                <div>
                    <p>Logged in</p>
                    <button onClick={this.props.onLogout}>Logout</button>
                </div>
            )
        }

        return (
            <Mutation mutation={loginMutation}>
                {(mutaeFn, result) => {
                    return (
                        <div className="login">
                            <form onSubmit={async (e) => {
                                e.preventDefault()
                                const result = await mutaeFn({
                                    variables: {
                                        username: this.state.username,
                                        password: this.state.password
                                    }
                                })

                                if(!result.data.token){
                                    return alert('Login Failed')
                                }

                                this.props.onLoginSuccess(result.data.token)
                            }}>
                                <input type="text" value={this.state.username} placeholder="username" className="loginUser" onChange={this.username} />
                                <input type="password" value={this.state.password} placeholder="password" className="loginPass" onChange={this.password} />
                                <input type="submit" value="Login" className="btnLogin" />
                            </form>
                        </div>
                    )
                }}
            </Mutation>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.token != null
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps)
    return {
        onLoginSuccess: (token) => {
            dispatch(loginSuccess(token))
            ownProps.history.replace('/')
        },
        onLogout: () => {
            dispatch(logout())
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(loginForm))