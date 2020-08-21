import { Types } from "mongoose";
import ChecklistSchema from "../server/modules/checklists/schema";

describe("UPDATE checklists", () => {

    const mockChecklist = {
        _id: Types.ObjectId(),
        type: "checklist",
        object_domain: "contact",
        object_id: "2",
        description: "Need to verify this guy house.",
        is_completed: true,
        due: null,
        task_id: "2",
        last_update_by: "",
        urgency: null,
        timestamp: {
            created_at: "2020-08-21T16:27:02.681Z",
            update_at: "2020-08-21T16:27:17.400Z",
            completed_at: "2020-08-21T16:27:17.400Z"
        }
    };
    
    const mockChecklist2 = {
        _id:mockChecklist._id,
        type: "checklist",
        object_domain: "contact",
        object_id: "2",
        description: "What?",
        is_completed: true,
        due: null,
        task_id: "2",
        last_update_by: "",
        urgency: null,
        timestamp: {
            created_at: new Date("2020-08-21T16:27:02.681Z"),
            update_at: new Date("2020-08-21T16:27:17.400Z"),
            completed_at: new Date("2020-08-21T16:27:17.400Z")
        }
    };

    it("Should returns an error if a checklist does not exist", () => {
		const spy = jest.spyOn(ChecklistSchema, "findOneAndUpdate").mockReturnValueOnce("Id provided does not match any checklist" as any);
		ChecklistSchema.findOneAndUpdate({ _id: Types.ObjectId() }, mockChecklist2);

		const spyUpdatedChecklist = spy.mock.results[0].value;
		expect(spy).toHaveBeenCalledTimes(1);
		expect(spyUpdatedChecklist).toEqual("Id provided does not match any checklist");
		spy.mockReset();
	});

	it("Should update a checklist successfully!", () => {
		const spy = jest.spyOn(ChecklistSchema, "findOneAndUpdate").mockReturnValueOnce(mockChecklist2 as any);
        delete mockChecklist2.timestamp.created_at;
        ChecklistSchema.findOneAndUpdate({ _id: mockChecklist._id }, mockChecklist2);

		const spyUpdatedChecklist = spy.mock.results[0].value;
		expect(spy).toHaveBeenCalledTimes(1);
		expect(spyUpdatedChecklist.description).toEqual(mockChecklist2.description);
		spy.mockReset();
	});
});