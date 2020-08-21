import * as mongoose from 'mongoose';
import { ModelTimestamp } from '../common/models';

const Schema = mongoose.Schema;
const schema = new Schema({
    type: String,
    object_domain: String,
    object_id: String,
    description: String,
    is_completed: {
        type: Boolean,
        default: false,
    },
    due: Date,
    task_id: String,
    urgency: Number,
    last_update_by: String,
    timestamp: ModelTimestamp
})

export default mongoose.model('checklists', schema);