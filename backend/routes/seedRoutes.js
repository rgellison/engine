import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';
import CVE from '../models/cveModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  await CVE.remove({});
  const createdCVE = await CVE.insertMany(data.CVE);
  res.send({ createdProducts, createdUsers, createdCVE });
});
export default seedRouter;
