const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const endpoints = {
  BASE_URL: BASE_URL,
  userSignUp: "/users/signup",
  otpVerify: "users/resetCodeSubmit",
  propertiesList: "property/get-list", // property/get-list?elements=10&page=1
  propertyListedFor: "property/listed-for", // property/get-list?elements=10&page=1
  allAmenities: "amenity/all",
};

export default endpoints;
