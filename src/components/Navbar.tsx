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

const s: Record<string, React.CSSProperties> = {
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    borderBottom: '1px solid var(--border)',
    height: 48,
    display: 'flex',
    alignItems: 'center',
    gap: 24,
    padding: '0 24px',
    backdropFilter: 'blur(12px)',
    background: 'rgba(var(--bg), 0.92)',
  },
  logo: {
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 700,
    fontSize: 14,
    color: 'var(--accent)',
    letterSpacing: -0.5,
  },
  sep: {
    fontFamily: "'JetBrains Mono', monospace",
    color: 'var(--border-hover)',
    fontSize: 14,
  },
  pkg: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 12,
    color: 'var(--text-muted)',
  },
  links: {
    marginLeft: 'auto',
    display: 'flex',
    gap: 4,
    alignItems: 'center',
    listStyle: 'none',
  },
  tabBtn: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11,
    padding: '4px 10px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    color: 'var(--text-muted)',
    letterSpacing: '0.5px',
    textTransform: 'uppercase' as const,
    transition: 'color 0.15s',
    borderRadius: 3,
  },
  themeBtn: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11,
    padding: '4px 10px',
    cursor: 'pointer',
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    color: 'var(--text-muted)',
    borderRadius: 3,
    transition: 'all 0.15s',
    marginLeft: 8,
    letterSpacing: '0.3px',
  },
};

export default function Navbar({ activeTab, onTab, theme, onToggleTheme }: Props) {
  return (
    <nav style={{ ...s.nav, background: theme === 'dark' ? 'rgba(10,10,10,0.92)' : 'rgba(250,250,250,0.92)' }}>
      <span style={s.logo}>npm</span>
      <span style={s.sep}>/</span>
      <span style={s.pkg}>@resume/sarvesh</span>
      <ul style={s.links}>
        {TABS.map(t => (
          <li key={t.id}>
            <button
              style={{
                ...s.tabBtn,
                color: activeTab === t.id ? 'var(--text)' : 'var(--text-muted)',
              }}
              onClick={() => onTab(t.id)}
            >
              {t.label}
            </button>
          </li>
        ))}
        <li>
          <button style={s.themeBtn} onClick={onToggleTheme}>
            {theme === 'dark' ? '☀ Light' : '◑ Dark'}
          </button>
        </li>
      </ul>
    </nav>
  );
}
