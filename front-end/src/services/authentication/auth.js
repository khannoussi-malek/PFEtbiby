export const authentication = () => {
  const user = localStorage.getItem("user");
  return !!JSON.parse(user);
};
