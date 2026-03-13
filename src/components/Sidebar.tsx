import React from 'react';
import { SKILL_GROUPS } from '../data';

const SOCIALS = [
  { icon: '⌥', label: 'github.com/Light1300', url: 'https://github.com/Light1300' },
  { icon: '∟', label: 'LinkedIn', url: 'https://linkedin.com/in/sarvesh-patil-559b3124b/' },
  { icon: '✕', label: '@SarveshPat21415', url: 'https://x.com/SarveshPat21415' },
  { icon: '✍', label: 'unraveller.hashnode.dev', url: 'https://unraveller.hashnode.dev' },
  { icon: '▶', label: 'YouTube', url: 'https://www.youtube.com/channel/UCskPQR_7HDAo_qjwZ_JMWUg' },
  { icon: '@', label: 'sarupatil0001@gmail.com', url: 'mailto:sarupatil0001@gmail.com' },
];

const PKG_STATS = [
  { label: 'version', val: '2026.03.06', color: undefined },
  { label: 'license', val: 'MIT', color: 'var(--green)' },
  { label: 'location', val: 'Bengaluru, KA', color: undefined },
  { label: 'relocation', val: 'Open to relocate', color: 'var(--yellow)' },
  { label: 'education', val: 'B.E. CS · 8.48 GPA', color: undefined },
  { label: 'open source', val: 'AsyncAPI HoF', color: 'var(--green)' },
];

export default function Sidebar() {
  return (
    <div style={{ position: 'sticky', top: 68 }}>

      {/* Availability */}
      <div style={availBlock}>
        <div>
          <span style={availDot} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
            Available
          </span>
        </div>
        <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 6, lineHeight: 1.5 }}>
          Open to backend / fullstack roles at early-stage startups. Remote · Bengaluru · Open to relocate.
        </p>
        <a href="mailto:sarupatil0001@gmail.com" style={hireBtn}>→ Hire Me</a>
      </div>

      {/* Package info */}
      <SbBlock title="package info">
        {PKG_STATS.map(r => (
          <div key={r.label} style={statRow}>
            <span style={statLabel}>{r.label}</span>
            <span style={{ ...statVal, color: r.color ?? 'var(--text)' }}>{r.val}</span>
          </div>
        ))}
      </SbBlock>

      {/* Links */}
      <SbBlock title="links">
        {SOCIALS.map(s => (
          <a key={s.url} href={s.url} target="_blank" rel="noreferrer" style={socialLink}>
            //@ts-ignore
            <span style={{ width: 16, textAlign: 'center', fontSize: 12 }}>{s.icon}</span>
            <span>{s.label}</span>
          </a>
        ))}
      </SbBlock>

      {/* Skills */}
      <SbBlock title="dependencies">
        {SKILL_GROUPS.map(group => (
          <div key={group.label} style={{ marginBottom: 14 }}>
            <div style={groupName}>{group.label}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {group.tags.map(tag => (
                <a
                  key={tag.name}
                  href={tag.url}
                  target="_blank"
                  rel="noreferrer"
                  title={`Docs: ${tag.name}`}
                  style={skillTag}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-hover)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                >
                  {tag.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </SbBlock>

    </div>
  );
}


function SbBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={sbBlock}>
      <div style={sbHeader}>{title}</div>
      <div style={{ padding: '10px 14px' }}>{children}</div>
    </div>
  );
}

const availBlock: React.CSSProperties = {
  border: '1px solid var(--green-border)',
  background: 'var(--green-bg)',
  borderRadius: 4,
  padding: 14,
  marginBottom: 16,
};

const availDot: React.CSSProperties = {
  display: 'inline-block',
  width: 8,
  height: 8,
  borderRadius: '50%',
  background: 'var(--green)',
  marginRight: 8,
  animation: 'pulse 2s infinite',
};

const hireBtn: React.CSSProperties = {
  display: 'block',
  width: '100%',
  marginTop: 10,
  padding: 10,
  background: 'var(--accent)',
  color: '#fff',
  border: 'none',
  borderRadius: 3,
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 12,
  textTransform: 'uppercase',
  letterSpacing: 1,
  cursor: 'pointer',
  textAlign: 'center',
  transition: 'background 0.15s',
};

const sbBlock: React.CSSProperties = {
  border: '1px solid var(--border)',
  borderRadius: 4,
  overflow: 'hidden',
  marginBottom: 14,
  background: 'var(--surface)',
};

const sbHeader: React.CSSProperties = {
  padding: '9px 14px',
  borderBottom: '1px solid var(--border)',
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 10,
  color: 'var(--text-muted)',
  textTransform: 'uppercase',
  letterSpacing: 1,
  background: 'var(--surface2)',
};

const statRow: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '5px 0',
  borderBottom: '1px solid var(--border)',
};

const statLabel: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 11,
  color: 'var(--text-muted)',
};

const statVal: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 11,
};

const socialLink: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  padding: '7px 0',
  borderBottom: '1px solid var(--border)',
  color: 'var(--text-muted)',
  fontSize: 12,
  fontFamily: "'JetBrains Mono', monospace",
  transition: 'color 0.15s',
  textDecoration: 'none',
};

const groupName: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 10,
  color: 'var(--text-muted)',
  textTransform: 'uppercase',
  letterSpacing: '0.8px',
  marginBottom: 6,
};

const skillTag: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 10,
  padding: '2px 7px',
  border: '1px solid var(--border)',
  borderRadius: 2,
  color: 'var(--text-muted)',
  background: 'var(--surface2)',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'border-color 0.15s',
};
