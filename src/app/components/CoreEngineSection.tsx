'use client';

import React, { useState, useEffect, useRef } from 'react';

interface LogLine {
  text: string;
  color: string;
  delay: number;
  fontWeight?: string;
}

export const CoreEngineSection = () => {
  const [visibleLogs, setVisibleLogs] = useState<LogLine[]>([]);
  const [showCursor, setShowCursor] = useState(false);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const logs: LogLine[] = [
    { text: "user@majestik-node1:~$ ./launch_core.sh", color: "#6366f1", delay: 300 },
    { text: "[INFO] Initializing Majestik Core Engine v1.0...", color: "#a5b4fc", delay: 800 },
    { text: "[SYSTEM] Booting secure local machine execution layers...", color: "#a5b4fc", delay: 600 },
    { text: "[DATABASE] Connecting to localized PostgreSQL Vector Instance...", color: "#38bdf8", delay: 700 },
    { text: "[DATABASE] pgvector extension found. Mapping high-dimensional embeddings...", color: "#34d399", delay: 500 },
    { text: "[CACHE] Initializing Redis context-window memory cache...", color: "#f43f5e", delay: 600 },
    { text: "[CACHE] Volatile state memory pipeline: ACTIVE (Latency: 0.8ms)", color: "#34d399", delay: 400 },
    { text: "[ENGINE] Fetching secure localized model graph fragments...", color: "#a5b4fc", delay: 800 },
    { text: "[ENGINE] Custom contextual guardrails applied successfully.", color: "#34d399", delay: 400 },
    { text: "[SUCCESS] Majestik Core RAG Engine is fully operational.", color: "#c084fc", fontWeight: "bold", delay: 500 },
    { text: "user@majestik-node1:~$ READY_FOR_RAPID_EXECUTION=true", color: "#6366f1", delay: 400 }
  ];

  useEffect(() => {
    let currentLine = 0;
    let timeoutId: NodeJS.Timeout;

    const typeLog = () => {
      if (currentLine < logs.length) {
        const nextLog = logs[currentLine];
        if (nextLog) {
          setVisibleLogs((prev) => [...prev, nextLog]);
          currentLine++;
          timeoutId = setTimeout(typeLog, nextLog.delay);
        }
      } else {
        setShowCursor(true);
      }
    };

    timeoutId = setTimeout(typeLog, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [visibleLogs]);

  return (
    <section 
      id="core-engine"      
      style={{ 
        position: "relative",
        padding: "100px 20px", 
        background: "#070913", 
        display: "flex", 
        justifyContent: "center",
        overflow: "hidden"        
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blink { 
          0%, 100% { opacity: 1; } 
          50% { opacity: 0; } 
        }
        @media (max-width: 900px) {
          .split-container { flex-direction: column !important; gap: 50px !important; }
          .text-column { max-width: 100% !important; text-align: center !important; }
        }
      `}} />

      {/* 1. Full-Screen Background Video Frame */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
          opacity: 0.18 // Low opacity keeps it moody, subtle, and text-readable
        }}
      >
        <source src="/videos/bare-metal-hardware.mp4" type="video/mp4" />
      </video>

      {/* 2. Micro Dot Matrix Overlay Pattern Layer */}
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
          backgroundImage: "radial-gradient(rgba(30, 38, 79, 0.4) 1px, transparent 1px)",
          backgroundSize: "24px 24px" // Matches your design's grid dot density
        }}
      />

      {/* 3. Interactive Component Layout (Positioned above background) */}
      <div 
        className="split-container"
        style={{ 
          display: "flex", 
          width: "100%", 
          maxWidth: "1200px", 
          alignItems: "center", 
          justifyContent: "space-between",
          gap: "60px",
          zIndex: 3 // Ensures inputs, selection text, and buttons stay above backgrounds
        }}
      >
        {/* Left Column: Core Infrastructure Copy */}
        <div 
          className="text-column scroll-animate"
          style={{ flex: "1", maxWidth: "500px", textAlign: "left", transition: "0.4s ease-in-out" }}
        >
          <div style={{ color: "#6366f1", fontSize: "12px", fontWeight: "bold", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>
            The Architecture Engine
          </div>
          <h2 style={{ color: "#ffffff", fontSize: "36px", fontWeight: "bold", lineHeight: "1.2", marginBottom: "20px" }}>
            Meet Majestik Core
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "16px", lineHeight: "1.7", marginBottom: "24px" }}>
            A proprietary, hybrid Local AI and cloud API domain-specific model architected precisely for entrepreneurs and business owners. 
          </p>
          <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6" }}>
            Stop burning resources renting generic cloud-agent models. Majestik Core combines localized security protocols with precision contextual memory buffers—delivering secure data execution right on your physical machine.
          </p>
        </div>

        {/* Right Column: Terminal Window Layer with Frosted Glassmorphism */}
        <div style={{ flex: "1.2", width: "100%", display: "flex", justifyContent: "center" }}>
          <div 
            className="terminal-window scroll-animate" 
            style={{ 
              width: "100%", 
              maxWidth: "600px", 
              background: "rgba(12, 15, 36, 0.85)", 
              backdropFilter: "blur(16px)", 
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid #1e264f", 
              borderRadius: "8px", 
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.6)", 
              fontFamily: "'Fira Code', 'Courier New', Courier, monospace", 
              overflow: "hidden",
              transition: "1.0s ease-in-out"
            }}
          >
            {/* Terminal Header Bar */}
            <div 
              className="terminal-header" 
              style={{ 
                background: "rgba(19, 25, 54, 0.9)", 
                padding: "12px 16px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "space-between", 
                borderBottom: "1px solid #1e264f" 
              }}
            >
              <div className="terminal-buttons" style={{ display: "flex", gap: "8px" }}>
                <span style={{ width: "12px", height: "12px", background: "#ff5f56", borderRadius: "50%", display: "inline-block" }}></span>
                <span style={{ width: "12px", height: "12px", background: "#ffbd2e", borderRadius: "50%", display: "inline-block" }}></span>
                <span style={{ width: "12px", height: "12px", background: "#27c93f", borderRadius: "50%", display: "inline-block" }}></span>
              </div>
              <div className="terminal-title" style={{ color: "#6373b3", fontSize: "13px", fontWeight: "bold", letterSpacing: "0.5px" }}>
                majestik-core-engine ~ bash
              </div>
              <div style={{ width: "52px" }}></div>
            </div>

            {/* Terminal Body */}
            <div 
              ref={terminalBodyRef}
              className="terminal-body" 
              style={{ 
                padding: "24px", 
                color: "#a5b4fc", 
                fontSize: "13px", 
                lineHeight: "1.6", 
                height: "280px", 
                overflowY: "auto",
                textAlign: "left" 
              }}
            >
              {visibleLogs.map((log, index) => {
                if (!log) return null;

                return (
                  <p 
                    key={index} 
                    style={{ 
                      color: log.color || "#a5b4fc", 
                      margin: "0 0 8px 0", 
                      fontWeight: log.fontWeight || 'normal' 
                    }}
                  >
                    {log.text}
                    {index === logs.length - 1 && showCursor && (
                      <span style={{ animation: "blink 1s infinite", marginLeft: "4px" }}>█</span>
                    )}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoreEngineSection;