import { useState } from 'react';
import axios from 'axios';

export default function ScanForm() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleScan = async () => {
    setLoading(true);
    try {
      const res = await axios.post('/api/scan', { url });
      setResults(res.data);
    } catch (err) {
      alert('Scan failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded-xl">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://example.com"
        className="border px-3 py-2 w-full rounded"
      />
      <button
        onClick={handleScan}
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Scanning...' : 'Scan Now'}
      </button>

      {results && (
        <div className="mt-4">
          <h3 className="font-bold">Broken Links:</h3>
          <ul>
            {results.brokenLinks.map((link, i) => (
              <li key={i}>{link.href} - {link.status}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
