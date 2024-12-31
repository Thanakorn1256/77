import Navbar from '../components/Navbar'; // นำเข้า Navbar
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Navbar /> {/* ใช้ Navbar ที่สร้างขึ้น */}
      
      <div style={{ padding: '30px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: '#333' }}>Welcome to Firebase Data Viewer</h1>
        <p style={{ fontSize: '1.5rem', color: '#555' }}>
          This is the homepage. Use the navigation bar to explore the event list.
        </p>
      </div>
    </div>
  );
}
