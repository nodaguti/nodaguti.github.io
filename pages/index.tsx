import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import RSSParser from 'rss-parser';

import { Header } from '../components/Header';
import { Section } from '../components/Section';
import { ExternalLink } from '../components/ExternalLink';

type Article = {
  url: string;
  title: string;
  publishedAt: number | null;
}

const Home = (
  { articles }: InferGetStaticPropsType<typeof getStaticProps>,
) => (
  <>
    <Head>
      <title>nodaguti</title>
      <meta name="description" content="nodaguti's portal website: profile and portfolio" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    </Head>

    <style jsx>{`
      :global(:root) {
        --font-size: 16px;
        --colour-background: #f8f8f8;
        --line-height: 1.75;
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
    `}</style>

    <Header />
    <main className="main">
      <article className="main__article">
        <Section title="Profile">
          <ul>
            <li>Web Engineer</li>
            <li>
              Fluent in English (CEFR C1, certified by Cambridge Assessment English) and Japanese
              (native)
            </li>
          </ul>
        </Section>
        <Section title="Tech Skills">
          <ul>
            <li>JavaScript (Since 2006)</li>
            <li>HTML (Since 2006)</li>
            <li>CSS (Since 2006)</li>
            <li>TypeScript (Since 2018)</li>
            <li>Miscellaneous: Makefile, Terraform, Python, VCL (Fastly), bash, Java, PHP, NScripter, etc.</li>
          </ul>
        </Section>
        <Section title="Tech Interests">
          <ul>
            <li>Developer Productivity</li>
            <li>Site Reliability Engineering</li>
            <li>Web Performance</li>
            <li>Story-driven and Data-driven Development</li>
          </ul>
        </Section>
        <Section title="Daily Life Interests">
          <ul>
            <li>💪 Workout</li>
            <li>🧳 Travelling</li>
            <li>⛷️ Skiing</li>
            <li>🤿 Diving</li>
            <li>📺 Anime (Favs: iDOLM@STER, Yorimoi, Sound! Euphonium, SHIROBAKO)</li>
          </ul>
        </Section>
        <Section title="Accounts">
          <ul>
            <li>
              <ExternalLink href="http://nodaguti.hatenablog.com/">Blog</ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://github.com/nodaguti">GitHub</ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://mstdn.jp/@nodaguti">Mastodon</ExternalLink>
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
        </Section>
        <Section title="Recent Articles">
          <ul>
            {articles.map((article) => (
              <li key={article.url}>
                <ExternalLink href={article.url}>{article.title}</ExternalLink>
                ,&nbsp;
                {
                  article.publishedAt ?
                    new Date(article.publishedAt).toISOString() :
                    '(published date unknown)'
                }
              </li>
            ))}
          </ul>
          <p>
            Read more articles at:

            <ul>
              <li>
                <ExternalLink href="http://nodaguti.hatenablog.com/">徒然技術日記</ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://developers.cyberagent.co.jp/blog/archives/author/tnoguchi/">CyberAgent Developers Blog</ExternalLink>
              </li>
            </ul>
          </p>
        </Section>
        <Section title="Talks">
          <ul>
            <li>
              <ExternalLink href="https://speakerdeck.com/cyberagentdevelopers/wei-lai-noterebiwoxing-dukuru-abemanogurosuzhan-lue-yuzati-yan-topin-zhi-xiang-shang-noapuroti">
              未来のテレビを形づくる ABEMAのグロース戦略：ユーザー体験と品質向上のアプローチ (ABEMA's growth strategy: Approach to user experience and quality improvement)
              </ExternalLink>
              ,&nbsp;
              <ExternalLink href="https://www.inter-bee.com/ja/forvisitors/conference/session/?conference_id=2733">
                INTER BEE 2024
              </ExternalLink>
              , 15 Nov 2024.
            </li>
            <li>
              <ExternalLink href="https://speakerdeck.com/nodaguti/building-web-server-using-fastly-and-falco-without-node-dot-js-for-iptv-abema-app">
              FastlyとfalcoでNode.jsレスな Webサーバー構築 : IPTV版 ABEMAアプリインフラ刷新 (Building web server using Fastly and falco without Node.js for IPTV ABEMA app)
              </ExternalLink>
              ,&nbsp;
              <ExternalLink href="https://cyberagent.connpass.com/event/325969/">
                Muddy Web #9
              </ExternalLink>
              , 27 August 2024.
            </li>
            <li>
              <ExternalLink href="https://mozaic.fm/episodes/119/live-streaming.html">
              mozaic.fm ep119 大規模ライブ配信 (Live streaming of world-wide event)
              </ExternalLink>
              ,&nbsp;
              <ExternalLink href="https://mozaic.fm/">
                mozaic.fm
              </ExternalLink>
              , 01 May 2023.
            </li>
            <li>
              <ExternalLink href="https://podcasters.spotify.com/pod/show/muddy-web/episodes/2-Web-Speed-Hackathon-e1t9qkt">
              Muddy Web Podcast #2 これまでの作問者たちが語る！Web Speed Hackathonの舞台裏
              </ExternalLink>
              ,&nbsp;
              <ExternalLink href="https://podcasters.spotify.com/pod/show/muddy-web">
                Muddy Web Podcast
              </ExternalLink>
              , 18 Jan 2023.
            </li>
            <li>
              <ExternalLink href="https://podcasters.spotify.com/pod/show/muddy-web/episodes/1-e1qhfa7">
              Muddy Web Podcast #1 サービス開始から数年経ったプロダクトのリリースフローとは？
              </ExternalLink>
              ,&nbsp;
              <ExternalLink href="https://podcasters.spotify.com/pod/show/muddy-web">
                Muddy Web Podcast
              </ExternalLink>
              , 16 Nov 2022.
            </li>
            <li>
              <ExternalLink href="https://developer.abema.io/2021/sessions/YbNMEfrUny/">
              専任チームで実現する継続的なWebパフォーマンス改善 (Continuous Web performance improvement realised by dedicated team)
              </ExternalLink>
              ,&nbsp;
              <ExternalLink href="https://developer.abema.io/2021/">
                ABEMA Developer Conference 2021
              </ExternalLink>
              , 17 Dec 2021.
            </li>
            <li>
              <ExternalLink href="https://ca-base-next.cyberagent.co.jp/2021/sessions/abema-web-performance-and-reliability/">
              ABEMA Webブラウザ版をより高速で高信頼にするために (Towards more performant and reliable ABEMA)
              </ExternalLink>
              ,&nbsp;
              <ExternalLink href="https://ca-base-next.cyberagent.co.jp/2021">
                CA BASE NEXT 2021
              </ExternalLink>
              , 28 May 2021.
            </li>
            <li>
              <ExternalLink href="https://togetter.com/li/1708710">
                Web 24 Performance Session
              </ExternalLink>
              ,&nbsp;
              <ExternalLink href="https://connpass.com/event/211877/">
                Web 24
              </ExternalLink>
              , 7-8 May 2021.
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
        </Section>
        <Section title="Interviews">
          <ul>
          <li>
              <ExternalLink href="https://cadc.cyberagent.co.jp/2023/sessions/web-2023/">2023年、知っておきたいWebのこと ~フレームワーク・Web UI~ (Web topics you need to know in 2023 &mdash; Framework &amp; Web UI)</ExternalLink> (as an interviewer in QA session), <ExternalLink href="https://cadc.cyberagent.co.jp/2022/">CyberAgent Developer Conference 2023</ExternalLink>, 29 Jun, 2023.
            </li>
            <li>
              <ExternalLink href="https://www.cyberagent.co.jp/way/list/detail/id=28537">
                Webが日常に溶け込んだ新時代で、Webフロントエンドのキャリアの未来を考えてみる | FEATUReS サイバーエージェント公式オウンドメディア
              </ExternalLink>
              , 22 Feb 2023.
            </li>
            <li>
              <ExternalLink href="https://cadc.cyberagent.co.jp/2022/program/web-performance-and-security-in-2022/">2022年、知っておきたいWebのこと ~ パフォーマンス & セキュリティ ~ (Web topics you need to know in 2022 &mdash; Performance &amp; Security)</ExternalLink> (as an interviewer in QA session), <ExternalLink href="https://cadc.cyberagent.co.jp/2022/">CyberAgent Developer Conference 2022</ExternalLink>, 24 Mar, 2022.
            </li>
            <li>
              <ExternalLink href="https://www.cyberagent.co.jp/way/list/detail/id=25585">
                「Webフロント向け 開発型インターンシップ」で見つける成長するためのヒント | FEATUReS サイバーエージェント公式オウンドメディア
              </ExternalLink>
              , 22 Dec 2020.
            </li>
            <li>
              <ExternalLink href="https://megalodon.jp/2020-0101-2025-12/https://www.cyberagent.co.jp:443/careers/special/engineer2021/web-engineer.html">
                職種紹介 WEBフロントエンジニア | 2021年度新卒採用 エンジニアコース本選考 | 株式会社サイバーエージェント (Employee's interview on the career page of CyberAgent)
              </ExternalLink>
              , 1 Dec 2019.
            </li>
          </ul>
        </Section>
        <Section title="Books">
          <ul>
            <li>
              <ExternalLink href="https://gihyo.jp/magazine/wdpress/archive/2021/vol124">
              フロントエンド羅針盤 ── Web体験向上へのアプローチ【第2回】データドリブンなパフォーマンス改善 一過性で終わらせない文化の作り方 (Data-driven Performance Improvement &mdash; A way to create culture)
              </ExternalLink>
              ,&nbsp;
              <ExternalLink href="https://gihyo.jp/magazine/wdpress/archive/2021/vol124">
                WEB+DB PRESS Vol.124
              </ExternalLink>
              , 技術評論社, 23 Aug 2021.
            </li>
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
        </Section>
      </article>
    </main>
  </>
);

export default Home;

export const getStaticProps: GetStaticProps<{
  articles: Article[];
}> = async () => {
  const articleListList: Article[][] = await Promise.all([
    fetchArticleList('https://nodaguti.hatenablog.com/rss'),
    fetchArticleList('https://developers.cyberagent.co.jp/blog/archives/author/tnoguchi/feed/'),
  ]);
  const articleList = articleListList.flat();
  const formattedArticlesList = articleList
    .sort((a, b) => (b.publishedAt ?? 0) - (a.publishedAt ?? 0))
    .slice(0, 10);

  return {
    props: {
      articles: formattedArticlesList,
    },
  };
}

async function fetchArticleList(url: string): Promise<Article[]> {
  const parser = new RSSParser();
  const feed = await parser.parseURL(url);
  const articles: Article[] = feed.items.map((item) => ({
    url: item.link ?? '',
    title: item.title ?? '',
    publishedAt: item.isoDate ? Date.parse(item.isoDate) : null,
  }));

  return articles;
}
