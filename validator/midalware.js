const AWS = require('aws-sdk');
const awsConfig = {
  region: "ap-south-1",
  accessKeyId: "AKIAZP55XADYWS3FEBHX",
  secretAccessKey: "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",
};
const S3Bucket = new AWS.S3(awsConfig);

const uploadToS3 = (fileData) => {
  return new Promise((resolve, reject) => {
    const params = {
      Bucket: 'mhaeseva',
      Key: `${Date.now().toString()}.jpg`,
      Body: fileData,
    };
    S3Bucket.upload(params, (err, data) => {
      if (err) {
        console.log(18,err);
        return reject(err);
      }
      return resolve(data);
    });
  });
};

module.exports = uploadToS3;