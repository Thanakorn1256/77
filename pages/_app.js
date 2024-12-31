import Navbar from '../components/Navbar'; // นำเข้า Navbar
import '../styles/globals.css';  // สไตล์ global ของโปรเจกต์

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar /> {/* แสดง Navbar ในทุกหน้า */}
      <Component {...pageProps} /> {/* แสดงคอนเทนต์ของแต่ละหน้า */}
    </div>
  );
}

export default MyApp;
