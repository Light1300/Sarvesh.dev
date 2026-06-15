import React, { useState } from 'react';
import { Tab } from '../types';

interface Props {
  activeTab: Tab;
  onTab: (t: Tab) => void;
}

const TAGS = [
  { label: 'backend', red: true },
  { label: 'distributed-systems', red: true },
  { label: 'nodejs', red: true },
  { label: 'open-to-work', green: true },
  { label: 'typescript' },
  { label: 'websockets' },
  { label: 'grpc' },
  { label: 'redis' },
];

const TABS: { id: Tab; label: string }[] = [
  { id: 'readme', label: 'Readme' },
  { id: 'projects', label: 'Projects' },
  { id: 'writing', label: 'Writing' },
  { id: 'experience', label: 'Experience' },
];

export default function RegistryHeader({ activeTab, onTab }: Props) {
  const [copied, setCopied] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  function handleInstall() {
    navigator.clipboard.writeText('npm install @resume/sarvesh').catch(() => {});
    setCopied(true);
    setShowFeedback(true);
    setTimeout(() => { setCopied(false); setShowFeedback(false); }, 2400);
  }

  return (
    <div style={{ borderBottom: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>
      {/* Subtle top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
        opacity: 0.4,
      }} />

      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '40px 28px 0' }}>

        {/* Breadcrumb */}
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          color: 'var(--text-muted)',
          marginBottom: 18,
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}>
          <span style={{ opacity: 0.5 }}>registry.npmjs.com</span>
          <span style={{ color: 'var(--border-hover)' }}>/</span>
          <span style={{ opacity: 0.5 }}>@resume</span>
          <span style={{ color: 'var(--border-hover)' }}>/</span>
          <span style={{ color: 'var(--text-dim)' }}>sarvesh</span>
        </div>

        {/* Title row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 10 }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: '-1.5px',
            color: 'var(--text)',
            lineHeight: 1,
          }}>
            @resume/sarvesh
          </span>
          <span style={versionBadge('#666', 'var(--surface2)', 'var(--border)')}>2026.03.06</span>
          <span style={versionBadge('var(--green)', 'var(--green-bg)', 'var(--green-border)')}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', display: 'inline-block', marginRight: 5, animation: 'pulse 2.5s infinite' }} />
            Public
          </span>
        </div>

        {/* Desc */}
        <p style={{
          fontSize: 15,
          color: 'var(--text-dim)',
          marginBottom: 20,
          fontWeight: 300,
          maxWidth: 580,
          lineHeight: 1.65,
          fontStyle: 'italic',
        }}>
          Backend &amp; Fullstack Engineer. Ships distributed systems, real-time infra, and production-grade APIs that scale.
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 24 }}>
          {TAGS.map(t => (
            <span key={t.label} style={tagStyle(t.red, t.green)}>{t.label}</span>
          ))}
        </div>

        {/* Install block */}
        <div style={installWrap}>
          <div style={installHdr}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.2px' }}>
              Install
            </span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: 'var(--text-muted)', opacity: 0.6 }}>
              // downloads resume.pdf
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', padding: '12px 18px', gap: 10 }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, color: 'var(--accent)', userSelect: 'none', fontWeight: 500 }}>$</span>
            <input
              readOnly
              value="npm install @resume/sarvesh"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13,
                color: 'var(--text)',
                flex: 1,
                background: 'none',
                border: 'none',
                outline: 'none',
                letterSpacing: '0.3px',
              }}
            />
            <button
              onClick={handleInstall}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                background: copied ? 'var(--green-bg)' : 'var(--surface3)',
                border: `1px solid ${copied ? 'var(--green-border)' : 'var(--border)'}`,
                padding: '5px 14px',
                borderRadius: 4,
                cursor: 'pointer',
                color: copied ? 'var(--green)' : 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                transition: 'all 0.18s',
                fontWeight: 500,
              }}
            >
              {copied ? '✓ Copied' : 'Copy'}
            </button>
          </div>
          {showFeedback && (
            <div style={{ padding: '0 18px 10px', fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--green)', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--green)' }} />
              Fetching @resume/sarvesh@2026.03.06... downloading resume.pdf
            </div>
          )}
          <div style={{ padding: '0 18px 12px', fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--text-muted)', borderTop: '1px solid var(--border)', paddingTop: 10, marginTop: 2 }}>
            or{' '}
            <a href="https://github.com/Light1300" target="_blank" rel="noreferrer" style={{ color: 'var(--blue)' }}>github.com/Light1300</a>
            {' '}·{' '}
            <a href="https://linkedin.com/in/sarvesh-patil-559b3124b/" target="_blank" rel="noreferrer" style={{ color: 'var(--blue)' }}>LinkedIn</a>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 0, marginTop: 16 }}>
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => onTab(t.id)}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                padding: '10px 22px',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === t.id ? '2px solid var(--accent)' : '2px solid transparent',
                color: activeTab === t.id ? 'var(--text)' : 'var(--text-muted)',
                transition: 'all 0.15s',
                letterSpacing: '0.6px',
                textTransform: 'uppercase',
                fontWeight: activeTab === t.id ? 500 : 400,
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function versionBadge(color: string, bg: string, border: string): React.CSSProperties {
  return {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11,
    color, background: bg,
    border: `1px solid ${border}`,
    padding: '3px 10px',
    borderRadius: 4,
    display: 'inline-flex',
    alignItems: 'center',
    letterSpacing: '0.2px',
  };
}

function tagStyle(red?: boolean, green?: boolean): React.CSSProperties {
  return {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 10,
    padding: '4px 10px',
    borderRadius: 20,
    border: `1px solid ${red ? 'var(--accent-dim)' : green ? 'var(--green-border)' : 'var(--border)'}`,
    color: red ? 'var(--accent)' : green ? 'var(--green)' : 'var(--text-muted)',
    background: red ? 'var(--accent-glow)' : green ? 'var(--green-bg)' : 'transparent',
    letterSpacing: '0.3px',
    fontWeight: 500,
  };
}

const installWrap: React.CSSProperties = {
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: 6,
  overflow: 'hidden',
  marginBottom: 4,
  boxShadow: 'var(--card-shadow)',
};

const installHdr: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 18px',
  borderBottom: '1px solid var(--border)',
  background: 'var(--surface2)',
};
