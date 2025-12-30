import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { name } = req.query;
  const filePath = path.join(process.cwd(), 'public', `${name}.txt`);

  if (!fs.existsSync(filePath)) {
    res.status(404).send('File not found');
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  res.setHeader('Content-Type', 'text/plain');
  res.send(content);
}
