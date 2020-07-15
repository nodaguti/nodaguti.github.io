import React from 'react';
import Head from 'next/head';
import { ExternalLink } from '../components/ExternalLink';

const Home = () => (
  <>
    <Head>
      <title>nodaguti</title>
      <meta name="description" content="nodaguti's portal website: profile and portfolio" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    </Head>

    <style jsx>{`
      :root {
        --font-size: 18px;
        --colour-background: #f8f8f8;
        --line-height: 1.8;
      }

      :global(html) {
        font-family: Avenir Next, Avenir, Helvetica, 'Yu Gothic', sans-serif;
        font-feature-settings: 'palt' 1;
        font-size: var(--font-size);
        text-rendering: optimizeLegibility;
        line-height: var(--line-height);
      }

      :global(body) {
        margin: 0;
        background-color: var(--colour-background);
      }
    `}</style>

    <style jsx>{`
      .header {
        padding: 1rem 0;
      }

      .header__title {
        font-size: 2rem;
        font-weight: normal;
        text-align: center;
      }

      .main {
        display: grid;
        grid-template-areas: 'left-space article right-space';
        grid-template-columns: 1fr 54rem 1fr;
      }
      @media screen and (max-width: 58rem) {
        .main {
          grid-template-columns: 1fr calc(100vw - 4rem) 1fr;
        }
      }

      .main__article {
        grid-area: article;
      }

      .section {
        margin-bottom: 2rem;
      }

      .section__title {
        font-size: 1.5rem;
      }
    `}</style>

    <header className="header">
      <h1 className="header__title">nodaguti</h1>
    </header>
    <main className="main">
      <article className="main__article">
        <section className="section">
          <h1 className="section__title">Profile</h1>
          <ul>
            <li>Web Engineer</li>
            <li>
              Fluent in English (CEFR C1, certified by Cambridge Assessment English) and Japanese
              (native)
            </li>
          </ul>
        </section>
        <section className="section">
          <h1 className="section__title">Tech Skills</h1>
          <ul>
            <li>JavaScript (Since 2006)</li>
            <li>HTML (Since 2006)</li>
            <li>CSS (Since 2006)</li>
            <li>TypeScript (Since 2018)</li>
            <li>Miscellaneous: Makefile, Python, VCL (Fastly), bash, R, Java, NScripter, etc.</li>
          </ul>
        </section>
        <section className="section">
          <h1 className="section__title">Tech Interests</h1>
          <ul>
            <li>Web Performance</li>
            <li>Build and Coding Infrastructure (transpiling, formatting, linting, etc.)</li>
            <li>Story-driven and Data-driven Development</li>
          </ul>
        </section>
        <section className="section">
          <h1 className="section__title">Daily Life Interests</h1>
          <ul>
            <li>Workout</li>
            <li>Skiing</li>
            <li>Personal Asset Management</li>
            <li>Japanese Animation (Favs: iDOLM@STER, yorimoi, Sound! Euphonium, SHIROBAKO)</li>
          </ul>
        </section>
        <section className="section">
          <h1 className="section__title">Accounts</h1>
          <ul>
            <li>
              <ExternalLink href="http://nodaguti.hatenablog.com/">Blog</ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://github.com/nodaguti">GitHub</ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://www.twitter.com/nodaguti">Twitter</ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://speakerdeck.com/nodaguti">Speaker Deck</ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://www.linkedin.com/in/tadahiro-noguchi">
                LinkedIn
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://www.researchgate.net/profile/Tadahiro_Noguchi">
                ResearchGate
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://userscripts-mirror.org/users/48227/scripts">
                userscript.org
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://userstyles.org/users/7022">userstyles.org</ExternalLink>
            </li>
          </ul>
        </section>
        <section className="section">
          <h1 className="section__title">Talks & Media Publications</h1>
          <ul>
            <li>
              <ExternalLink href="https://www.cyberagent.co.jp/careers/special/engineer2021/web-engineer.html">
              職種紹介 WEBフロントエンジニア | 2021年度新卒採用 エンジニアコース本選考 | 株式会社サイバーエージェント (Employee's interview on the career page of CyberAgent)
              </ExternalLink>
              ,&nbsp;
              <ExternalLink href="https://megalodon.jp/2020-0101-2025-12/https://www.cyberagent.co.jp:443/careers/special/engineer2021/web-engineer.html">
                Archive
              </ExternalLink>
              , 1 Dec 2019.
            </li>
            <li>
              <ExternalLink href="https://speakerdeck.com/nodaguti/my-first-year-at-abematv">
                AbemaTV 新卒1年目エンジニア実録 (My first year at AbemaTV)
              </ExternalLink>
              ,&nbsp;
              <ExternalLink href="https://frontrend.connpass.com/event/124995/">
                Fontrend &times; Bonfire Frontend
              </ExternalLink>
              , 15 Apr 2019.
            </li>
            <li>
              <ExternalLink href="https://speakerdeck.com/nodaguti/html-5-conference-2018-sponsors-lt">
                Chrome チームの推すこれからくる新しい Web API (Upcoming Web APIs advocated by the
                Chrome team)
              </ExternalLink>
              ,&nbsp;
              <ExternalLink href="https://frontrend.connpass.com/event/110449">
                Frontrend Vol.13
              </ExternalLink>
              , 19 Dec 2018.
            </li>
            <li>
              <ExternalLink href="https://speakerdeck.com/nodaguti/html-5-conference-2018-sponsors-lt">
                新卒研修でテストカバレッジ99%を達成した話 (HTML 5 Conference 2018 Sponsor's LT)
              </ExternalLink>
              ,&nbsp;
              <ExternalLink href="https://speakerdeck.com/nodaguti/html-5-conference-2018-sponsors-lt">
                HTML 5 Conference 2018
              </ExternalLink>
              , 25 Nov 2018.
            </li>
          </ul>
        </section>
        <section className="section">
          <h1 className="section__title">Books</h1>
          <ul>
            <li>
              <ExternalLink href="https://nodaguti.hatenablog.com/entry/2019/10/14/150602">
                AbemaTV で学ぶ RxJS (Learning RxJS with AbemaTV)
              </ExternalLink>
              ,&nbsp;
              <ExternalLink href="https://techbookfest.org/event/tbf07/circle/5634582229549056">
                Techbookfest 7
              </ExternalLink>
              , 22 Sep 2019.
            </li>
          </ul>
        </section>
      </article>
    </main>
  </>
);

export default Home;
