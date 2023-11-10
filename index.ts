import * as AWS from 'aws-sdk';
import { randomUUID } from 'crypto';
import * as fs from 'fs';
import multer from 'multer';

export class S3Uploader {
  private s3: AWS.S3;
  public upload: multer.Multer;

  constructor(private accessKeyId: string, private secretAccessKey: string, private region: string, private bucketName: string) {
    this.s3 = new AWS.S3({
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
      region: region,
 
    });

    this.upload = multer({ dest: 'uploads/' });
  }

  public uploadMiddleware() {
    return this.upload.single('file');
  }

  public async uploadFile(req: any): Promise<string> {
    console.log("req.file.path", req.path)
    const fileStream = fs.createReadStream(req.path);
    let key = randomUUID();

    const uploadParams: AWS.S3.PutObjectRequest = {
      Bucket: this.bucketName,
      Key: `${key}`, 
      Body: fileStream,
      ContentType: req.mimetype,
    };

    return new Promise<string>((resolve, reject) => {
      this.s3.upload(uploadParams, (err: Error, data: AWS.S3.ManagedUpload.SendData) => {
        if (err) {
          reject(err);
        } else {
          resolve(data.Location);
        }
      });
    });
  }
}
