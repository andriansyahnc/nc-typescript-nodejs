import * as express from "express"
import * as bodyParser from "body-parser"
import * as mongoose from "mongoose"
import { ChecklistRoutes } from "../routes/checklist_route";

class App {
    public app: express.Application;
    public mongoUrl: string = 'mongodb://localhost/rest_api';
    private checklistRoutes: ChecklistRoutes = new ChecklistRoutes();

    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();
        this.checklistRoutes.route(this.app);
    }

    private config() {
        this.app.use(bodyParser.json());
    }

    private mongoSetup(): void {
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
     }
}

export default new App().app;