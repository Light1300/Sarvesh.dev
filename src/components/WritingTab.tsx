import React from 'react';
import { ARTICLES } from '../data';

export default function WritingTab() {
  return (
    <div style={{ animation: 'fadeUp 0.4s ease', paddingTop: 4 }}>
      <div style={sectionH}>
        <span style={{ color: 'var(--accent)', fontWeight: 700 }}>#</span>{' '}
        Writing —{' '}
        <a href="https://unraveller.hashnode.dev" target="_blank" rel="noreferrer" style={{ color: 'var(--blue)', fontSize: 10, textTransform: 'none', letterSpacing: 0 }}>
          unraveller.hashnode.dev ↗
        </a>
      </div>

      {ARTICLES.map(a => (
        <a key={a.url} href={a.url} target="_blank" rel="noreferrer" style={articleItem}
          onMouseEnter={e => (e.currentTarget.querySelector('.atitle') as HTMLElement).style.color = 'var(--blue)'}
          onMouseLeave={e => (e.currentTarget.querySelector('.atitle') as HTMLElement).style.color = 'var(--text)'}
        >
          <span style={numStyle}>{a.num}</span>
          <div>
            <div className="atitle" style={titleStyle}>{a.title}</div>
            <div style={metaStyle}>{a.meta}</div>
          </div>
        </a>
      ))}

      <div style={{ marginTop: 20 }}>
        <a href="https://unraveller.hashnode.dev" target="_blank" rel="noreferrer" style={viewAllBtn}>
          View all 9 articles ↗
        </a>
      </div>
    </div>
  );
}

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

const articleItem: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 16,
  padding: '16px 0',
  borderBottom: '1px solid var(--border)',
  textDecoration: 'none',
  transition: 'all 0.15s',
  cursor: 'pointer',
};

const numStyle: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 11,
  color: 'var(--text-muted)',
  minWidth: 28,
  paddingTop: 2,
};

const titleStyle: React.CSSProperties = {
  fontSize: 13,
  color: 'var(--text)',
  fontWeight: 400,
  marginBottom: 4,
  transition: 'color 0.15s',
  lineHeight: 1.5,
};

const metaStyle: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 11,
  color: 'var(--text-muted)',
};

const viewAllBtn: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 11,
  color: 'var(--blue)',
  textDecoration: 'none',
  border: '1px solid var(--border)',
  padding: '6px 14px',
  borderRadius: 2,
  display: 'inline-block',
  transition: 'all 0.15s',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
};
