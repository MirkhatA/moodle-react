const getUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const setUser = (user) => {
  console.log(JSON.stringify(user));
  localStorage.setItem('user', JSON.stringify(user));
};

const removeUser = () => {
  localStorage.removeItem('user');
};

const updateLocalAccessToken = (token) => {
  const user = JSON.parse(localStorage.getItem('user'));
  user.accessToken = token;
  localStorage.setItem('user', JSON.stringify(user));
};

const getLocalAccessToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user?.accessToken;
};

const getLocalRefreshToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user?.refreshToken;
};

const updateLocalRefreshToken = (token) => {
  const user = JSON.parse(localStorage.getItem('user'));
  user.refreshToken = token;
  localStorage.setItem('user', JSON.stringify(user));
};

export {
  getUser,
  updateLocalAccessToken,
  setUser,
  getLocalAccessToken,
  getLocalRefreshToken,
  updateLocalRefreshToken,
  removeUser,
};
