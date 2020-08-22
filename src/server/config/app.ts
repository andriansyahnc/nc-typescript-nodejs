import * as express from "express"
import * as bodyParser from "body-parser"
import * as mongoose from "mongoose"
import { ChecklistRoutes } from "../routes/checklist_route";
import Environment from '../environment'

class App {
    public app: express.Application;
    public db = mongoose.connection;
    private mongoUrl: string = 'mongodb://localhost/' + Environment.getDBName();
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
        this.db.on("error", (error) => {
            console.log("Error while establishing database connection: ", error);
        });
        
        this.db.on("open", () => {
            console.log("Connection to database established successfully!!");
        });
    }

}

const app = new App();

export default app;