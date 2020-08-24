
//往 localStorage 里面存对象
export const setLocalStorage = (name, value) => {
  if (!name) return false;
  if (value) {
    let data = JSON.stringify(value);
    localStorage.setItem(name, data);
    return true
  }
  return false
};

//从 localStorage 取数据
export const getLocalStorage = (name) => {
  if (name) {
    let data = localStorage.getItem(name);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }
  return null;
};


//往 sessionStorage 里面存对象
export const setSessionStorage = (name, value) => {
  if (value) {
    let data = JSON.stringify(value);
    sessionStorage.setItem(name, data);
    return true
  }
  return false
};

//从 sessionStorage 取数据
export const getSessionStorage = (name) => {
  if (name) {
    let data = sessionStorage.getItem(name);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }
  return null;
};

//从 sessionStorage 取数据
export const removeSessionStorage = (name) => {
  sessionStorage.removeItem(name);
};

//设置token到缓存
export const setToken = (token) => {
  if (token) {
    setLocalStorage('token', token);
  }
};

//从缓存获取token
export const getAccessToken = () => {
  let token = getLocalStorage('token');
  return token ? token.access_token : null;
};

export const getRefreshToken = () => {
  let token = getLocalStorage('token');
  return token ? token.refresh_token : null;
};

//设置UserInfo到缓存
export const setUserInfo = (UserInfo) => {
  if (UserInfo) {
    UserInfo.orgId = UserInfo.orgIds[0];
    UserInfo.orgName = UserInfo.orgName || UserInfo.orgIds[0];
    setLocalStorage('UserInfo', UserInfo);
  }
};

//从缓存获取UserInfo
export const getUserInfo = () => {
  return getLocalStorage('UserInfo');
};

export const getUserId = () => {
  let userInfo = getLocalStorage('UserInfo');
  return userInfo ? userInfo.userId : null;
};