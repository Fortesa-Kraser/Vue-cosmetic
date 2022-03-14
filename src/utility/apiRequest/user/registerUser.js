import apiCaller from "../apiCaller";

const registerUser = async (email, password) =>
  await apiCaller.post("/users/register", {
    email,
    password,
  });

export default registerUser;
