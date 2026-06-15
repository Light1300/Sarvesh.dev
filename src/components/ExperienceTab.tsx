import React, { useState } from 'react';
import { EXPERIENCE } from '../data';

export default function ExperienceTab() {
  return (
    <div style={{ animation: 'fadeUp 0.5s cubic-bezier(0.22, 1, 0.36, 1)', paddingTop: 4 }}>
      <SectionH>Experience</SectionH>
      {EXPERIENCE.map((exp, i) => {
        const badge = exp.status === 'live'
          ? { label: '● Live', bg: 'var(--green-bg)', color: 'var(--green)', border: 'var(--green-border)' }
          : exp.status === 'oss'
          ? { label: 'Open Source', bg: 'var(--purple-bg)', color: 'var(--purple)', border: 'var(--purple-border)' }
          : { label: 'Internship', bg: 'var(--surface3)', color: 'var(--text-muted)', border: 'var(--border)' };

        return <ExpCard key={exp.company} exp={exp} badge={badge} delay={i * 70} />;
      })}
    </div>
  );
}

function ExpCard({ exp, badge, delay }: any) {
  const [hovered, setHovered] = useState(false);
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
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.3px' }}>
          {exp.company}
        </span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, padding: '3px 9px', borderRadius: 4, textTransform: 'uppercase', letterSpacing: '0.6px', fontWeight: 600, background: badge.bg, color: badge.color, border: `1px solid ${badge.border}` }}>
          {badge.label}
        </span>
      </div>
      <div style={{ fontSize: 13, color: 'var(--text-dim)', marginBottom: 3 }}>{exp.role}</div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: 'var(--text-muted)', marginBottom: 16, letterSpacing: '0.3px' }}>
        {exp.period}
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {exp.bullets.map((b: string, i: number) => (
          <li key={i} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>
            <span style={{ color: 'var(--accent)', fontSize: 10, flexShrink: 0, marginTop: 4, opacity: 0.8 }}>▸</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 16, paddingTop: 14, borderTop: '1px solid var(--border)' }}>
        {exp.stack.map((s: string) => (
          <span key={s} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, padding: '3px 9px', border: '1px solid var(--border)', borderRadius: 4, color: 'var(--text-muted)', background: 'var(--surface3)', letterSpacing: '0.2px' }}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionH({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-muted)', marginBottom: 20, paddingBottom: 10, borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600 }}>
      <span style={{ color: 'var(--accent)', fontSize: 14, lineHeight: 1 }}>#</span>
      {children}
    </div>
  );
}
