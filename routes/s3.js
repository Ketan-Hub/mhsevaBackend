// import multer from "multer";
// // import { Router } from "express";
//  const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, path.join(path.dirname(__dirname), 'uploads'));
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     },
// });

// export const upload = multer({storage});

// const awsConfig = {
//   region: "ap-south-1",
//   accessKeyId: "AKIAZP55XADYWS3FEBHX",
//   secretAccessKey: "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",
// };

// const S3Bucket = new AWS.S3(awsConfig);


// export const uploadToS3 = (fileData) => {
//   return new Promise((resolve, reject) => {
//       const params = {
//           Bucket: 'mhaeseva',
//           Key: `${Date.now().toString()}.jpg`,
//           Body: fileData,
//       };
//       S3Bucket.upload(params, (err, data) => {
//           if (err) {
//               console.log(err);
//               return reject(err);
//           }
//           return resolve(data);
//       });
//   });
// };
