// import { S3Uploader } from ".";



// // Example usage:
// const accessKeyId = process.env.S3_ACCESS_KEY;
// const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY;
// const region= process.env.S3_REGION;
// const bucketName   = process.env.S3_BUCKETS_NAME;
// const filePath = "'path/to/your/file.txt";


// const s3Uploader = new S3Uploader(accessKeyId, secretAccessKey, region, bucketName);

// s3Uploader.upload(filePath)
//   .then((s3FileUrl ) => {
//     console.log(`File uploaded successfully. ✔ S3 URL: ${s3FileUrl}`);
//   })
//   .catch((error) => {
//     console.error(`Error uploading file to S3: ${error.message}`);
//   });