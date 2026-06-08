import React from 'react';

export default function Terminal() {
  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 8,
      overflow: 'hidden',
      marginBottom: 32,
      boxShadow: 'var(--card-shadow)',
    }}>
      {/* macOS-style bar */}
      <div style={{
        padding: '10px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        borderBottom: '1px solid var(--border)',
        background: 'var(--surface2)',
      }}>
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57', display: 'inline-block', boxShadow: '0 0 4px rgba(255,95,87,0.4)' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block', boxShadow: '0 0 4px rgba(255,189,46,0.4)' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840', display: 'inline-block', boxShadow: '0 0 4px rgba(40,200,64,0.4)' }} />
        <span style={{ marginLeft: 10, fontSize: 11, color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace", opacity: 0.7 }}>
          sarvesh@backend ~ zsh
        </span>
      </div>

      <div style={{ padding: '18px 20px', lineHeight: 1, fontFamily: "'JetBrains Mono', monospace" }}>
        <Line cmd="cat tldr.txt" />
        <Out>→ 2yrs shipping backend systems in TypeScript + Node.js</Out>
        <Out>→ MongoDB aggregation pipelines, Redis pub/sub, gRPC services</Out>
        <Out>→ Open-source contributor — AsyncAPI Hall of Fame (2024)</Out>
        <Out>→ Built real-time orderbook exchange, collab whiteboard, Redis clone</Out>
        <Out>→ B.E. CS, KLS GIT — CGPA 8.48/10</Out>
        <Spacer />
        <Line cmd="cat status.txt" />
        <Out green>✓ Available for backend / fullstack roles at early-stage startups</Out>
        <Spacer />
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 4 }}>
          <span style={{ fontSize: 12, color: 'var(--green)', fontWeight: 500 }}>sarvesh@prod:~$</span>
          <span style={{
            display: 'inline-block',
            width: 7,
            height: 14,
            background: 'var(--green)',
            borderRadius: 1,
            opacity: 0.9,
            animation: 'blink 1.1s step-end infinite',
          }} />
        </div>
      </div>
    </div>
  );
}

function Line({ cmd }: { cmd: string }) {
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 6 }}>
      <span style={{ fontSize: 12, color: 'var(--green)', fontWeight: 500 }}>sarvesh@prod:~$</span>
      <span style={{ fontSize: 12, color: 'var(--text)', letterSpacing: '0.2px' }}>{cmd}</span>
    </div>
  );
}

function Out({ children, green }: { children: React.ReactNode; green?: boolean }) {
  return (
    <div style={{
      fontSize: 12,
      color: green ? 'var(--green)' : 'var(--text-muted)',
      paddingLeft: 20,
      lineHeight: 1.9,
      letterSpacing: '0.1px',
    }}>
      {children}
    </div>
  );
}

function Spacer() {
  return <div style={{ height: 10 }} />;
}
