import { Document, Types } from "mongoose";
import { ModelTimestamp } from '../common/models'

export interface IChecklist extends Document {
    _id: Types.ObjectId,
    type: string,
    object_domain: string,
    object_id: string,
    description: string,
    is_completed: boolean,
    due: Date|null,
    task_id: string,
    urgency: number|null,
    last_update_by: string,
    timestamp: ModelTimestamp,
}