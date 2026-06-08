import React from 'react';
import { Tab } from '../types';

interface Props {
  activeTab: Tab;
  onTab: (t: Tab) => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const TABS: { id: Tab; label: string }[] = [
  { id: 'readme', label: 'Readme' },
  { id: 'projects', label: 'Projects' },
  { id: 'writing', label: 'Writing' },
  { id: 'experience', label: 'Experience' },
];

export default function Navbar({ activeTab, onTab, theme, onToggleTheme }: Props) {
  const isDark = theme === 'dark';

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      borderBottom: '1px solid var(--border)',
      height: 52,
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      padding: '0 28px',
      backdropFilter: 'blur(16px) saturate(180%)',
      WebkitBackdropFilter: 'blur(16px) saturate(180%)',
      background: isDark ? 'rgba(8,8,8,0.88)' : 'rgba(248,248,246,0.88)',
    }}>
      {/* Logo */}
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontWeight: 700,
        fontSize: 15,
        color: 'var(--accent)',
        letterSpacing: '-0.5px',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
      }}>
        <span style={{
          width: 8, height: 8, borderRadius: '50%',
          background: 'var(--accent)',
          display: 'inline-block',
          boxShadow: '0 0 8px var(--accent)',
        }} />
        npm
      </span>

      <span style={{ color: 'var(--border-hover)', fontFamily: 'monospace' }}>/</span>

      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 12,
        color: 'var(--text-muted)',
        letterSpacing: '0.2px',
      }}>
        @resume/sarvesh
      </span>

      {/* Right side nav */}
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 2, alignItems: 'center' }}>
        {TABS.map(t => (
          <button
            key={t.id}
            onClick={() => onTab(t.id)}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              padding: '5px 12px',
              cursor: 'pointer',
              background: activeTab === t.id ? 'var(--surface3)' : 'none',
              border: activeTab === t.id ? '1px solid var(--border)' : '1px solid transparent',
              color: activeTab === t.id ? 'var(--text)' : 'var(--text-muted)',
              letterSpacing: '0.5px',
              textTransform: 'uppercase' as const,
              transition: 'all 0.15s',
              borderRadius: 5,
            }}
            onMouseEnter={e => {
              if (activeTab !== t.id) (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-dim)';
            }}
            onMouseLeave={e => {
              if (activeTab !== t.id) (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-muted)';
            }}
          >
            {t.label}
          </button>
        ))}

        {/* Theme toggle */}
        <button
          onClick={onToggleTheme}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            padding: '5px 12px',
            cursor: 'pointer',
            background: 'var(--surface2)',
            border: '1px solid var(--border)',
            color: 'var(--text-muted)',
            borderRadius: 5,
            transition: 'all 0.15s',
            marginLeft: 10,
            letterSpacing: '0.3px',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-hover)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)'; }}
        >
          {isDark ? '☀ Light' : '◑ Dark'}
        </button>
      </div>
    </nav>
  );
}
