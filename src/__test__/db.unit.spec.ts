import { Types } from "mongoose";
import ChecklistSchema from "../server/modules/checklists/schema";
jest.mock('../server/modules/checklists/schema')

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
    _id: mockChecklist._id,
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

const mockChecklistlist = [
    {
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
    },
    {
        _id: Types.ObjectId(),
        type: "checklist",
        object_domain: "contact",
        object_id: "1",
        description: "Need to verify this guy house.",
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
];

describe("Create checklist", () => {
    it("Should create a checklist!", () => {
        const checklist = new ChecklistSchema(mockChecklist)
        expect(ChecklistSchema).toHaveBeenCalledTimes(1);
    });
});

describe("READ checklist", () => {
    it("Should return the list of checklist successfully", () => {
        const spy = jest.spyOn(ChecklistSchema, "find").mockReturnValueOnce(mockChecklistlist as any);
        ChecklistSchema.find({});

        const spyFetchedChecklists = spy.mock.results[0].value;
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spyFetchedChecklists).toHaveLength(2);
        spy.mockReset();
    });

    it("Should return an empty list if there are no checklist", () => {
        const spy = jest.spyOn(ChecklistSchema, "find").mockReturnValueOnce([] as any);
        ChecklistSchema.find({});

        const spyFetchedChecklists = spy.mock.results[0].value;
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spyFetchedChecklists).toHaveLength(0);
        spy.mockReset();
    });

    it("Should return a checklist successfully!", () => {
        const spy = jest.spyOn(ChecklistSchema, "findOne").mockReturnValueOnce(mockChecklist as any);
        ChecklistSchema.findOne({ _id: mockChecklist._id });

        const spyFetchedChecklist = spy.mock.results[0].value;
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spyFetchedChecklist.description).toEqual(mockChecklist.description);
        spy.mockReset();
    });

    it("Should return an error when the checklist does not exit", () => {
        const id = Types.ObjectId();
        const spy = jest.spyOn(ChecklistSchema, "findOne").mockReturnValueOnce("Checklist not found" as any);
        ChecklistSchema.findOne({ _id: id });

        const spyFetchedChecklist = spy.mock.results[0].value;
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spyFetchedChecklist).toEqual("Checklist not found");
        spy.mockReset();
    });
});

describe("UPDATE checklists", () => {

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

describe("DELETE checklists", () => {
    it("Should returns an error if a checklist does not exist", () => {
		const spy = jest.spyOn(ChecklistSchema, "deleteOne").mockReturnValueOnce("Id provided does not match any checklist" as any);
		ChecklistSchema.deleteOne({ _id: Types.ObjectId() });

		const spyDeletedChecklist = spy.mock.results[0].value;
		expect(spy).toHaveBeenCalledTimes(1);
		expect(spyDeletedChecklist).toEqual("Id provided does not match any checklist");
		spy.mockReset();
    })
    
    it("Should delete a checklist successfully!", () => {
		const spy = jest.spyOn(ChecklistSchema, "deleteOne").mockReturnValueOnce(mockChecklist as any);
		ChecklistSchema.deleteOne({ _id: mockChecklist._id });

		const spyDeletedChecklist = spy.mock.results[0].value;
		expect(spy).toHaveBeenCalledTimes(1);
		expect(spyDeletedChecklist._id).toEqual(mockChecklist._id);
		spy.mockReset();
	});
});