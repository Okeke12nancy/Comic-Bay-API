// import BaseUrlClassService from "../services/comic.service";

// export class BaseUrlClassController {
//   async getAll(req, res) {
//     const urlType = req.params.urlType;
//     const query = req.body.query;

//     const data = await newUrl.urlMapperGetAll(urlType, query);

//     if (data.length === 0) {
//       res.status(404).json({ success: false, message: `data not found`, data });
//     } else {
//       res.json({ success: true, message: `data fetched successfuly`, data });
//     }
//   }
//   async getById(req, res) {
//     const urlType = req.params.urlType;
//     const id = req.params.id;
//     const limit = req.body.limit;
//     const data = await newUrl.urlMapperGetById(urlType, limit, id);

//     if (data.length === 0) {
//       res.status(404).json({
//         success: false,
//         message: `data not found with id: [${id}]`,
//         data,
//       });
//     } else {
//       res.json({ success: true, message: `data fetched successfuly`, data });
//     }
//   }
// }
