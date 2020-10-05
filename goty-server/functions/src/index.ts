import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

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
