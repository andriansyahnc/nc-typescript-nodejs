import { Response } from 'express';
import { response_status_codes } from './models';

export function successResponse(meta: any, links: any, data: any, res: Response) {
    res.status(response_status_codes.success).json({
        data: data,
    });
}

export function failureResponse(message: string, DATA: any, res: Response) {
    res.status(response_status_codes.success).json({
        STATUS: 'FAILURE',
        MESSAGE: message,
        DATA
    });
}

export function insufficientParameters(res: Response) {
    res.status(response_status_codes.bad_request).json({
        STATUS: 'FAILURE',
        MESSAGE: 'Insufficient parameters',
        DATA: {}
    });
}

export function mongoError(err: any, res: Response) {
    res.status(response_status_codes.internal_server_error).json({
        STATUS: 'FAILURE',
        MESSAGE: 'MongoDB error',
        DATA: err
    });
}