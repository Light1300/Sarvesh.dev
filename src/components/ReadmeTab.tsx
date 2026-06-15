import React from 'react';
import Terminal from './Terminal';
import { EXPERIENCE } from '../data';
import { ExpItem } from '../types';

export default function ReadmeTab() {
  return (
    <div style={{ animation: 'fadeUp 0.5s cubic-bezier(0.22, 1, 0.36, 1)' }}>
      <Section title="About">
        <p style={para}>
          I'm <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Sarvesh Patil</strong> — a backend engineer
          who builds systems that don't fall over. Currently architecting the V2 backend at{' '}
          <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Flickit</strong>, a sports analytics platform,
          where I redesigned the MongoDB schema, migrated to serverless Node.js APIs, and built sub-10ms real-time
          leaderboards under production load.
        </p>
        <p style={para}>
          If you're a YC founder looking for someone who can go from{' '}
          <strong style={{ color: 'var(--text)', fontWeight: 600 }}>zero to scalable</strong> — own the backend, ship
          fast, and make architectural decisions that age well — that's exactly what I do. I've shipped production
          systems handling real users, contributed to globally-adopted open-source (
          <strong style={{ color: 'var(--text)', fontWeight: 600 }}>AsyncAPI Hall of Fame</strong>), and built
          low-level infra like a Redis-compatible in-memory DB server in C++17 to understand the foundations.
        </p>
        <p style={para}>
          I work in the stack that moves fastest at the start:{' '}
          <span style={{ display: 'inline-flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
            {['TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'Redis', 'WebSockets', 'gRPC', 'Docker'].map(s => (
              <span key={s} style={pill}>{s}</span>
            ))}
          </span>
        </p>
        <p style={{ ...para, marginTop: 12 }}>
          I write about systems internals at{' '}
          <a href="https://unraveller.hashnode.dev" target="_blank" rel="noreferrer"
            style={{ color: 'var(--blue)', borderBottom: '1px solid var(--blue-dim)', paddingBottom: 1 }}>
            unraveller.hashnode.dev
          </a>. Bengaluru, KA — open to remote and relocation.
        </p>
      </Section>

      <Terminal />

      <Section title="Experience">
        {EXPERIENCE.map((exp, i) => (
          <ExpCard key={exp.company} exp={exp} delay={i * 60} />
        ))}
      </Section>
    </div>
  );
}

function ExpCard({ exp, delay }: { exp: ExpItem; delay: number }) {
  const [hovered, setHovered] = React.useState(false);

  const badgeStyle: React.CSSProperties = exp.status === 'live'
    ? { background: 'var(--green-bg)', color: 'var(--green)', border: '1px solid var(--green-border)' }
    : exp.status === 'oss'
    ? { background: 'var(--purple-bg)', color: 'var(--purple)', border: '1px solid var(--purple-border)' }
    : { background: 'var(--surface3)', color: 'var(--text-muted)', border: '1px solid var(--border)' };

  return (
    <div
      style={{
        border: `1px solid ${hovered ? 'var(--border-hover)' : 'var(--border)'}`,
        borderRadius: 8,
        padding: '22px 24px',
        marginBottom: 12,
        background: hovered ? 'var(--surface2)' : 'var(--surface)',
        transition: 'all 0.2s ease',
        boxShadow: hovered ? 'var(--card-shadow-hover)' : 'var(--card-shadow)',
        animationDelay: `${delay}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.3px' }}>
          {exp.company}
        </span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, padding: '3px 9px', borderRadius: 4, textTransform: 'uppercase', letterSpacing: '0.6px', fontWeight: 600, ...badgeStyle }}>
          {exp.status === 'live' ? '● Live' : exp.status === 'oss' ? 'Open Source' : 'Internship'}
        </span>
      </div>

      <div style={{ fontSize: 13, color: 'var(--text-dim)', marginBottom: 3, fontWeight: 400 }}>{exp.role}</div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: 'var(--text-muted)', marginBottom: 16, letterSpacing: '0.3px' }}>
        {exp.period}
      </div>

      {/* Bullets */}
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {exp.bullets.map((b, i) => (
          <li key={i} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>
            <span style={{ color: 'var(--accent)', fontSize: 10, flexShrink: 0, marginTop: 4, opacity: 0.8 }}>▸</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* Stack chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 16, paddingTop: 14, borderTop: '1px solid var(--border)' }}>
        {exp.stack.map(s => (
          <span key={s} style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            padding: '3px 9px',
            border: '1px solid var(--border)',
            borderRadius: 4,
            color: 'var(--text-muted)',
            background: 'var(--surface3)',
            letterSpacing: '0.2px',
          }}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10,
        textTransform: 'uppercase',
        letterSpacing: '2px',
        color: 'var(--text-muted)',
        marginBottom: 20,
        paddingBottom: 10,
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontWeight: 600,
      }}>
        <span style={{ color: 'var(--accent)', fontSize: 14, lineHeight: 1 }}>#</span>
        {title}
      </div>
      {children}
    </div>
  );
}

const para: React.CSSProperties = {
  fontSize: 14,
  color: 'var(--text-dim)',
  lineHeight: 1.85,
  marginBottom: 14,
  fontWeight: 300,
};

const pill: React.CSSProperties = {
  display: 'inline-block',
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 11,
  background: 'var(--blue-dim)',
  border: '1px solid rgba(96, 165, 250, 0.2)',
  padding: '3px 10px',
  borderRadius: 4,
  color: 'var(--blue)',
  fontWeight: 500,
  letterSpacing: '0.2px',
};
