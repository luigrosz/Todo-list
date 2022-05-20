import { Request, Response, NextFunction } from 'express';

export default function error(
  err: { message: string; },
  _req: Request,
  res: Response,
  _next:NextFunction,
) {
  const { message } = err;
  console.log('caiu no erro');
  
  return res.status(500).json({ message });
}