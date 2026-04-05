
 import { Client } from "pg";
 import express from "express" ;
import { error } from "node:console";

const app = express();
app.use(express.json());

const pgClient = new Client("postgresql://neondb_owner:npg_dgUl2Q5AGoxf@ep-quiet-boat-abbniyx5-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require")

pgClient.connect();


app.post("/signup" , async function (req , res){
    const username = req.body.username ;
    const password = req.body.password;
    const email = req.body.email;
    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;
    
    try{
        const insertQuery = `INSERT into users(username , password , email) VALUES ($1 ,$2 ,$3) RETURNING id;`

        const addressInsertQuery = `INSERT into addresses (city, country , street , pincode , user_id) VALUES($1 ,$2 , $3 ,$4, $5)`

        await pgClient.query("BEGIN;")
    
    const response = await pgClient.query(insertQuery , [username , password , email ]);
    const userId = response.rows[0].id;
    // await new Promise(x => setTimeout(x , 100 * 1000 )); // stop the control on this line for some time 
    const addressInsertQueryResponse = await pgClient.query(addressInsertQuery,[city , country , street , pincode , userId]);

    await pgClient.query("COMMIT;")
    
    res.json({
        message : "you have signed up successfully"
    })

    } catch(e) {
        res.json({
            message : "error while signup",
            error : e
        }) 

    }
    
})

app.get("/metadata" , async function (req , res){
    const id = req.query.id;
    const query1 = `SELECT * FROM users WHERE id=$1`;
    const response1 = await pgClient.query(query1 , [id]);

    const query2 = `SELECT * FROM users WHERE id=$2`;
    const response2 = await pgClient.query(query2 , [id])

    res.json({
        user : response1.rows[0],
        address : response2.rows[0]
    })
})

app.get("/bettermetadata" , async function (req , res){
    const id = req.query.id;

    const query = `SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode FROM users JOIN addresses ON users.id = addresses.user_id WHERE users.id = '$1';`

    const response = await pgClient.query(query , [id]);

    res.json({
         response : response.rows
    })

    
})

app.listen(3000);