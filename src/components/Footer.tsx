import React from 'react';

export default function Footer() {
  return (
    <footer style={wrap}>
      <div style={inner}>
        <span style={text}>
          @resume/sarvesh ·{' '}
          <a href="mailto:sarupatil0001@gmail.com" style={link}>sarupatil0001@gmail.com</a>{' '}·{' '}
          <a href="https://github.com/Light1300" target="_blank" rel="noreferrer" style={link}>github.com/Light1300</a>
        </span>
      </div>
    </footer>
  );
}

const wrap: React.CSSProperties = {
  borderTop: '1px solid var(--border)',
  padding: '20px 0',
  textAlign: 'center',
};

const inner: React.CSSProperties = {
  maxWidth: 1100,
  margin: '0 auto',
  padding: '0 24px',
};

const text: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 11,
  color: 'var(--text-muted)',
  letterSpacing: '0.3px',
};

const link: React.CSSProperties = {
  color: 'var(--text-muted)',
  textDecoration: 'none',
};
