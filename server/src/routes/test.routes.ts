import { Response, Router, Request, NextFunction } from 'express';
import { isAuthenticated } from 'src/middlewares/auth';

const router = Router();

router.get('/', isAuthenticated, (req: Request, res: Response) => {
  res.send('Ok!!')
});

export default router;
