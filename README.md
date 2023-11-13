# **S3Uploader Documentation**

The **S3Uploader** class is a Node.js module designed to simplify the process of uploading files to Amazon S3. It utilizes the **AWS SDK**, **crypto**, **fs**, and **multer** libraries to provide a convenient interface for handling file uploads to an S3 bucket.

## Installation

To use the **S3Uploader** class, you need to install the required dependencies. Use the following command:

```bash
npm install aws-sdk crypto fs multer



License
This project is licensed under the MIT License - see the LICENSE file for details.





const { S3Uploader } = require('s3-upload-file');

// Initialize S3Uploader with your AWS credentials and S3 bucket information
const s3Uploader = new S3Uploader('*your-access-key-id*', '*your-secret-access-key*', '*your-region*', '*your-bucket-name*');

// Middleware for handling file uploads (use with Express or similar frameworks)
const uploadMiddleware = s3Uploader.uploadMiddleware();

// Example route for handling file uploads
app.post('/upload', uploadMiddleware, (req, res) => {
  s3Uploader.uploadFile(req)
    .then((url) => {
      res.json({ success: true, url });
    })
    .catch((error) => {
      console.error('File upload error:', error);
      res.status(500).json({ success: false, error: 'File upload failed' });
    });
});

API Reference


S3Uploader

new S3Uploader(accessKeyId, secretAccessKey, region, bucketName)

Creates an instance of the S3Uploader class.

accessKeyId: AWS access key ID.
`secretAccessKey**: AWS secret access key.
`region**: AWS region.
`bucketName**: The name of the S3 bucket.

uploadMiddleware()


uploadMiddleware(): Function



uploadFile(req: Object): Promise<string>



Uploads a file to the specified S3 bucket.

req: The request object containing the file information.
Returns a Promise that resolves with the S3 file URL.


Examples
For more examples and detailed usage, check out the examples directory.