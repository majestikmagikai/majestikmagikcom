"use client";

import { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, GenerateContentResponse, Chat } from '@google/genai';


// Import custom hook
import useMediaQuery from './hooks/useMediaQuery';

import {
  HeroSection,
  ShopSection,
  TeamSection,
  TestimonialsSection,
  Chatbot,

} from './components';

import './globals.css';



const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;


interface ChatMessage {
  id: string;
  text: string | undefined;
  sender: 'user' | 'ai';
}


const App = () => {

  const [geminiAi, setGeminiAi] = useState<GoogleGenAI | null>(null);
  const [isGeminiInitialized, setIsGeminiInitialized] = useState<boolean>(false);


  // Chatbot State
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState<string>('');
  const [isChatLoading, setIsChatLoading] = useState<boolean>(false);
  const [chatError, setChatError] = useState<string | null>(null);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  const chatMessagesEndRef = useRef<HTMLDivElement | null>(null);

  // Use the media query hook to detect if the screen is 'xl' (desktop) or larger.
  // Tailwind's 'xl' breakpoint is typically 1280px.
  const isDesktopView = useMediaQuery('(min-width: 1280px)');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  // Define navigation items


  useEffect(() => {
    try {
      if (GEMINI_API_KEY) {
        const genAI = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
        setGeminiAi(genAI);
        setIsGeminiInitialized(true);
      } else {
        console.warn("Gemini API key is not configured. Chatbot will be disabled.");
        setIsGeminiInitialized(false);
      }
    } catch (error) {
      console.error("Failed to initialize Gemini AI:", error);
      setIsGeminiInitialized(false);
    }
  }, []);


  useEffect(() => {
    // If the view changes to desktop and the mobile menu is open,
    // automatically close the mobile menu.
    if (isDesktopView && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isDesktopView, isMobileMenuOpen]);


  useEffect(() => {
    const animatedElements = document.querySelectorAll('.scroll-animate');
    if (!('IntersectionObserver' in window)) { // Disable on policy pages
      animatedElements.forEach(el => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    animatedElements.forEach(el => observer.observe(el));
    return () => animatedElements.forEach(el => { if (observer && el) observer.unobserve(el); });
  }, []); // Re-run if policy page changes

  useEffect(() => {
    chatMessagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const handleToggleChat = () => {
    setIsChatOpen(prev => !prev);
    if (!isChatOpen && chatMessages.length === 0 && geminiAi && isGeminiInitialized) {
      setChatMessages([{ id: Date.now().toString(), text: "Hello! I'm Majestik Magik's AI Assistant. How can I help you today?", sender: 'ai' }]);
    } else if (!geminiAi || !isGeminiInitialized) {
      setChatMessages([{ id: Date.now().toString(), text: "AI Assistant is currently unavailable. Please ensure Gemini API is configured and initialized.", sender: 'ai' }]);
    }
  };

  const handleChatInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatInput(e.target.value);
  };

  const handleSendChatMessage = async (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    const messageText = chatInput.trim();
    if (!messageText || !geminiAi || !isGeminiInitialized) return;

    const newUserMessage: ChatMessage = { id: Date.now().toString(), text: messageText, sender: 'user' };
    setChatMessages(prev => [...prev, newUserMessage]);
    setChatInput('');
    setIsChatLoading(true);
    setChatError(null);

    try {
      let currentChat = chatSession;
      if (!currentChat) {
        if (!geminiAi) throw new Error("Gemini AI client not available for chat.");
        currentChat = geminiAi.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: "You are a friendly and helpful AI assistant for Majestik Magik, a company specializing in AI-powered website design and digital systems solutions. Your goal is to answer user questions about Majestik Magik, its services (Custom Web Development, SEO, Digital Marketing, Meet the Team), and help them navigate the website. Be concise and informative. If asked about the pricing, politely state that more information can be found by visiting the relevant page. If a custom website inquiry is needed, politely state that an invoice may be issued for the service provided. If asked about pricing or specific features not detailed, politely state that more information can be found by contacting Majestik Magik directly through the contact options on the website or by visiting the relevant page.",
          },
        });
        setChatSession(currentChat);
      }

      const response: GenerateContentResponse = await currentChat.sendMessage({ message: messageText });
      const aiResponseText = response.text;
      const newAiMessage: ChatMessage = { id: (Date.now() + 1).toString(), text: aiResponseText, sender: 'ai' };
      setChatMessages(prev => [...prev, newAiMessage]);

    } catch (err) {
      console.error('Chat API error:', err);
      setChatError(`Sorry, I couldn't connect to the AI`);
      const errorAiMessage: ChatMessage = { id: (Date.now() + 1).toString(), text: "I'm having a little trouble connecting right now. Please try again in a moment.", sender: 'ai' };
      setChatMessages(prev => [...prev, errorAiMessage]);
    } finally {
      setIsChatLoading(false);
    }
  };

  // Add the return statement here
  return (
    <>
      <div>

        <main>
          <HeroSection          
            onLearnMore={() => document.getElementById('comparison-chart')?.scrollIntoView({ behavior: 'smooth' })}
          />
       
          <ShopSection />
          <TeamSection />
          <TestimonialsSection />
        </main>



        {/* Chatbot is likely a fixed element */}
        <Chatbot
          isChatOpen={isChatOpen}
          handleToggleChat={handleToggleChat} // Correct prop name
          chatMessages={chatMessages}
          chatInput={chatInput}
          handleChatInputChange={handleChatInputChange}
          handleSendChatMessage={handleSendChatMessage}
          isChatLoading={isChatLoading}
          chatError={chatError}
          isGeminiInitialized={isGeminiInitialized}
          chatMessagesEndRef={chatMessagesEndRef as React.RefObject<HTMLDivElement>}

        />
        
      </div>
    </>
  );
};

export default App;
