import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImage = (imageUploaded) => new Promise((resolve, reject) => {
  cloudinary.uploader.upload(
    imageUploaded,
    { width: 400, height: 300, crop: 'fill' },
    (err, res) => {
      if (err) reject(err);
      resolve(res);
    },
  );
});

export default uploadImage;
