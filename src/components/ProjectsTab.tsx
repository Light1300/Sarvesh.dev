import React from 'react';
import { PROJECTS } from '../data';

export default function ProjectsTab() {
  return (
    <div style={{ animation: 'fadeUp 0.4s ease', paddingTop: 4 }}>
      <div style={sectionH}>
        <span style={{ color: 'var(--accent)', fontWeight: 700 }}>#</span> Projects
      </div>
      {PROJECTS.map(p => (
        <div key={p.name} style={card}>
          <div style={cardHeader}>
            <span style={projName}>{p.name}</span>
            <span style={langBadge}>{p.lang}</span>
          </div>
          <div style={cardBody}>
            <p style={desc}>{p.desc}</p>
            <ul style={{ listStyle: 'none', marginBottom: 14 }}>
              {p.bullets.map((b, i) => (
                <li key={i} style={bullet}>
                  <span style={{ color: 'var(--green)', marginRight: 6, flexShrink: 0 }}>$</span>
                  {b}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {p.links.map(l => (
                <a key={l.url} href={l.url} target="_blank" rel="noreferrer" style={link}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
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

const card: React.CSSProperties = {
  border: '1px solid var(--border)',
  borderRadius: 4,
  overflow: 'hidden',
  marginBottom: 14,
  background: 'var(--surface)',
};

const cardHeader: React.CSSProperties = {
  padding: '14px 20px 12px',
  borderBottom: '1px solid var(--border)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: 8,
  background: 'var(--surface2)',
};

const projName: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 13,
  fontWeight: 600,
  color: 'var(--text)',
};

const langBadge: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 10,
  color: 'var(--purple)',
  border: '1px solid var(--purple-border)',
  background: 'var(--purple-bg)',
  padding: '2px 8px',
  borderRadius: 2,
  letterSpacing: '0.3px',
};

const cardBody: React.CSSProperties = { padding: '16px 20px' };

const desc: React.CSSProperties = {
  fontSize: 13,
  color: 'var(--text-dim)',
  lineHeight: 1.7,
  marginBottom: 12,
  fontWeight: 300,
};

const bullet: React.CSSProperties = {
  display: 'flex',
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 11,
  color: 'var(--text-muted)',
  padding: '3px 0',
  lineHeight: 1.6,
};

const link: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 11,
  color: 'var(--blue)',
  textDecoration: 'none',
  border: '1px solid var(--border)',
  padding: '4px 10px',
  borderRadius: 2,
  transition: 'all 0.15s',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
};
