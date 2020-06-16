export class LoginConstants{

     static readonly userNameRequiredMessage = "Username is required!";
     static readonly passWordRequiredMessage  = "Password is required!";
     static readonly userInfoInvalidErrorMessage = "Username or password is invalid!";
     static readonly validUserInfos = [{ key: 1, user: "admin", password: "12345", isAdmin: true}, { key: 2 ,user: "user", password: "0000", isAdmin: false}];
}