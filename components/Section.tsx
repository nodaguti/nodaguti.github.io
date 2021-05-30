import React from 'react';

type Props = React.PropsWithChildren<{
  title: string;
}>;

export const Section: React.FunctionComponent<Props> = ({ title, children }) => (
  <>
    <style jsx>{`
      .section {
        margin-bottom: 2rem;
      }

      .section__title {
        font-size: 1.5rem;
      }
    `}</style>

    <section className="section">
      <h1 className="section__title">{title}</h1>
      {children}
    </section>
  </>
)
