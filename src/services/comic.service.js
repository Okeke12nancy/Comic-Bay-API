//   async urlMapperGetById(urlType, limit, id) {
//     return await axios
//       .get(`${baseUrl}${urlType}/${id}?api_key=${API_KEY}&format=json`)
//       .then((response) => {
//         const singleData = response.data.results;
//         return singleData;
//       })
//       .catch((error) => {
//         if (error.code === "ERR_BAD_REQUEST") return [];
//         return error;
//       });
//   }
// }

// export default new BaseUrlClassService();
