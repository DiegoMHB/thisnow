const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary');



const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'users',
    allowed_formats: ['jpg', 'png', 'jpeg', 'gif']
  },
});

const upload = multer({ storage: storage });

module.exports = upload;