import React from 'react';
import { ARTICLES } from '../data';

export default function WritingTab() {
  return (
    <div style={{ animation: 'fadeUp 0.5s cubic-bezier(0.22, 1, 0.36, 1)', paddingTop: 4 }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-muted)', marginBottom: 20, paddingBottom: 10, borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600 }}>
        <span style={{ color: 'var(--accent)', fontSize: 14, lineHeight: 1 }}>#</span>
        Writing
        <a href="https://unraveller.hashnode.dev" target="_blank" rel="noreferrer"
          style={{ marginLeft: 'auto', color: 'var(--blue)', fontSize: 10, textTransform: 'none', letterSpacing: 0, fontWeight: 400, opacity: 0.8 }}>
          unraveller.hashnode.dev ↗
        </a>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {ARTICLES.map((a, i) => (
          <ArticleRow key={a.url} a={a} index={i} />
        ))}
      </div>

      <div style={{ marginTop: 24 }}>
        <a
          href="https://unraveller.hashnode.dev"
          target="_blank"
          rel="noreferrer"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            color: 'var(--blue)',
            background: 'var(--blue-dim)',
            border: '1px solid rgba(96, 165, 250, 0.2)',
            padding: '8px 16px',
            borderRadius: 5,
            display: 'inline-block',
            textTransform: 'uppercase',
            letterSpacing: '0.8px',
            fontWeight: 600,
          }}
        >
          View all 9 articles ↗
        </a>
      </div>
    </div>
  );
}

function ArticleRow({ a, index }: { a: any; index: number }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <a
      href={a.url}
      target="_blank"
      rel="noreferrer"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 18,
        padding: '16px 18px',
        borderRadius: 7,
        textDecoration: 'none',
        transition: 'all 0.18s ease',
        background: hovered ? 'var(--surface2)' : 'transparent',
        border: `1px solid ${hovered ? 'var(--border)' : 'transparent'}`,
        marginBottom: 2,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
        color: 'var(--text-muted)',
        minWidth: 28,
        paddingTop: 2,
        opacity: 0.6,
      }}>
        {a.num}
      </span>
      <div style={{ flex: 1 }}>
        <div style={{
          fontSize: 13,
          color: hovered ? 'var(--blue)' : 'var(--text)',
          fontWeight: 500,
          marginBottom: 5,
          transition: 'color 0.15s',
          lineHeight: 1.5,
        }}>
          {a.title}
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.2px' }}>
          {a.meta}
        </div>
      </div>
      <span style={{ color: 'var(--text-muted)', fontSize: 12, opacity: hovered ? 1 : 0, transition: 'opacity 0.15s', paddingTop: 2 }}>↗</span>
    </a>
  );
}
