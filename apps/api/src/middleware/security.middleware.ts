import helmet from 'helmet';
import cors from 'cors';

export const securityMiddleware = [
  helmet(),
  cors(),
];
