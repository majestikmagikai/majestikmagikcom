'use client';

import React, { useState, useEffect, useRef } from 'react';
import Chatbot from './Chatbot';

interface ChatMessage {
  id: string;
  text: string | undefined;
  sender: 'user' | 'ai';
}

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

const SYSTEM_INSTRUCTION =
  "You are a friendly and helpful AI assistant for Majestik Magik, a company specializing in AI-powered website design and digital systems solutions. Your goal is to answer user questions about Majestik Magik, its services (Custom Web Development, SEO, Digital Marketing, Pivot Quest), and help them navigate the website. Be concise and informative. If asked about pricing, politely state that more information can be found by visiting the relevant page. If a custom website inquiry is needed, politely state that an invoice may be issued for the service provided. If asked about pricing or specific features not detailed, politely state that more information can be found by contacting Majestik Magik directly through the contact options on the website or by visiting the relevant page.";

export default function ChatbotController() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [chatError, setChatError] = useState<string | null>(null);
  const [isGeminiInitialized, setIsGeminiInitialized] = useState(false);
  const chatMessagesEndRef = useRef<HTMLDivElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const geminiRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chatSessionRef = useRef<any>(null);

  useEffect(() => {
    chatMessagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const initGemini = async () => {
    if (geminiRef.current || !GEMINI_API_KEY) return;
    try {
      const { GoogleGenAI } = await import('@google/genai');
      geminiRef.current = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
      setIsGeminiInitialized(true);
    } catch {
      setIsGeminiInitialized(false);
    }
  };

  const handleToggleChat = async () => {
    const opening = !isChatOpen;
    setIsChatOpen(opening);
    if (opening) {
      await initGemini();
      if (chatMessages.length === 0) {
        setChatMessages([{
          id: Date.now().toString(),
          text: "Hello! I'm Majestik Magik's AI Assistant. How can I help you today?",
          sender: 'ai',
        }]);
      }
    }
  };

  const handleChatInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatInput(e.target.value);
  };

  const handleSendChatMessage = async (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    const messageText = chatInput.trim();
    if (!messageText || !geminiRef.current) return;

    setChatMessages(prev => [...prev, { id: Date.now().toString(), text: messageText, sender: 'user' }]);
    setChatInput('');
    setIsChatLoading(true);
    setChatError(null);

    try {
      if (!chatSessionRef.current) {
        chatSessionRef.current = geminiRef.current.chats.create({
          model: 'gemini-2.5-flash',
          config: { systemInstruction: SYSTEM_INSTRUCTION },
        });
      }
      const response = await chatSessionRef.current.sendMessage({ message: messageText });
      setChatMessages(prev => [...prev, { id: (Date.now() + 1).toString(), text: response.text, sender: 'ai' }]);
    } catch {
      setChatError("Sorry, I couldn't connect to the AI");
      setChatMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: "I'm having a little trouble connecting right now. Please try again in a moment.",
        sender: 'ai',
      }]);
    } finally {
      setIsChatLoading(false);
    }
  };

  return (
    <Chatbot
      isChatOpen={isChatOpen}
      handleToggleChat={handleToggleChat}
      chatMessages={chatMessages}
      chatInput={chatInput}
      handleChatInputChange={handleChatInputChange}
      handleSendChatMessage={handleSendChatMessage}
      isChatLoading={isChatLoading}
      chatError={chatError}
      isGeminiInitialized={isGeminiInitialized}
      chatMessagesEndRef={chatMessagesEndRef as React.RefObject<HTMLDivElement>}
    />
  );
}
