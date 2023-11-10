USAGE


const { S3Uploader } = require('s3Uploader');

// Set up your AWS credentials and S3 bucket details
const accessKeyId = 'your-access-key-id';
const secretAccessKey = 'your-secret-access-key';
const region = 'your-region';
const bucketName = 'your-bucket-name';

// Create an instance of S3Uploader
const s3Uploader = new S3Uploader(accessKeyId, secretAccessKey, region, bucketName);

// Example usage to upload a file
const filePath = 'path/to/your/file.txt';

s3Uploader.upload(filePath)
  .then((s3FileUrl) => {
    console.log(`File uploaded successfully. S3 URL: ${s3FileUrl}`);
  })
  .catch((error) => {
    console.error(`Error uploading file to S3: ${error.message}`);
  });



API
S3Uploader(accessKeyId, secretAccessKey, region, bucketName)
Creates an instance of the S3Uploader class.

accessKeyId: Your AWS access key ID.
secretAccessKey: Your AWS secret access key.
region: The AWS region where your S3 bucket is located.
bucketName: The name of your S3 bucket.
upload(filePath): Promise<string>
Uploads a file to the configured S3 bucket.

filePath: The local path to the file you want to upload.
Returns a Promise that resolves with the S3 URL of the uploaded file.




License
This project is licensed under the MIT License - see the LICENSE file for details.





