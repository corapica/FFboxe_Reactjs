import React from 'react'
import axios from 'axios'
import LoginForm from '../screens/loginForm'

const submit = (e, form, props) => {
  e.preventDefault()
  const { username, password } = form
  login(username, password, props)
}

const login = (username, password, props) => {
  //console.log('ACe')
  axios
    .post('https://easy-login-api.herokuapp.com/users/login', {
      username: username,
      password: password
    })
    .then(function(response) {
      const json = response.headers['x-access-token']
      const obj = JSON.stringify(json)
      console.log(obj)
      localStorage.setItem('x-access-token', obj)
      console.log(props)
      props.history.push('/home')
    })
    .catch(function(error) {
      console.log(error)
    })
}

const Login = props => {
  console.log('TCL: props', props)
  return (
    <div>
      <LoginForm submit={submit} props={props}></LoginForm>
    </div>
  )
}


export default Login
