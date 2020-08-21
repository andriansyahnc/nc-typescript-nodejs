export interface ModelTimestamp {
    created_at: Date,
    update_at: Date | null,
    completed_at: Date | null, 
}

export const ModelTimestamp = {
    created_at: Date,
    update_at: Date,
    completed_at: Date,
}

export enum response_status_codes {
    success = 200,
    bad_request = 400,
    internal_server_error = 500
}