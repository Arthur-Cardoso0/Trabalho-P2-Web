import '../styles/global.css';
import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
