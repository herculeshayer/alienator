import express, { NextFunction, Request, Response } from 'express';
import mysql from 'mysql2';



const app = express();
const port = 1337;



const Connect = async () => new Promise<mysql.Connection>((resolve, reject) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'ufo-sightings',
        port: 3310
    });
    connection.connect((err) => {
        if(err) {
            return reject(err);
            //return;
        }
        resolve(connection);
    });
})

const Query = async (connection: mysql.Connection, query: string) => new Promise((resolve, reject) => {
    connection.query(query, [], (err, res) => {
        if(err) {
            reject(err);
            return;
        }
    })
})
    


app.get('/',  (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).send("hi");
})

app.listen('1337', () => {
    console.log('listening on port: 1337');
})

