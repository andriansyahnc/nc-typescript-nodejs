import { IChecklist } from "./models";
import checklist from "./schema"

export default class ChecklistService {
    public fetchChecklists(query: any, callback: any) {
        checklist.find(query, callback);
    }

    public createChecklist(checklist_params: IChecklist, callback: any) {
        const __checklist = new checklist(checklist_params);
        __checklist.save(callback);
    }

    public findChecklist(query: any, callback: any) {
        checklist.findOne(query, callback);
    }

    public updateChecklist(checklist_params: IChecklist, callback: any) {
        const query = { id: checklist_params._id }
        checklist.findOneAndUpdate(query, checklist_params, callback);
    }

    public deleteChecklist(id: String, callback: any) {
        const query = { _id: id };
        checklist.deleteOne(query, callback);
    }

}