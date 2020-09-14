import UserProvider from 'providers/UserProvider';

import 'tailwindcss/tailwind.css';
import 'styles/variables.css';
import 'styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
