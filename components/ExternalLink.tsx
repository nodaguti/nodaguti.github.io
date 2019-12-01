import React from 'react';

interface Props {
  href: string;
}

export const ExternalLink: React.FunctionComponent<Props> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);
