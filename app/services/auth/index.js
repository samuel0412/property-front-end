import API from "../../config/apiConfig";
import endpoints from "../../config/endpoints";

const SignIn = async (loginData) => {
  try {
    const responseLogin = await API.post(endpoints.login, loginData);
    return responseLogin.data;
  } catch (error) {
    console.log(error.message);
  }
};
const createAccount = async (signupData) => {
  try {
    const res = await API.post(endpoints.userSignUp, signupData);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export { createAccount };
