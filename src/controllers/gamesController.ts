import {Request, Response} from  'express';
import gamesRoutes from '../routes/gamesRoutes';

class GamesController{
   public index (req:Request,res:Response) {
    res.send('Games')
   } 
}

export const gamesController = new GamesController();
export default gamesRoutes;