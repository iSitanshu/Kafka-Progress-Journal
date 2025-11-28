import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "order-service",
  brokers: ["localhost:9094"],
});

const consumer = kafka.consumer({ groupId: "order-service" });
const producer = kafka.producer();

const run = async () => {
  try {
    await producer.connect();
    await consumer.connect();
    await consumer.subscribe({
      topic: "payment-successful",
      fromBeginning: true,
    });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const value = message.value.toString();
        const { userId, cart } = JSON.parse(value);

        // TODO: Create order on DB
        const dummyOrderId = "123456789";
        console.log(`Order Consumer: Order created for userId: ${userId}`)

        await producer.send({
          topic: "order-successful",
          messages: [
            { value: JSON.stringify({ userId, orderId: dummyOrderId }) },
          ],
        });
      },
    });
  } catch (error) {
    console.log("Error in consumer", error);
  }
};

run();
