import React from 'react';

export default function Terminal() {
  return (
    <div style={wrap}>
      <div style={bar}>
        <span style={{ ...dot, background: '#ff5f57' }} />
        <span style={{ ...dot, background: '#ffbd2e' }} />
        <span style={{ ...dot, background: '#28c840' }} />
        <span style={title}>sarvesh@backend ~ zsh</span>
      </div>
      <div style={body}>
        <Line ps1="sarvesh@prod:~$" cmd="cat tldr.txt" />
        <Out>→ 2yrs shipping backend systems in TypeScript + Node.js</Out>
        <Out>→ MongoDB aggregation pipelines, Redis pub/sub, gRPC services</Out>
        <Out>→ Open-source contributor — AsyncAPI Hall of Fame (2024)</Out>
        <Out>→ Built real-time orderbook exchange, collab whiteboard, Redis clone</Out>
        <Out>→ B.E. CS, KLS GIT — CGPA 8.48/10</Out>
        <br />
        <Line ps1="sarvesh@prod:~$" cmd="cat status.txt" />
        <Out green>✓ Available for backend / fullstack roles at early-stage startups</Out>
        <br />
        <div style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
          <span style={ps1Style}>sarvesh@prod:~$</span>
          <span style={cursor} />
        </div>
      </div>
    </div>
  );
}

function Line({ ps1, cmd }: { ps1: string; cmd: string }) {
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
      <span style={ps1Style}>{ps1}</span>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--text)' }}>{cmd}</span>
    </div>
  );
}

function Out({ children, green }: { children: React.ReactNode; green?: boolean }) {
  return (
    <span style={{
      display: 'block',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 12,
      color: green ? 'var(--green)' : 'var(--text-muted)',
      paddingLeft: 16,
      lineHeight: 1.7,
    }}>
      {children}
    </span>
  );
}

/* Styles */
const wrap: React.CSSProperties = {
  background: 'var(--surface2)',
  border: '1px solid var(--border)',
  borderRadius: 4,
  overflow: 'hidden',
  marginBottom: 24,
  fontFamily: "'JetBrains Mono', monospace",
};

const bar: React.CSSProperties = {
  padding: '8px 12px',
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  borderBottom: '1px solid var(--border)',
  background: 'var(--surface)',
};

const dot: React.CSSProperties = {
  width: 10,
  height: 10,
  borderRadius: '50%',
  display: 'inline-block',
};

const title: React.CSSProperties = {
  marginLeft: 8,
  fontSize: 11,
  color: 'var(--text-muted)',
};

const body: React.CSSProperties = {
  padding: '14px 16px',
  lineHeight: 2,
};

const ps1Style: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 12,
  color: 'var(--green)',
};

const cursor: React.CSSProperties = {
  display: 'inline-block',
  width: 8,
  height: 13,
  background: 'var(--green)',
  verticalAlign: 'text-bottom',
  animation: 'blink 1.1s step-end infinite',
};
