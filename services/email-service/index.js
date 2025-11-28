import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "email-service",
  brokers: ["localhost:9094"],
});

const consumer = kafka.consumer({ groupId: "email-service" });
const producer = kafka.producer();

const run = async () => {
  try {
    await producer.connect();
    await consumer.connect();
    await consumer.subscribe({
      topic: "order-successful",
      fromBeginning: true,
    });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const value = message.value.toString();
        const { userId, orderId } = JSON.parse(value);

        // TODO: send email to the user
        const dummyEmailId = "1@1.com";
        console.log(`Email consumer: Email sent to the user id: ${userId}`);
        

        await producer.send({
          topic: "order-successful",
          messages: [
            { value: JSON.stringify({ userId, emailId: dummyEmailId }) },
          ],
        });
      },
    });
  } catch (error) {
    console.log("Error in consumer", error);
  }
};

run();
