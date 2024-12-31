import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/events')
      .then((res) => res.json())
      .then((data) => {
        const formattedData = Object.entries(data).map(([id, details]) => ({
          id,
          ...details,
        }));
        setEvents(formattedData);
      });
  }, []);

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <nav style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center' }}>
        <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
          <li style={{ marginRight: '30px', fontSize: '18px', fontWeight: 'bold' }}>
            <Link href="/" style={{ color: '#007BFF', textDecoration: 'none' }}>Home</Link>
          </li>
          <li style={{ fontSize: '18px', fontWeight: 'bold' }}>
            <Link href="/event-list" style={{ color: '#007BFF', textDecoration: 'none' }}>Event List</Link>
          </li>
        </ul>
      </nav>
      <h1 style={{ fontSize: '2.5rem', color: '#333', textAlign: 'center' }}>Event List</h1>
      {events.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '1.5rem', color: '#555' }}>Loading...</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {events.map((event) => (
            <div key={event.id} style={{
              margin: '20px',
              padding: '20px',
              width: '300px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#f9f9f9'
            }}>
              <h2 style={{ color: '#007BFF' }}>{event.eventName}</h2>
              <p><strong>Type:</strong> {event.competitionType}</p>
              <p><strong>Details:</strong> {event.eventDetails}</p>
              <p><strong>Lap Count:</strong> {event.lapCount}</p>
              <p><strong>PC Count:</strong> {event.pcCount}</p>
              <p><strong>Models:</strong> {event.competitionModels.join(', ')}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
