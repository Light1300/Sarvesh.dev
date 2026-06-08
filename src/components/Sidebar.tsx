import React from 'react';
import { SKILL_GROUPS } from '../data';

const SOCIALS = [
  { icon: '⌥', label: 'github.com/Light1300', url: 'https://github.com/Light1300' },
  { icon: '∟', label: 'LinkedIn', url: 'https://linkedin.com/in/sarvesh-patil-559b3124b/' },
  { icon: '✕', label: '@Sarvesh_Patil01', url: 'https://x.com/Sarvesh_Patil01' },
  { icon: '✍', label: 'unraveller.hashnode.dev', url: 'https://unraveller.hashnode.dev' },
  { icon: '▶', label: 'YouTube', url: 'https://www.youtube.com/channel/UCskPQR_7HDAo_qjwZ_JMWUg' },
  { icon: '@', label: 'sarupatil0001@gmail.com', url: 'mailto:sarupatil0001@gmail.com' },
];

const PKG_STATS = [
  { label: 'version', val: '2026.03.06', color: 'var(--text-dim)' },
  { label: 'license', val: 'MIT', color: 'var(--green)' },
  { label: 'location', val: 'Bengaluru, KA', color: 'var(--text-dim)' },
  { label: 'relocation', val: 'Open to relocate', color: 'var(--yellow)' },
  { label: 'education', val: 'B.E. CS · 8.48 GPA', color: 'var(--text-dim)' },
  { label: 'open source', val: 'AsyncAPI HoF', color: 'var(--green)' },
];

export default function Sidebar() {
  return (
    <div style={{ position: 'sticky', top: 72 }}>

      {/* Availability card — most prominent */}
      <div style={availBlock}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <span style={availDot} />
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            color: 'var(--green)',
            textTransform: 'uppercase',
            letterSpacing: '1.2px',
            fontWeight: 600,
          }}>
            Available
          </span>
        </div>
        <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.6 }}>
          Open to backend / fullstack roles at early-stage startups.
          <br />
          <span style={{ color: 'var(--text-dim)' }}>Remote · Bengaluru · Open to relocate.</span>
        </p>
        <a
          href="mailto:sarupatil0001@gmail.com"
          style={hireBtn}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#c02d2c'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--accent)'; }}
        >
          → Open to Connect
        </a>
      </div>

      {/* Package info */}
      <SbBlock title="package info">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {PKG_STATS.map((r, i) => (
            <div key={r.label} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '7px 0',
              borderBottom: i < PKG_STATS.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {r.label}
              </span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: r.color, fontWeight: 500 }}>
                {r.val}
              </span>
            </div>
          ))}
        </div>
      </SbBlock>

      {/* Links */}
      <SbBlock title="links">
        {SOCIALS.map((s, i) => (
          <a
            key={s.url}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '8px 0',
              borderBottom: i < SOCIALS.length - 1 ? '1px solid var(--border)' : 'none',
              color: 'var(--text-muted)',
              fontSize: 12,
              fontFamily: "'JetBrains Mono', monospace",
              transition: 'color 0.15s',
              textDecoration: 'none',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}
          >
            <span style={{ width: 18, textAlign: 'center', fontSize: 12, opacity: 0.7 }}>{s.icon}</span>
            <span>{s.label}</span>
          </a>
        ))}
      </SbBlock>

      {/* Skills / Dependencies */}
      <SbBlock title="dependencies">
        {SKILL_GROUPS.map(group => (
          <div key={group.label} style={{ marginBottom: 16 }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9,
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
              marginBottom: 7,
              fontWeight: 600,
            }}>
              {group.label}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              {group.tags.map(tag => (
                <a
                  key={tag.name}
                  href={tag.url}
                  target="_blank"
                  rel="noreferrer"
                  title={`Open ${tag.name} docs`}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    padding: '3px 9px',
                    border: '1px solid var(--border)',
                    borderRadius: 4,
                    color: 'var(--text-muted)',
                    background: 'var(--surface2)',
                    textDecoration: 'none',
                    transition: 'all 0.15s',
                    letterSpacing: '0.2px',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = 'var(--blue)';
                    el.style.color = 'var(--blue)';
                    el.style.background = 'var(--blue-dim)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = 'var(--border)';
                    el.style.color = 'var(--text-muted)';
                    el.style.background = 'var(--surface2)';
                  }}
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
    <div style={{
      border: '1px solid var(--border)',
      borderRadius: 6,
      overflow: 'hidden',
      marginBottom: 12,
      background: 'var(--surface)',
      boxShadow: 'var(--card-shadow)',
    }}>
      <div style={{
        padding: '9px 14px',
        borderBottom: '1px solid var(--border)',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 9,
        color: 'var(--text-muted)',
        textTransform: 'uppercase',
        letterSpacing: '1.2px',
        background: 'var(--surface2)',
        fontWeight: 600,
      }}>
        {title}
      </div>
      <div style={{ padding: '10px 14px' }}>{children}</div>
    </div>
  );
}

const availBlock: React.CSSProperties = {
  border: '1px solid var(--green-border)',
  background: 'var(--green-bg)',
  borderRadius: 6,
  padding: '16px 14px',
  marginBottom: 12,
  boxShadow: '0 0 0 1px var(--green-border), 0 4px 12px rgba(74, 222, 128, 0.05)',
};

const availDot: React.CSSProperties = {
  display: 'inline-block',
  width: 8,
  height: 8,
  borderRadius: '50%',
  background: 'var(--green)',
  flexShrink: 0,
  animation: 'pulse 2.5s infinite',
};

const hireBtn: React.CSSProperties = {
  display: 'block',
  width: '100%',
  marginTop: 12,
  padding: '10px 0',
  background: 'var(--accent)',
  color: '#fff',
  border: 'none',
  borderRadius: 5,
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 11,
  textTransform: 'uppercase',
  letterSpacing: '1.2px',
  cursor: 'pointer',
  textAlign: 'center',
  transition: 'background 0.15s',
  fontWeight: 600,
};
