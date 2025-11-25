const { kafka } = require("./client");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// producer generally send the event to the topics
async function init() {
  // create and connect the producer
  const producer = kafka.producer();

  console.log("Connecting Producer");
  await producer.connect();
  console.log("Producer Connected Successfully");

  rl.setPrompt("> ");
  rl.prompt();

  rl.on("line", async function (line) {
    const [riderName, location] = line.split(" ");
    await producer.send({
      topic: "rider-updates",
      messages: [
        {
          partition: location.toLowerCase() === "north" ? 0 : 1,
          key: "location-update",
          value: JSON.stringify({ name: riderName, location }),
        },
      ],
    });
  }).on("close", async () => {
    await producer.disconnect();
  });
}

init();



// const { kafka } = require('./client')
// // import kafka from client

// async function init() {
//   const producer = kafka.producer();
//   console.log('Created and Connected Producer');
//   await producer.connect();

//   await producer.send({
//     topic: 'rider-updates',
//     messages: [
//       {
//         partition: 0,
//         key: 'location-update',
//         value: JSON.stringify( {name: 'Tony Stack', loc: 'SOUTH'} )
//       }
//     ]
//   })
//   // create topic along with details 
//   console.log("Producer send the message to the topic successfully");

//   await producer.disconnect();
//   console.log("Producer disconnected")
// }

// init()