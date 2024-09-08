// Simulate a simple in-memory database
let downloadCounts = {
    "1": 0,
    "2": 0
  };
  
  export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Handle POST request to update download count
      const { section } = req.query;
      if (section in downloadCounts) {
        downloadCounts[section]++;
        res.status(200).json({ count: downloadCounts[section] });
      } else {
        res.status(400).json({ message: 'Invalid section' });
      }
    } else if (req.method === 'GET') {
      // Handle GET request to fetch download count
      const { section } = req.query;
      if (section in downloadCounts) {
        res.status(200).json({ count: downloadCounts[section] });
      } else {
        res.status(400).json({ message: 'Invalid section' });
      }
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  