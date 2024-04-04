import API from "../../config/apiConfig";
import endpoints from "../../config/endpoints";

const getPropertiesList = async (ele, page) => {
  try {
    const res = await API.get(
      `${endpoints.propertiesList}?elements=${ele}&page=${page}`
    );
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
const getPropertiesListedFor = async () => {
  try {
    const res = await API.get(endpoints.propertyListedFor);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export { getPropertiesList, getPropertiesListedFor };
