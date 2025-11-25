import express from "express";
import cors from "cors"

const app = express();
const PORT = 3000;

app.use(cors({
    origin: "http://localhost:5173/"
}))
app.use(express.json())

// create payment route
app.post('/payment-service' , async (req, res) => {
    const { cart } = req.body;
    // ASSUME THAT WE GET THE COOKIE AND DECRYPT THE USER ID
    const userId = "123";

    // TODO: PAYMENT

    //KAFKA
    console.log("API ENDPOINT HIT!")
    return res.status(200).send("Payment Successful")
})

app.use((error, req, res) => {
    res.status(error.status || 500).send(error.message)
})

app.listen(PORT, () => {
    console.log(`Payment Service is running on PORT: ${PORT}`)
});