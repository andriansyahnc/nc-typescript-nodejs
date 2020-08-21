import { Request, Response } from 'express'
import { IChecklist } from '../modules/checklists/models'
import ChecklistService from '../modules/checklists/services'
import { mongoError, successResponse, insufficientParameters } from '../modules/common/services';

export class ChecklistController {
    private checklist_service: ChecklistService = new ChecklistService();

    public create_checklist(req: Request, res: Response) {
        if (req.body.type && req.body.object_domain && req.body.object_id && req.body.description
            && req.body.task_id) {
                const checklist_params: IChecklist = {
                    type: req.body.type,
                    object_domain: req.body.object_domain,
                    object_id: req.body.object_id,
                    description: req.body.description,
                    is_completed: req.body.is_completed !== undefined ? req.body.is_completed : false,
                    due: null,
                    task_id: req.body.task_id !== undefined ? req.body.task_id : 0,
                    last_update_by: "",
                    urgency: req.body.urgency !== undefined ? req.body.urgency : 0,
                    timestamp: [{
                        created_at: new Date(Date.now()),
                        update_at: null,
                        completed_at: null,
                    }]
                };
                this.checklist_service.createChecklist(checklist_params, (err: any, checklist_data: IChecklist) => {
                    if (err) {
                        mongoError(err, res);
                    } else {
                        successResponse(null, null, checklist_data, res);
                    }
                })
            };
    }

    public get_checklist(req: Request, res: Response) {
        if (req.params.id) {
            const user_filter = { _id: req.params.id };
            this.checklist_service.fetchChecklists(user_filter, (err: any, checklist_data: IChecklist) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    successResponse(null, null, checklist_data, res);
                }
            });
        } else {
            insufficientParameters(res);
        }
    }

    public update_checklist(req: Request, res: Response) {
        // todo: update checklist
    }

    public delete_checklist(req: Request, res: Response) {
        // todo: delete checklist
    }
}