export const authentication = () => {
  const token = localStorage.getItem("isAuthenticated");
  console.log(token);
  return !!token;
};
export const logout = () => {
  localStorage.clear();
};
