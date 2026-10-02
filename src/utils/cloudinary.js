import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getPublicIdFromCloudinaryUrl = (imageUrl) => {
  if (!imageUrl || !imageUrl.includes('cloudinary.com')) {
    return null;
  }

  const match = imageUrl.match(
    /\/upload\/(?:v\d+\/)?(.+?)(?:\.[a-zA-Z0-9]+)?$/
  );

  return match ? match[1] : null;
};

const uploadOnCloudinary = async (filePath) => {
  try {
    if (!filePath) return null;

    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: 'auto',
    });

    fs.unlinkSync(filePath);

    return {
      url: result.secure_url,
      public_id: result.public_id,
    };
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    return null;
  }
};

const deleteFromCloudinary = async (publicId) => {
  try {
    if (!publicId) return false;

    const result = await cloudinary.uploader.destroy(publicId, {
      resource_type: 'image',
    });

    return result?.result === 'ok' || result?.result === 'not found';
  } catch (error) {
    console.error('Cloudinary delete error:', error);
    return false;
  }
};

export { deleteFromCloudinary, getPublicIdFromCloudinaryUrl };
export default uploadOnCloudinary;
