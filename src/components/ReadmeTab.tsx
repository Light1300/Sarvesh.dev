import React from 'react';
import Terminal from './Terminal';
import { EXPERIENCE } from '../data';
import { ExpItem } from '../types';

export default function ReadmeTab() {
  return (
    <div style={{ animation: 'fadeUp 0.4s ease' }}>
      {/* About */}
      <Section title="About">
        <p style={para}>
          I'm <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Sarvesh Patil</strong> — a backend engineer
          who builds systems that don't fall over. Currently architecting the V2 backend at{' '}
          <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Flickit</strong>, a sports analytics platform,
          where I redesigned the MongoDB schema, migrated to serverless Node.js APIs, and built sub-10ms real-time
          leaderboards under production load.
        </p>
        <p style={para}>
          If you're a YC founder looking for someone who can go from{' '}
          <strong style={{ color: 'var(--text)', fontWeight: 500 }}>zero to scalable</strong> — own the backend, ship
          fast, and make architectural decisions that age well — that's exactly what I do. I've shipped production
          systems handling real users, contributed to globally-adopted open-source (
          <strong style={{ color: 'var(--text)', fontWeight: 500 }}>AsyncAPI Hall of Fame</strong>), and built
          low-level infra like a Redis-compatible in-memory DB server in C++17 to understand the foundations.
        </p>
        <p style={para}>
          I work in the stack that moves fastest at the start:{' '}
          {['TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'Redis', 'WebSockets', 'gRPC', 'Docker'].map(s => (
            <span key={s} style={pill}>{s}</span>
          ))}
        </p>
        <p style={para}>
          I write about systems internals at{' '}
          <a href="https://unraveller.hashnode.dev" target="_blank" rel="noreferrer" style={{ color: 'var(--blue)' }}>
            unraveller.hashnode.dev
          </a>
          . Bengaluru, KA — open to remote and relocation.
        </p>
      </Section>

      <Terminal />

      <Section title="Experience">
        {EXPERIENCE.map(exp => (
          <ExpCard key={exp.company} exp={exp} />
        ))}
      </Section>
    </div>
  );
}

function ExpCard({ exp }: { exp: ExpItem }) {
  const badgeStyle: React.CSSProperties = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 10,
    padding: '2px 8px',
    borderRadius: 2,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    ...(exp.status === 'live'
      ? { background: 'var(--green-bg)', color: 'var(--green)', border: '1px solid var(--green-border)' }
      : exp.status === 'oss'
      ? { background: 'var(--purple-bg)', color: 'var(--purple)', border: '1px solid var(--purple-border)' }
      : { background: 'var(--surface2)', color: 'var(--text-muted)', border: '1px solid var(--border)' }),
  };

  return (
    <div style={expCard}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>
          {exp.company}
        </span>
        <span style={badgeStyle}>{exp.status === 'live' ? '● Live' : exp.status === 'oss' ? 'Open Source' : 'Internship'}</span>
      </div>
      <div style={{ fontSize: 13, color: 'var(--text-dim)', marginBottom: 4 }}>{exp.role}</div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--text-muted)', marginBottom: 12 }}>
        {exp.period}
      </div>
      <ul style={{ listStyle: 'none' }}>
        {exp.bullets.map((b, i) => (
          <li key={i} style={bulletItem}>
            <span style={{ color: 'var(--accent)', fontSize: 11, marginRight: 6, flexShrink: 0 }}>→</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
        {exp.stack.map(s => (
          <span key={s} style={stackChip}>{s}</span>
        ))}
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <div style={sectionH}>
        <span style={{ color: 'var(--accent)', fontWeight: 700 }}>#</span> {title}
      </div>
      {children}
    </div>
  );
}

/* Styles */
const para: React.CSSProperties = {
  fontSize: 14,
  color: 'var(--text-dim)',
  lineHeight: 1.8,
  marginBottom: 12,
  fontWeight: 300,
};

const pill: React.CSSProperties = {
  display: 'inline-block',
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 11,
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  padding: '2px 8px',
  borderRadius: 2,
  color: 'var(--blue)',
  margin: '2px 2px',
};

const sectionH: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 11,
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  color: 'var(--text-muted)',
  marginBottom: 16,
  paddingBottom: 8,
  borderBottom: '1px solid var(--border)',
  display: 'flex',
  alignItems: 'center',
  gap: 6,
};

const expCard: React.CSSProperties = {
  border: '1px solid var(--border)',
  borderRadius: 4,
  padding: 20,
  marginBottom: 14,
  background: 'var(--surface)',
  transition: 'border-color 0.15s',
};

const bulletItem: React.CSSProperties = {
  display: 'flex',
  fontSize: 13,
  color: 'var(--text-muted)',
  padding: '3px 0',
  lineHeight: 1.6,
  gap: 4,
};

const stackChip: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 10,
  padding: '2px 8px',
  border: '1px solid var(--border)',
  borderRadius: 2,
  color: 'var(--text-muted)',
  background: 'var(--surface2)',
};
