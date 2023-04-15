const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const axios = require("axios");
app.use(bodyParser.json());

class BaseUrlClassService {
  async urlMapperGetAll(urlType, query) {
    return await axios
      .get(`${baseUrl}${urlType}?api_key=${API_KEY}&format=json&query=${query}`)
      .then((response) => {
        const data = response.data.results;
        return data;
      })
      .catch((error) => {
        if (error.code === "ERR_BAD_REQUEST") return [];
        return error;
      });
  }

  async urlMapperGetById(urlType, limit, id) {
    return await axios
      .get(`${baseUrl}${urlType}/${id}?api_key=${API_KEY}&format=json`)
      .then((response) => {
        const singleData = response.data.results;
        return singleData;
      })
      .catch((error) => {
        if (error.code === "ERR_BAD_REQUEST") return [];
        return error;
      });
  }
}

export default new BaseUrlClassService();
