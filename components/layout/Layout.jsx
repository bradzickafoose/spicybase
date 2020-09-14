import Head from 'next/head';
import { Header, Footer, PageHeading } from 'components';

export default function Layout({
  title,
  children,
  header = true,
  pageTitle = true,
  footer = true,
}) {
  return (
    <>
      <Head>
        <title>{title && `${title} - `}Spicybase</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      {header && <Header />}
      <main>
        {pageTitle && <PageHeading title={title} />}
        {children}
      </main>
      <div id="__modals" />
      {footer && <Footer />}
    </>
  );
}
