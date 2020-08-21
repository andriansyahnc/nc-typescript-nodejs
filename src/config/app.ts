import * as express from "express"
import * as bodyParser from "body-parser"
import * as mongoose from "mongoose"

class App {
    public app: express.Application;
    public mongoUrl: string = 'mongodb://localhost/rest_api';

    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();
    }

    private config() {
        this.app.use(bodyParser.json());
    }

    private mongoSetup(): void {
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
     }
}

export default new App().app;