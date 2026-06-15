import React, { useState } from 'react';
import { PROJECTS } from '../data';

export default function ProjectsTab() {
  return (
    <div style={{ animation: 'fadeUp 0.5s cubic-bezier(0.22, 1, 0.36, 1)', paddingTop: 4 }}>
      <SectionH>Projects</SectionH>
      {PROJECTS.map((p, i) => (
        <ProjectCard key={p.name} p={p} delay={i * 60} />
      ))}
    </div>
  );
}

function ProjectCard({ p, delay }: { p: any; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        border: `1px solid ${hovered ? 'var(--border-hover)' : 'var(--border)'}`,
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 14,
        background: hovered ? 'var(--surface2)' : 'var(--surface)',
        transition: 'all 0.2s ease',
        boxShadow: hovered ? 'var(--card-shadow-hover)' : 'var(--card-shadow)',
        animationDelay: `${delay}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card header */}
      <div style={{
        padding: '14px 22px 12px',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 10,
        background: 'var(--surface2)',
      }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 13,
          fontWeight: 600,
          color: 'var(--text)',
          letterSpacing: '-0.2px',
        }}>
          {p.name}
        </span>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10,
          color: 'var(--purple)',
          border: '1px solid var(--purple-border)',
          background: 'var(--purple-bg)',
          padding: '3px 10px',
          borderRadius: 4,
          fontWeight: 500,
          letterSpacing: '0.3px',
        }}>
          {p.lang}
        </span>
      </div>

      {/* Card body */}
      <div style={{ padding: '18px 22px' }}>
        <p style={{ fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.75, marginBottom: 14, fontWeight: 300 }}>
          {p.desc}
        </p>

        <ul style={{ listStyle: 'none', marginBottom: 16, display: 'flex', flexDirection: 'column', gap: 5 }}>
          {p.bullets.map((b: string, i: number) => (
            <li key={i} style={{ display: 'flex', gap: 10, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.6 }}>
              <span style={{ color: 'var(--green)', flexShrink: 0, opacity: 0.8 }}>$</span>
              {b}
            </li>
          ))}
        </ul>

        {p.links.length > 0 && (
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {p.links.map((l: any) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: 'var(--blue)',
                  textDecoration: 'none',
                  border: '1px solid rgba(96, 165, 250, 0.25)',
                  background: 'var(--blue-dim)',
                  padding: '5px 12px',
                  borderRadius: 4,
                  transition: 'all 0.15s',
                  textTransform: 'uppercase',
                  letterSpacing: '0.8px',
                  fontWeight: 600,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--blue)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(96, 165, 250, 0.25)'; }}
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function SectionH({ children }: { children: React.ReactNode }) {
  return (
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
      {children}
    </div>
  );
}
