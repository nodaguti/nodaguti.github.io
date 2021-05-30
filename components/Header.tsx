import React from 'react';

export const Header = () => (
  <>
    <style jsx>{`
      .header {
        padding: 1rem 0;
      }

      .header__title {
        font-size: 2rem;
        font-weight: normal;
        text-align: center;
      }
    `}</style>

    <header className="header">
      <h1 className="header__title">nodaguti</h1>
    </header>
  </>
)
