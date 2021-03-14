export const authentication = () => {
  const token = localStorage.getItem("isAuthenticated");
  return !!token;
};
