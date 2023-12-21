import axios from "axios";
export const API_ENDPOINT = "https://street-bazr.onrender.com";

export const LOGIN_USER = async (email, password) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/api/auth/login/`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const LOGIN_GOOGLE_USER = async (code) => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/api/auth/google/${code}`);
    console.log(`${API_ENDPOINT}/api/auth/google/${code}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const REGISTER_USER = async (email, password) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/api/auth/register/`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const FETCH_CATALOGUE = async (business_id) => {
  try {
    const response = await axios.get(
      `${API_ENDPOINT}/api/business/details/?business_id=${business_id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const FETCH_AD_DETAILS = async (id) => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/api/adverts/${id}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const POST_ADVERT = async (
  title,
  categoryId,
  subCategoryId,
  state,
  city,
  address,
  priceType,
  price,
  condition,
  description,
  imageURLs,
  quantity,
  token
) => {
  try {
    const response = await axios.post(
      `${API_ENDPOINT}/api/adverts/`,
      {
        title,
        category: categoryId,
        sub_category: subCategoryId,
        state,
        city,
        address,
        price_type: priceType,
        price,
        condition,
        description,
        img_urls: imageURLs,
        quantity,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const PAY_FOR_ADVERT = async (
  adId,
  packageId,
  packageType,
  reference,
  token
) => {
  try {
    const response = await axios.post(
      `${API_ENDPOINT}/api/advert-payment/`,
      {
        advert_id: adId,
        package_id: packageId,
        package_type: packageType,
        reference,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const UPDATE_PERSONAL_DETAILS = async (
  firstName,
  lastName,
  phoneNumber,
  city,
  state,
  address,
  profileImageFile,
  token
) => {
  try {
    const formData = new FormData();
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("phone_number", phoneNumber);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("address", address);
    // Conditionally append profile_image if profileImageFile is a file
    if (profileImageFile instanceof File) {
      console.log("i be file oo");
      formData.append("profile_image", profileImageFile);
    }

    console.log(formData);

    const response = await axios.put(
      `${API_ENDPOINT}/api/auth/user/`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data", // Important for handling files
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const UPDATE_BUSINESS_DETAILS = async (
  id,
  name,
  about,
  city,
  state,
  address,
  token
) => {
  try {
    const response = await axios.put(
      `${API_ENDPOINT}/api/business/${id}/`,
      {
        name,
        about,
        city,
        state,
        address,
        token,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
