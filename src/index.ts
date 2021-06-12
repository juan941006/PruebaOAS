import express, {Application, application} from 'express';
import morgan from 'morgan';
import gamesRoutes from './routes/gamesRoutes'; 
import cors from 'cors';

 import indexRoutes from './routes/indexRoutes';
  //import gamesRoutes from './routes/gamesRoutes';


  class Server {

     public app: Application;

        constructor() {
         this.app = express();
         this.config();
         this.routes();
        }

    config(): void {
         this.app.set('port', process.env.PORT || 3000);

         this.app.use(morgan('dev')); //permite ver las peticiones CRUD
         this.app.use(cors()); // permite que angular pida datos al servidor 
         this.app.use(express.json()); //permite aceptar formatos json
         this.app.use(express.urlencoded({extended: false})); //para enviar desde un formulario html
     }

     routes(): void {
         this.app.use('/', indexRoutes);
         this.app.use('/api/games',gamesRoutes);
     }

     start() {
         this.app.listen(this.app.get('port'), () => {
             console.log('Server on port', this.app.get('port'));
         });
     }

}

 const server = new Server();
 server.start();
