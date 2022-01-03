const functions = require("firebase-functions");
const corse = require('cors')({origin: true});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");

const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

/* -exports.sendMessage = functions.firestore
    .document('products/{productId}/qwertyu/{id}')
    .onCreate((change,context) => {

     const docId = context.params.productId;
     const Id = context.params.id;

     const name = change.data().name;
     const productRef = admin.firestore().collection('products').doc(docId)

     return productRef.update({ message: `Nice ${name}! = Love Cloud Functions`})
 });*/

 /*exports.Uploadfiile = functions.https
       .onRequest((req, res) => { 
           res.status(200).json({

            message : 'It worked'
           })
          

       })*/
      // const db = firebase.firestore()
       exports.SendDoc=functions.https.onRequest((req, res) =>{
                           const prod = admin.firestore().collection('products');
                           prod.get() 
                                .then(e=>{
                                    let arrayR = e.docs.map(doc => {
                                        return doc.data();
                                     }); 
                                     res.json(arrayR);
                                    //e.forEach(doc=>{
                                      //  const dt = doc.data();
                                      //   console.log(dt) 
                                      //   res.send(dt);
                                       //  });
                                   });
                                })
                       