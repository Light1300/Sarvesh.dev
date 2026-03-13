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
    setTimeout(() => {
      setCopied(false);
      setShowFeedback(false);
    }, 2200);
  }

  return (
    <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: 0 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px 0' }}>

        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--text-muted)', marginBottom: 12 }}>
          registry.npmjs.com / @resume / sarvesh
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap', marginBottom: 8 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 28, fontWeight: 700, letterSpacing: -1, color: 'var(--text)' }}>
            @resume/sarvesh
          </span>
          <span style={versionBadge()}>2026.03.06</span>
          <span style={{ ...versionBadge(), color: 'var(--green)', borderColor: 'var(--green-border)', background: 'var(--green-bg)' }}>
            Public
          </span>
        </div>
        
        <p style={{ fontSize: 15, color: 'var(--text-dim)', marginBottom: 16, fontWeight: 300, maxWidth: 620 }}>
          Backend &amp; Fullstack Engineer. Ships distributed systems, real-time infra, and production-grade APIs that scale.
        </p>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
          {TAGS.map(t => (
            <span key={t.label} style={tagStyle(t.red, t.green)}>{t.label}</span>
          ))}
        </div>

        <div style={installBlock}>
          <div style={installHeader}>
            <span style={installLabel}>Install</span>
            <span style={{ ...installLabel, color: 'var(--border-hover)' }}>// downloads resume.pdf</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', padding: '14px 16px', gap: 8 }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: 'var(--accent)', userSelect: 'none' }}>$</span>
            <input
              readOnly
              value="npm install @resume/sarvesh"
              style={installInput}
            />
            <button
              onClick={handleInstall}
              style={{
                ...copyBtn,
                color: copied ? 'var(--green)' : 'var(--text-muted)',
                borderColor: copied ? 'var(--green)' : 'var(--border)',
              }}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          {showFeedback && (
            <div style={{ padding: '0 16px 10px', fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--green)' }}>
              ✓ Fetching @resume/sarvesh@2026.03.06... downloading resume.pdf
            </div>
          )}
          <div style={{ padding: '0 16px 12px', fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--text-muted)' }}>
            or{' '}
            <a href="https://github.com/Light1300" target="_blank" rel="noreferrer" style={{ color: 'var(--blue)' }}>
              github.com/Light1300
            </a>{' '}·{' '}
            <a href="https://linkedin.com/in/sarvesh-patil-559b3124b/" target="_blank" rel="noreferrer" style={{ color: 'var(--blue)' }}>
              LinkedIn
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', marginTop: 12 }}>
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => onTab(t.id)}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                padding: '10px 20px',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === t.id ? '2px solid var(--accent)' : '2px solid transparent',
                color: activeTab === t.id ? 'var(--text)' : 'var(--text-muted)',
                transition: 'all 0.15s',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
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

function versionBadge(): React.CSSProperties {
  return {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 12,
    color: 'var(--text-muted)',
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    padding: '2px 8px',
    borderRadius: 3,
  };
}

function tagStyle(red?: boolean, green?: boolean): React.CSSProperties {
  return {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11,
    padding: '3px 10px',
    borderRadius: 2,
    border: `1px solid ${red ? 'var(--accent-dim)' : green ? 'var(--green-border)' : 'var(--border)'}`,
    color: red ? 'var(--accent)' : green ? 'var(--green)' : 'var(--text-muted)',
    background: green ? 'var(--green-bg)' : 'transparent',
  };
}

const installBlock: React.CSSProperties = {
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: 4,
  overflow: 'hidden',
  marginBottom: 4,
};

const installHeader: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 16px',
  borderBottom: '1px solid var(--border)',
  background: 'var(--surface2)',
};

const installLabel: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 11,
  color: 'var(--text-muted)',
  textTransform: 'uppercase',
  letterSpacing: 1,
};

const installInput: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 13,
  color: 'var(--text)',
  flex: 1,
  background: 'none',
  border: 'none',
  outline: 'none',
  caretColor: 'var(--accent)',
};

const copyBtn: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 11,
  background: 'none',
  border: '1px solid',
  padding: '4px 10px',
  borderRadius: 3,
  cursor: 'pointer',
  transition: 'all 0.15s',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
};
