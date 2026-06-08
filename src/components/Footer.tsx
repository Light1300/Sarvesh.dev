import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '24px 0',
      textAlign: 'center',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 28px' }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          color: 'var(--text-muted)',
          letterSpacing: '0.3px',
        }}>
          @resume/sarvesh ·{' '}
          <a href="mailto:sarupatil0001@gmail.com"
            style={{ color: 'var(--text-muted)', transition: 'color 0.15s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}
          >
            sarupatil0001@gmail.com
          </a>
          {' '}·{' '}
          <a href="https://github.com/Light1300" target="_blank" rel="noreferrer"
            style={{ color: 'var(--text-muted)', transition: 'color 0.15s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}
          >
            github.com/Light1300
          </a>
        </span>
      </div>
    </footer>
  );
}
