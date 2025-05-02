const USERS_KEY = 'glowluxe_users';

export const getAllUsers = () => {
  return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
};

export const getUserByEmail = (email) => {
  const users = getAllUsers();
  return users.find((user) => user.email === email);
};

export const registerUser = (user) => {
  const users = getAllUsers();
  if (getUserByEmail(user.email)) {
    return { success: false, message: 'Email already exists' };
  }
  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return { success: true };
};

export const verifyLogin = (email, password) => {
  const user = getUserByEmail(email);
  if (!user) {
    return { success: false, message: 'User not found' };
  }
  if (user.password !== password) {
    return { success: false, message: 'Incorrect password' };
  }
  return { success: true, user };
};