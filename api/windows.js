import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public', 'windows.txt');
  const content = fs.readFileSync(filePath, 'utf8');
  
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Content-Disposition', 'inline; filename="windows"');
  res.status(200).send(content);
}
