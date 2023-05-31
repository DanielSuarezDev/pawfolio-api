import dotenv from 'dotenv';

dotenv.config();

const url = process.env.MONGODB_URL;
const options: any = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export { url, options };
