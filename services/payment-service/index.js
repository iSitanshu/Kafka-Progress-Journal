import express from "express";
import cors from "cors"
import { Kafka } from "kafkajs";
const app = express();
const PORT = 3000;

app.use(cors({
    origin: "http://localhost:3001"
}))
app.use(express.json())

const kafka = new Kafka({
    clientId: "payment-service",
    brokers: ["localhost:9094"]
})

const producer = kafka.producer();
const connectToKafka = async (req, res) => {
    try {
        await producer.connect();
        console.log("Producer Connected")
    } catch (error) {
        console.log("Error connecting to kafka", error);
    }
}

// create payment route
app.post('/payment-service' , async (req, res) => {
    console.log("Entered in the payment service")
    const { cart } = req.body;
    // ASSUME THAT WE GET THE COOKIE AND DECRYPT THE USER ID
    const userId = "123";

    // TODO: PAYMENT

    //KAFKA
    await producer.send({
        topic: 'payment-successful',
        messages: [{
            value: JSON.stringify({ userId, cart })
        }]
    })

    console.log("API ENDPOINT HIT!")
    return res.status(200).send("Payment Successful")
})

app.use((error, req, res) => {
    res.status(error.status || 500).send(error.message)
})

app.listen(PORT, () => {
    connectToKafka();
    console.log(`Payment Service is running on PORT: ${PORT}`)
});