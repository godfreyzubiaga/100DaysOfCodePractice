import { Container } from 'unstated';

class UserContainer extends Container {
  constructor() {
    super();
    this.state = {
      user: {},
      hasActiveUser: false,
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.autoLogin = this.autoLogin.bind(this);
  }

  autoLogin() {
    this.setState({
      user: {
        name: 'Mary Poppins',
        email: 'marypoppins@gmail.com',
        address: 'somewhere over the rainbow',
      },
      hasActiveUser: true,
    }); // temporary data because setting up server and database is too much work for a singe guy
  }

  login(user) {
    this.setState({ user, hasActiveUser: true });
  }

  logout() {
    this.setState({ user: {}, hasActiveUser: false });
  }
}

export default UserContainer;
