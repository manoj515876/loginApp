import {Component} from 'react'

import Login from '../Login'

import Logout from '../Logout'

import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {
    isLogin: false,
  }

  onClickButton = () => {
    this.setState(preState => ({
      isLogin: !preState.isLogin,
    }))
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="container">
        <div className="card">
          {isLogin ? (
            <Message displayText="Welcome User" />
          ) : (
            <Message displayText="Please Login" />
          )}

          {isLogin ? (
            <Logout logout={this.onClickButton} />
          ) : (
            <Login login={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
