import React from 'react';
import { UserInfo } from './user-info';

let userInfo : UserInfo = {} as UserInfo;

const UserContext = React.createContext(userInfo);
 
export default UserContext;