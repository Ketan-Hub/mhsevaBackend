const AWS = require('aws-sdk');
const awsConfig = {
  region: "us-east-1",
  accessKeyId: "AKIAUXDQGR3Z6QZJ5XMA",
  secretAccessKey: "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",
};
const S3Bucket = new AWS.S3(awsConfig);

const uploadToS3 = (fileData) => {
  return new Promise((resolve, reject) => {
    const params = {
      Bucket: 'mhae-seva',
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