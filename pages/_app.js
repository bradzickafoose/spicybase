import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import { Header, Footer } from '../components';

function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="py-10">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default App;
