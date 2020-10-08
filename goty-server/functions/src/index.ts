import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';


const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://firestore-graphic-94227.firebaseio.com"
});

const db = admin.firestore();

export const myApp = functions.https.onRequest((request, response) => {
    response.json({
        mensaje: "Hello from Firebase!!"
    });
});

export const getGoty = functions.https.onRequest(async(request, response) => {
    const gotyRef = db.collection('goty');
    const docsSnap = await gotyRef.get();
    const games = docsSnap.docs.map( doc => doc.data());

    response.json(games);
});

// Express
const app = express();
app.use(cors({origin: true}));

app.get('/goty', async (req, res) => {
    const gotyRef = db.collection('goty');
    const docsSnap = await gotyRef.get();
    const games = docsSnap.docs.map( doc => doc.data());

    res.json(games);
});

app.post('/goty/:id', async (req, res) => {
    const id = req.params.id;
    const gameRef = db.collection('goty').doc(id);
    const gameSnap = await gameRef.get();

    if(!gameSnap.exists) {
        res.status(404).json({
            ok: false,
            mensaje: 'No existe un juego con ese ID'
        });
    } else {
        const antes = gameSnap.data() || { votos: 0 }; 
        await gameRef.update({
            votos: antes.votos + 1
        });

        res.json({
            ok: true,
            mensaje: `Votaste a ${ antes.name }`
        })
    }
        
});

export const api = functions.https.onRequest(app);