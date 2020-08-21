import { Schema, model } from 'mongoose';
import { ModelTimestamp } from '../common/models';
import { IChecklist } from './models';

const checklistSchema = new Schema({
    type: {
        type: String
    },
    object_domain: {
        type: String
    },
    object_id: {
        type: String
    },
    description: {
        type: String
    },
    is_completed: {
        type: Boolean,
        default: false,
    },
    due: Date,
    task_id: {
        type: String
    },
    urgency: Number,
    last_update_by: {
        type: String
    },
    timestamp: ModelTimestamp
})

const ChecklistSchema = model<IChecklist>('checklists', checklistSchema);
export default ChecklistSchema;