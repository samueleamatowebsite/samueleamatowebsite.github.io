import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

// Rotta di esempio
app.get('/', (req: Request, res: Response) => {
  res.send('Benvenuto nel mio portfolio!');
});

// Avvia il server
app.listen(port, () => {
  console.log(`Server in esecuzione su http://localhost:${port}`);
});

