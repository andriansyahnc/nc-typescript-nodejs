import { Types } from "mongoose";
import ChecklistSchema from "../server/modules/checklists/schema";
jest.mock('../server/modules/checklists/schema')

describe("Create checklist", () => {
	it("Should create a checklist!", () => {
		const mockChecklist = {
			_id: Types.ObjectId(),
			type: "checklist",
			object_domain: "contact",
			object_id: "1",
			description: "Need to verify this guy house hm.",
			is_completed: true,
			due: null,
			task_id: "1",
			last_update_by: "",
			urgency: null,
			timestamp: {
				created_at: "2020-08-21T16:27:02.681Z",
				update_at: "2020-08-21T16:27:17.400Z",
				completed_at: "2020-08-21T16:27:17.400Z"
			}
		}
        const checklist = new ChecklistSchema(mockChecklist)
        expect(ChecklistSchema).toHaveBeenCalledTimes(1);
	});
});