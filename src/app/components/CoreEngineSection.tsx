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
  const [isIntersected, setIsIntersected] = useState(false); // Tracks scroll entry state
  const sectionRef = useRef<HTMLDivElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  
  // NEW: Ref to target the background video directly
  const videoRef = useRef<HTMLVideoElement>(null);

  const logs: LogLine[] = [
    { text: "user@majestik-node1:~$ ./launch_core.py", color: "#6366f1", delay: 300 },
    { text: "[INFO] Initializing Majestik Core Engine v1.0...", color: "#a5b4fc", delay: 800 },
    { text: "[SYSTEM] Booting secure local machine execution layers...", color: "#a5b4fc", delay: 600 },
    { text: "[DATABASE] Connecting to localized Vector Instance...", color: "#38bdf8", delay: 700 },
    { text: "[DATABASE] pgvector extension found. Mapping high-dimensional embeddings...", color: "#34d399", delay: 500 },
    { text: "[CACHE] Initializing context-window memory cache...", color: "#f43f5e", delay: 600 },
    { text: "[CACHE] Volatile state memory pipeline: ACTIVE (Latency: 0.8ms)", color: "#34d399", delay: 400 },
    { text: "[ENGINE] Fetching secure localized model graph fragments...", color: "#a5b4fc", delay: 800 },
    { text: "[ENGINE] Custom contextual guardrails applied successfully.", color: "#34d399", delay: 400 },
    { text: "[SUCCESS] Majestik Core RAG Engine is fully operational.", color: "#c084fc", fontWeight: "bold", delay: 500 },
    { text: "user@majestik-node1:~$ READY_FOR_RAPID_EXECUTION=true", color: "#6366f1", delay: 400 }
  ];

  // Intersection Observer to handle on-scroll trigger & video playback control
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersected(true);
          // Play only when visible to save CPU cycles
          videoRef.current?.play().catch(() => {});
        } else {
          // Pause immediately when scrolled away
          videoRef.current?.pause();
        }
      },
      { threshold: 0.15 } // Trigger when 15% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Terminal Line Typing simulation
  useEffect(() => {
    if (!isIntersected) return; // Wait to type logs until scrolled into view

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
  }, [isIntersected]);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [visibleLogs]);

  return (
    <section 
      ref={sectionRef}
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

      {/* Optimized Background Video Frame */}
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="none" // Don't download/decode until needed
        aria-label="Decorative background network visual"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
          opacity: 0.18,
          // CSS Hardware Acceleration Hacks:
          transform: "translateZ(0)", 
          willChange: "transform",
          backfaceVisibility: "hidden"
        }}
      >
        {/* WebM is vastly more hardware-efficient. Use it as primary if available! */}
        <source src="/videos/bare-metal-hardware.mp4" type="video/mp4" />
        <track kind="captions" src="data:text/vtt," label="No audio captions" default />
      </video>

      {/* Micro Dot Matrix Overlay Pattern Layer */}
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
          backgroundImage: "radial-gradient(rgba(30, 38, 79, 0.4) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* Interactive Component Layout */}
      <div 
        className="split-container"
        style={{ 
          display: "flex", 
          width: "100%", 
          maxWidth: "1200px", 
          alignItems: "center", 
          justifyContent: "space-between",
          gap: "60px",
          zIndex: 3
        }}
      >
        {/* Left Column: Core Infrastructure Copy */}
        <div 
          className="text-column"
          style={{ 
            flex: "1", 
            maxWidth: "500px", 
            textAlign: "left", 
            opacity: isIntersected ? 1 : 0,
            transform: isIntersected ? "translateX(0)" : "translateX(-120px)",
            transition: "opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1), transform 4.5s cubic-bezier(0.16, 1, 0.3, 1)"
          }}
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

        {/* Right Column: Linux Terminal Window */}
        <div 
          style={{ 
            flex: "1.2", 
            width: "100%", 
            display: "flex", 
            justifyContent: "center",
            opacity: isIntersected ? 1 : 0,
            transform: isIntersected ? "translateX(0)" : "translateX(120px)",
            transition: "opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1), transform 4.5s cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        >
          <div 
            className="terminal-window" 
            style={{ 
              width: "100%", 
              maxWidth: "600px", 
              background: "rgba(12, 15, 36, 0.85)", 
              backdropFilter: "blur(16px)", 
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid #1e264f", 
              borderRadius: "6px", 
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.6)", 
              fontFamily: "'Fira Code', 'Courier New', Courier, monospace", 
              overflow: "hidden"
            }}
          >
            {/* Linux Terminal Header Bar */}
            <div 
              className="terminal-header" 
              style={{ 
                background: "rgba(21, 26, 54, 0.95)", 
                padding: "10px 16px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "space-between", 
                borderBottom: "1px solid #1e264f",
                userSelect: "none"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6373b3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 17 10 11 4 5"></polyline>
                  <line x1="12" y1="19" x2="20" y2="19"></line>
                </svg>
                <div className="terminal-title" style={{ color: "#a5b4fc", fontSize: "13px", fontWeight: 500, letterSpacing: "0.3px" }}>
                  user@majestik-node1: ~
                </div>
              </div>

              <div className="terminal-controls" style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <span style={{ display: "block", width: "10px", height: "1px", background: "#6373b3" }}></span>
                <span style={{ display: "block", width: "9px", height: "9px", border: "1px solid #6373b3", borderRadius: "1px" }}></span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6373b3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
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