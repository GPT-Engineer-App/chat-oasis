import React, { useState } from "react";
import { Box, VStack, HStack, Heading, Input, Button, Text, Avatar, Divider } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      const newMessage = {
        id: Date.now(),
        text: inputMessage,
        sender: "user",
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");

      // Simulating bot response after 1 second
      setTimeout(() => {
        const botMessage = {
          id: Date.now(),
          text: `You said: ${inputMessage}`,
          sender: "bot",
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }, 1000);
    }
  };

  return (
    <Box maxWidth="600px" margin="auto" padding={4}>
      <Heading as="h1" size="xl" textAlign="center" marginBottom={8}>
        Chat App
      </Heading>

      <VStack spacing={4} align="stretch">
        {messages.map((message) => (
          <HStack key={message.id} alignSelf={message.sender === "user" ? "flex-end" : "flex-start"}>
            {message.sender === "bot" && <Avatar size="sm" name="Bot" src="https://images.unsplash.com/photo-1641312874336-6279a832a3dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGF2YXRhcnxlbnwwfHx8fDE3MTA2OTI0MzJ8MA&ixlib=rb-4.0.3&q=80&w=1080" />}
            <Box backgroundColor={message.sender === "user" ? "blue.500" : "gray.200"} color={message.sender === "user" ? "white" : "black"} borderRadius="lg" padding={2}>
              <Text>{message.text}</Text>
            </Box>
            {message.sender === "user" && <Avatar size="sm" name="User" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMDQyMjczMnww&ixlib=rb-4.0.3&q=80&w=1080" />}
          </HStack>
        ))}
      </VStack>

      <Divider marginY={4} />

      <HStack>
        <Input placeholder="Type a message..." value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} />
        <Button colorScheme="blue" onClick={handleSendMessage} leftIcon={<FaPaperPlane />}>
          Send
        </Button>
      </HStack>
    </Box>
  );
};

export default Index;
