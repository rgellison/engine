import express from 'express';
import CVEs from '../models/cveModel.js';

const cveRouter = express.Router();

cveRouter.get('/', async (req, res) => {
  const CVE = await CVEs.find();
  res.send(CVE);
});

cveRouter.get('/:id', async (req, res) => {
  const cve = await CVEs.findById(req.params.id);
  if (cve) {
    res.send(cve);
  } else {
    res.status(404).send({ message: 'CVE Not Found' });
  }
});

export default cveRouter;
