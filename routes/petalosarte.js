const express = require('express');
const router = express.Router();
const axios = require('axios');
const admin = require('firebase-admin');
const db = admin.firestore();
const arrangements = db.collection('arrangements');
const discounts = db.collection('discounts');
const stripe = require('stripe')('sk_test_6eY7Gej779d3mEC51fPHukwQ')


router.post('/testRoute', async(req,res) =>{
    console.log('IN HERE!!');
    console.log(req.body)
    try {
        console.log('pass')
        res.send('TEST PASS');
        console.log('passed')
    } catch (error) {
        console.log(error);
    }
})


router.post('/createDiscountCode', async(req, res) => {
    try {
        const ref = discounts.doc();
        ref.set(req.body)
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.error('error creating discount code');
    }
})



router.post('/removeDiscountCode/:id', async(req, res) => {
    try {
        console.log(req.params.id)
        discounts.doc(req.params.id).delete();
        res.send(200);
    } catch (error) {
        console.log(error);
        res.error('error creating discount code');
    }
})


router.post('/toggleStatus/:id', async(req,res) => {
    try{
        const ref = arrangements.doc(req.params.id);
        const doc = await ref.get();
        if(!doc.exists){
            res.send('Error retrieving arrangement');
        }else{
            let obj = {
                active : !doc.data().active
            }
            ref.update(obj).then(() => {
                console.log('updated active status');
            })
        }
        
        res.send('test')

    }catch(error){
        console.log('ERROR IN TOGGLE STATUS');
        console.log(error);
    }
})


router.post('/updatePrice/:id/:price', async(req,res) =>{
    console.log(req.params.price)
    try{
        const ref = arrangements.doc(req.params.id);
        let obj = {
            price : parseFloat(req.params.price)
        }

        ref.update(obj).then(() => {
            console.log('updated price');
        })

        res.send('success')
    }catch(error){
        console.log('ERROR IN UPDATE PRICE');
        console.log(error);
    }

} )


router.post('/incrementPopularity/:id', async(req, res) => {
    try{
        const ref = arrangements.doc(req.params.id);
        const doc = await ref.get();
        if(!doc.exists){
            res.send('Error retrieving arrangement');
        }else{
            let obj = {
                popularity : doc.data().popularity + 1
            }
            ref.update(obj).then(() => {
                console.log('updated popularity');
            })
        }
        
        res.send('success')

    }catch(error){
        console.log('ERROR IN INCREMENT POPULARITY');
        console.log(error);
    }
})


router.post('/setPopularity/:id/:pop', async(req, res) => {
    try{
        const ref = arrangements.doc(req.params.id);

        let obj = {
            popularity : parseInt(req.params.pop)
        }
        ref.update(obj).then(() => {
            console.log('updated popularity');
        })
        
        res.send('success')

    }catch(error){
        console.log('ERROR IN SET POPULARITY');
        console.log(error);
    }
})



router.post('/charge', async(req, res) => {
    console.log('in Charge route');
    const { totalPrice } = req.body;
    console.log(totalPrice)
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(totalPrice * 100),
        currency: "usd"
    });

    res.send({
        clientSecret: paymentIntent.client_secret
    });
})



module.exports = router;