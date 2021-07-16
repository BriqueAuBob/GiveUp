import { diskStorage } from 'multer';

export const options = {
  storage:diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => {
      const format = file.originalname.split('.')[file.originalname.split('.').length - 1];
      cb(null, `${file.fieldname}-${Date.now()}.${format}`);
    }
  }),
  fileFilter(req, { mimetype }, callback) {
    callback(null, mimetype === 'image/png')
  }
}