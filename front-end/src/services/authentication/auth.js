export const authentication = () => {
  const token = localStorage.getItem("isAuthenticated");
  return !!token;
};
export const logout = () => {
  localStorage.clear();
};
