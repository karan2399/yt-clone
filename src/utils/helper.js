const messages = [
  {
    name: "Karan Patel",
    message: "Live Chat Rocks!!!",
  },
  {
    name: "Alex Johnson",
    message: "Hey everyone! How's your day going? 😊",
  },
  {
    name: "Priya Sharma",
    message: "Just finished building my first React project! 🚀",
  },
  {
    name: "John Smith",
    message: "That's awesome! Keep it up.",
  },
  {
    name: "Sarah Williams",
    message: "Does anyone know how to fix this CSS flexbox issue?",
  },
  {
    name: "Rahul Mehta",
    message: "Try using justify-content: space-between;",
  },
  {
    name: "Emily Davis",
    message: "Good morning developers! ☀️",
  },
  {
    name: "Michael Scott",
    message: "I declare this chat officially awesome!",
  },
  {
    name: "Neha Patel",
    message: "Can someone share some good JavaScript interview questions?",
  },
  {
    name: "David Miller",
    message: "Never stop learning. Small progress every day adds up! 💯",
  },
  {
    name: "Sneha Desai",
    message: "React + Node.js = ❤️",
  },
  {
    name: "Chris Evans",
    message: "Hello world!",
  },
];

export function generateRandomMessage() {
  var finalMessage = messages[Math.floor(Math.random() * messages.length)];
  return finalMessage;
}
