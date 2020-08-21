import { IChecklist } from "./models";
import ChecklistSchema from "./schema"

export default class ChecklistService {
    public fetchChecklists(query: any, callback: any) {
        ChecklistSchema.find(query, callback);
    }

    public createChecklist(checklist_params: any, callback: any) {
        const __checklist = new ChecklistSchema(checklist_params);
        __checklist.save(callback);
    }

    public findChecklist(query: any, callback: any) {
        ChecklistSchema.findOne(query, callback);
    }

    public updateChecklist(checklist_params: any, callback: any) {
        const query = { _id: checklist_params._id }
        ChecklistSchema.findOneAndUpdate(query, checklist_params, callback);
    }

    public deleteChecklist(id: string, callback: any) {
        const query = { _id: id };
        ChecklistSchema.deleteOne(query, callback);
    }

}