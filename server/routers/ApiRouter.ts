import express, { Request, Response, NextFunction } from 'express';

export function ApiRouter() {

    const router = express.Router();

    router.use(function (req: Request, res: Response, next: NextFunction) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS,HEAD");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        res.header("Access-Control-Expose-Headers", "Authorization");
        res.header("Access-Control-Allow-Credentials", "true");
        next();
    });

    router.get('/', function (req: Request, res: Response, next: NextFunction) {
        res.json({})
    });

    return router;
}
