const { Kafka } = require("kafkajs"); // importing KAFKA

// creating a broker (server) using kafka
exports.kafka = new Kafka({
  clientId: "my-app",
  brokers: ["192.168.1.13:9092"],
  // in the docker we had created kafka 
  // server on port 9092 on our private ip
  // same we will mention here
});