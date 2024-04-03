const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const endpoints = {
  BASE_URL: BASE_URL,
  userSignUp: "/users/signup",
  propertiesList: "/property/get-list", // property/get-list?elements=10&page=1
};

export default endpoints;
