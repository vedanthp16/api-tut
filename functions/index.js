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
       const db = admin.firestore()
       exports.SendDoc=functions.https.onRequest(async(req, res) =>{
                           const prod = db.collection('products');
                           let arr= [];
                           const e= await prod.get(); 
                                    e.forEach(doc=>{
                                        const dt = doc.data();
                                        Id=doc.id;
                                        const dataa={...dt, Id};
                                        arr.push(dataa);
                                         });
                                         res.json(
                                             arr
                                         )    
});

exports.ReadDoc= functions.https.onRequest(async(req, res)=>{
    const ID = req.body.id;
    const query = await db.collection('products').doc(ID).get();
        const dt=query.data();
            res.json(dt)
  })  

exports.EditDoc = functions.https.onRequest(async(req, res)=>{
    const query = await db.collection('products').get();
    query.forEach(doc=>{
        const ID = doc.id;
       // const dt=doc.data();
        if(req.body.id==ID){
            db.collection('products').doc(ID).update({
                price: req.body.price
            })
         
        const dt=doc.data();
            res.json({
                dt
            })
        }
        })
    
    })




                                
                       