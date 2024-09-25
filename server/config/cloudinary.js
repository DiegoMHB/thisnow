const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: "di4csi6ds",
  api_key: "274718982637888",
  api_secret: "EU5KAGlQZ-Vju6ecuHDvWbF_TpA"
});


const uploadImage = (image) => {
  const opts = {
    overwrite: true,
    invalidate: true,
    resource_type: "auto"
  };

  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(image, opts, (error, result) => {
      if (result && result.secure_url) {
        console.log(result.secure_url);
        return resolve(result.secure_url);
      }
      console.log(error.message);
      return reject({ message: error.message });
    });
  });
};


module.exports = cloudinary;

