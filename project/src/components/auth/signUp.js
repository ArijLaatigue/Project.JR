import users from './authFakeData.js'
class Signup extends React.Component {
  constructor(props) {
    super(props);
    username = this.props.username
    password = this.props.password
  }
  render() {
    var checkUser=function(user) {
      var result = false;
      for (var i = 0; i < users.length; i++) {
          var User = users[i];
          if (User.userName === user )
              result = true;
      }
      return result;
  }
    document.getElementById("subsigenup").unbind().click(function () {

      var userName = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      var confirm = document.getElementById("conpass").value;

      if (checkUser(userName)) {
        alert("userName exists ! try another one")

      }
      else if (password !== confirm) {
        alert("Check your password again")
      }
      else {
          user.userName =userName;
          user.password = password;
          user.push(user);
        }
    });
    return (
      <div className="signup-box">
        <h2>Sign Up</h2>
        <div class="user-box">
          <input id="username" type="text" name="">Username</input>
          <input id="password" type="password" name="">Password</input>
          <input id="conpass" type="password" name="" >Confirm password</input>
          <button id="subsigenup">Submit</button>
        </div>
      </div>
    )
  }
}

export default Signup;
