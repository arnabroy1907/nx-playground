import { serverMsOneUtils } from '@nx-playground/server/ms-one/utils';
import { serverSharedUtils } from '@nx-playground/server/shared/utils';

import { Request, RequestHandler, Response } from "express";

export const appUtilDataHandler: RequestHandler = (req: Request, res: Response) => {
    const serverMsOneUtilsStr = serverMsOneUtils();
    const serverSharedUtilsStr = serverSharedUtils();
    return res.status(200).json({
        req: {
            method: req.method,
            fullUrl: `${req.baseUrl}/${req.path}`,
            body: req.body
        },
        message: {
            hello: 'world',
            serverMsOneUtils: serverMsOneUtilsStr,
            serverSharedUtils: serverSharedUtilsStr
        }
    });
};