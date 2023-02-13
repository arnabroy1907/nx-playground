import type { NextApiRequest, NextApiResponse } from 'next';
import { serverMsOneUtils } from '@nx-playground/server/ms-one/utils';
import { serverSharedUtils } from '@nx-playground/server/shared/utils';

type UtilData = {
    req: {
        method: string;
        fullUrl: string;
        body: object;
    },
    utilData: {
        msOneUtilStr: string;
        sharedUtilStr: string;
    }
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<UtilData>
) {
    res.status(200).json({
        req: {
            method: req.method,
            fullUrl: `${req.url}`,
            body: req.body
        },
        utilData: {
            msOneUtilStr: serverMsOneUtils(),
            sharedUtilStr: serverSharedUtils()
        }
    })
}