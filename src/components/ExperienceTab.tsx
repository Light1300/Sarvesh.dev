import React from 'react';
import { EXPERIENCE } from '../data';

export default function ExperienceTab() {
  return (
    <div style={{ animation: 'fadeUp 0.4s ease', paddingTop: 4 }}>
      <div style={sectionH}>
        <span style={{ color: 'var(--accent)', fontWeight: 700 }}>#</span> Experience
      </div>
      {EXPERIENCE.map(exp => {
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
          <div key={exp.company} style={card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
              <span style={companyStyle}>{exp.company}</span>
              <span style={badgeStyle}>
                {exp.status === 'live' ? '● Live' : exp.status === 'oss' ? 'Open Source' : 'Internship'}
              </span>
            </div>
            <div style={roleStyle}>{exp.role}</div>
            <div style={periodStyle}>{exp.period}</div>
            <ul style={{ listStyle: 'none' }}>
              {exp.bullets.map((b, i) => (
                <li key={i} style={bulletItem}>
                  <span style={{ color: 'var(--accent)', fontSize: 11, marginRight: 6, flexShrink: 0 }}>→</span>
                  {b}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
              {exp.stack.map(s => (
                <span key={s} style={chip}>{s}</span>
              ))}
            </div>
          </div>
        );
      })}
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
  padding: 20,
  marginBottom: 14,
  background: 'var(--surface)',
};

const companyStyle: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 13,
  fontWeight: 600,
  color: 'var(--text)',
};

const roleStyle: React.CSSProperties = {
  fontSize: 13,
  color: 'var(--text-dim)',
  marginBottom: 4,
};

const periodStyle: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 11,
  color: 'var(--text-muted)',
  marginBottom: 12,
};

const bulletItem: React.CSSProperties = {
  display: 'flex',
  fontSize: 13,
  color: 'var(--text-muted)',
  padding: '3px 0',
  lineHeight: 1.6,
};

const chip: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 10,
  padding: '2px 8px',
  border: '1px solid var(--border)',
  borderRadius: 2,
  color: 'var(--text-muted)',
  background: 'var(--surface2)',
};
