const AWS = require('aws-sdk');
const { randomUUID } = require('crypto');
const fs = require('fs');
const multer = require('multer');

class S3Uploader {
  constructor(accessKeyId, secretAccessKey, region, bucketName) {
    this.s3 = new AWS.S3({
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
      region: region,
    });
    this.bucketName = bucketName;
    this.upload = multer({ dest: 'uploads/' });
  }

  uploadMiddleware() {
    return this.upload.single('file');
  }

  async uploadFile(req) {
    const fileStream = fs.createReadStream(req.path);
    let key = randomUUID();
    console.log("key", this.bucketName);
    const uploadParams = {
      Bucket: this.bucketName,
      Key: `${key}`,
      Body: fileStream,
      ContentType: req.mimetype,
    };

    return new Promise((resolve, reject) => {
      this.s3.upload(uploadParams, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data.Location);
        }
      });
    });
  }
}

module.exports = { S3Uploader };
