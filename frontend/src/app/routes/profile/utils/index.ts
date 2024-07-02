const logOutHandler = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('firstName');
  localStorage.removeItem('lastName');
};

export { logOutHandler };
