import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { json } from 'body-parser';
import { appUtilDataHandler } from './app';

const port = 8080;
const appBasePath = 'micro-service-one';

const app = express();

app.use(cors());
app.use(helmet());
app.use(json());



app.use(`/${appBasePath}/util-data`, appUtilDataHandler);

app.get(`/${appBasePath}`, (req, res) => {
  res.send({ message: 'Hello API Micro Service One' });
});

app.use((req: Request, res: Response) => {
  return res.status(404).json({
    message: 'Not Found',
    error: `Invalid Request [${req.method}] ${req.baseUrl}/${req.path}`,
  });
});

app.listen(port, () => {
  console.log(`[ ready ] http://localhost:${port}/${appBasePath}`);
});
