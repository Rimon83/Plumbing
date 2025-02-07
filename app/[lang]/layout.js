// import { Inter } from 'next/font/google'
import Footer from './components/Footer';
import Header from './components/Header'
import './globals.css'
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mountain Mechanical',
  description: 'Generated by create next app',
}
export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }];
}
export default function RootLayout({ children,params}) {
  return (
    <html lang={params.lang}>
      <body className={roboto.className}>
        <Header lang={params.lang} />
        {children}
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}

