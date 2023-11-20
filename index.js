//const
//let //나중에 바뀔 수 있음
'use strict';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const serverPort = 80;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends:false}));
app.use(cors());

const router = express.Router();

const ping = (req, res) => {
    const result = "pong";
    res.send({result});
    console.log("ping is called");
}

router.route('/ping').get(ping);

app.use('/test/api/v1', router);
app.listen(serverPort);