export const LoginStart = () => ({
  type: "LOGIN_START",
});
export const LoginSuccess = (user) => ({
  type: "LOGIN_START",
  payload: user,
});
export const LoginFail = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});
