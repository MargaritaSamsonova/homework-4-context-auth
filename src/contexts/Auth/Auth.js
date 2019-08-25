import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

const correctData = {
  email: 'stu@dent.com',
  password: '123'
}

class AuthProvider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      authorizeError: '',
      isAuthorized: false
    }

    this.authorize = this.authorize.bind(this);
    this.logout = this.logout.bind(this);
  }

  authorize = function(email, password) {
    if (email === correctData.email && password === correctData.password) {

      this.setState(() => ({
        email: email,
        authorizeError: '',
        isAuthorized: true
      }))

    } else {
      this.setState(() => ({
        authorizeError: 'Email или пароль введён не верно'
      }))
    }
  }

  logout = function() {
    this.setState({
      isAuthorized: false
    })
  }

  getProviderValue = function() {
    return {
      'email': this.state.email,
      'isAuthorized': this.state.isAuthorized,
      'authorizeError': this.state.authorizeError,
      'authorize': this.authorize,
      'logout': this.logout
    }
  }

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
