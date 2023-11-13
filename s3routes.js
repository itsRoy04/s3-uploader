// import { Router } from "express";
// import serverResponse from "../helpers/serverResponse";
// import { getOrders, placeOrder, getSingleOrder } from "../controllers/order.controller";
// import authMiddleware from "../middleware/authMiddleware";
// import { upload } from "./upload";
// import multer from "multer";


// const s3UploadRouter = Router();

// const fileUpload = multer({
//     storage: multer.diskStorage({})
// });

// interface MulterRequest extends Request {
//     file: any;
// }

// s3UploadRouter.post("/upload",fileUpload.single('file'), async (req : MulterRequest ,  res: any) => {

//     console.log("/upload",req.file.path)

//     try {
//         serverResponse(true, "File uploaded successfully", await upload(req.file), res);
//     } catch (error: any) {
//         serverResponse(false, "Error uploading file", error.message, res);
//     }
// })


// export default s3UploadRouter