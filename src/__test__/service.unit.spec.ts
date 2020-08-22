import app from '../server/config/app'
import ChecklistService from '../server/modules/checklists/services';
import { Types } from 'mongoose';
import { IChecklist } from 'server/modules/checklists/models';
jest.mock('../server/modules/checklists/services')


describe("Checklists", () => {
  beforeAll(() => {
    app.db.on("open", () => {
      console.log("Database starts successfully");
    });
  })
  beforeEach(() => {
    if (app.db.collection("checklist").countDocuments()) {
      return app.db.collection("checklist").deleteMany({});
    }
  })
  afterAll(() => {
    return app.db.close();
  });

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

  describe("User Creation", () => {
    it("Should add a new user to database", async () => {
      const checklist: ChecklistService = new ChecklistService();
      checklist.createChecklist(mockChecklist, (err: any, checklist_data: IChecklist) => {
        expect(checklist_data).toEqual(mockChecklist)
      })
    })
  })

})