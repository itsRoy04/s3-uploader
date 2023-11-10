import { S3Uploader } from ".";



// Example usage:
const accessKeyId :any = process.env.S3_ACCESS_KEY;
const secretAccessKey :any = process.env.S3_SECRET_ACCESS_KEY;
const region:any  = process.env.S3_REGION;
const bucketName :any  = process.env.S3_BUCKETS_NAME;
const filePath = "'path/to/your/file.txt";


const s3Uploader = new S3Uploader(accessKeyId, secretAccessKey, region, bucketName);

s3Uploader.upload(filePath)
  .then((s3FileUrl :any) => {
    console.log(`File uploaded successfully. ✔ S3 URL: ${s3FileUrl}`);
  })
  .catch((error:any) => {
    console.error(`Error uploading file to S3: ${error.message}`);
  });