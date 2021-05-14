import users from './authFakeData'
//check the user is find in our array or no
 var checkUser=function(user, pass) {
    var result = false;
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        if (user.userName === user && user.password === pass)
            result = true;
    }
    return result;
}
//function creat a account
document.getElementById("subsigenup").unbind().click(function () {


    var userName = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var y1 = document.getElementById("conpass").value;

    if (checkUser(userName, password)) {
        alert("userName exists ! try another one")

    }
    else if (password !== y1) {
        alert("Check your password again")
    }
    else {
        var user = {}
        user.name = userName;
        user.password = password;
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
    }
});
//function to login
document.getElementById("sublogin").unbind().click(function () {


    var userName = document.getElementById("username").value;
    var password = document.getElementById("userpass").value;

    if (checkUser(userName, password)) {
        location.replace("")

    }
    else {
        alert("check your username / password or you are not sign up !")
    }
});