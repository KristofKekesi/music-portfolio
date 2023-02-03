import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Space_Grotesk } from "@next/font/google";


//    TURTLE - TEKI
//    (°-°) _______
//      \ / - - - \_
//       \_  ___  ___>
//         \__) \__)


const space_grotesk = Space_Grotesk({ subsets: ["latin"], weight: "700", variable: '--font-spaceGrotesk'});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${space_grotesk.variable} font-sans`}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
