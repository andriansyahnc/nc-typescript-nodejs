import { ModelTimestamp } from '../common/models'

export interface IChecklist {
    _id?: String,
    type: String,
    object_domain: String,
    object_id: String,
    description: String,
    is_completed: Boolean,
    due: Date|null,
    task_id: String,
    urgency: Number,
    last_update_by: String,
    timestamp: ModelTimestamp[],
}