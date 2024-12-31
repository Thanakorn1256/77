import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link href="/about-us" style={styles.navLink}>About Us</Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/products" style={styles.navLink}>Products</Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/software" style={styles.navLink}>Software</Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/pricing" style={styles.navLink}>Pricing</Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/event-list" style={styles.navLink}>Event List</Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/results" style={styles.navLink}>Results</Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px 0',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  navList: {
    display: 'flex',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  navItem: {
    margin: '0 20px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
  },
};
