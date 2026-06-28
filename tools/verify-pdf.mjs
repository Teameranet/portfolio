import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { PDFParse } = require('pdf-parse');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname, '..', 'Ashwin_Chavan_Resume.pdf');
const data = await new PDFParse({ data: fs.readFileSync(file) }).getText();
console.log('File:', file);
console.log('Text length:', data.text.length);
console.log('--- preview ---');
console.log(data.text);
console.log('--- end ---');
