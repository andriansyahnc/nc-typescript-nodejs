import { Application, Request, Response } from 'express';
import { ChecklistController } from '../controllers/checklist_controller';

export class ChecklistRoutes {

    private checklist_controller: ChecklistController = new ChecklistController();

    public route(app: Application) {
        
        app.post('/api/checklist', (req: Request, res: Response) => {
            this.checklist_controller.create_checklist(req, res);
        });

        app.get('/api/checklist/:id', (req: Request, res: Response) => {
            this.checklist_controller.get_checklist(req, res);
        });

        app.put('/api/checklist/:id', (req: Request, res: Response) => {
            this.checklist_controller.update_checklist(req, res);
        });

        app.delete('/api/checklist/:id', (req: Request, res: Response) => {
            this.checklist_controller.delete_checklist(req, res);
        });

    }
}