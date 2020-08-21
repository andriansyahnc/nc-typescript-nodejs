import { Types } from "mongoose";
import ChecklistSchema from "../server/modules/checklists/schema";

describe("READ checklist", () => {
    it("Should return the list of checklist successfully", () => {
        const mockedChecklistList = [
            {
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
            },
            {
                _id: Types.ObjectId(),
                type: "checklist",
                object_domain: "contact",
                object_id: "2",
                description: "Need to verify this guy house hm.",
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
        ];

        const spy = jest.spyOn(ChecklistSchema, "find").mockReturnValueOnce(mockedChecklistList as any);
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
        const mockChecklist = {
            _id: Types.ObjectId(),
            type: "checklist",
            object_domain: "contact",
            object_id: "2",
            description: "Need to verify this guy house hm.",
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