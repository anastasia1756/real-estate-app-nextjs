import axios from "axios";

export const BASE_URL = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "206ea453b7mshb180b11b57ed330p191c7fjsn489f5742ad1f",
    },
  });

  return data;
};
