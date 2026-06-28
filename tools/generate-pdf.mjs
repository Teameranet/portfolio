// One-page ATS-friendly resume PDF generator (pdfkit, no browser).
// Run: node tools/generate-pdf.mjs
import PDFDocument from 'pdfkit';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outRoot = path.join(__dirname, '..');
const targets = [
  path.join(outRoot, 'src', 'assets', 'Ashwin UI-UX Designer & Developer.pdf'),
];

const M = 32;        // ~0.44" margin
const PW = 612;      // Letter width
const PH = 792;      // Letter height
const UW = PW - M * 2;

const doc = new PDFDocument({
  size: 'LETTER',
  margins: { top: M, bottom: M, left: M, right: M },
  bufferPages: true,
  info: { Title: 'Ashwinkumar Chavan - Resume', Author: 'Ashwinkumar Chavan' },
});

const streams = targets.map((p) => fs.createWriteStream(p));
streams.forEach((s) => doc.pipe(s));

// ---------- helpers ----------
function writeSideBySide(leftText, rightText, opts = {}) {
  const y = doc.y;
  const font = opts.font || 'Helvetica-Bold';
  const size = opts.size || 9.5;
  doc.font(font).fontSize(size);
  doc.text(leftText, M, y, { width: UW, lineBreak: false });
  doc.text(rightText, M, y, { width: UW, align: 'right', lineBreak: false });
  doc.y = y + size * 1.3;
}

function sectionHeader(title) {
  const y = doc.y + 6;
  doc.font('Helvetica-Bold').fontSize(10.25);
  doc.text(title, M, y, { width: UW, characterSpacing: 0.5, lineBreak: false });
  const lineY = y + 13;
  doc.moveTo(M, lineY).lineTo(M + UW, lineY).lineWidth(0.6).strokeColor('#000').stroke();
  doc.y = lineY + 5;
  doc.font('Helvetica').fontSize(9.25);
}

function bullets(items, size = 9.25, lineGap = -1.5) {
  doc.font('Helvetica').fontSize(size);
  for (const t of items) {
    doc.text('\u2022  ' + t, M + 10, doc.y, { width: UW - 10, lineGap: lineGap });
  }
  doc.y = doc.y + 1;
}

function skillRow(label, items, size = 9.25) {
  const itemsText = items.map((i) => '\u2022 ' + i).join('  ');
  const y = doc.y;
  doc.font('Helvetica-Bold').fontSize(size);
  const labelText = label + ':';
  const labelW = Math.min(110, doc.widthOfString(labelText) + 4);
  doc.text(labelText, M, y, { width: labelW, lineBreak: false });
  doc.font('Helvetica').fontSize(size);
  doc.text(itemsText, M + labelW, y, { width: UW - labelW, lineBreak: true, lineGap: 1.15 });
  doc.y = doc.y + 1.15;
}

// ---------- header ----------
// H1: Name
doc.font('Helvetica-Bold').fontSize(19);
const nameText = 'ASHWINKUMAR CHAVAN';
const nw = doc.widthOfString(nameText);
doc.text(nameText, M + (UW - nw) / 2, M, { width: UW, lineBreak: false });
doc.y = M + 26;

// Role
doc.font('Helvetica').fontSize(10.5);
const roleText = 'UI/UX Designer & Developer';
const rw = doc.widthOfString(roleText);
doc.text(roleText, M + (UW - rw) / 2, doc.y, { width: UW, lineBreak: false });
doc.y = doc.y + 14;

// Contact
doc.fontSize(9);
const contactText = 'Pune, India  \u2022  ashwinkumarchavan13@gmail.com  \u2022  +91 8180994970  \u2022  LinkedIn  \u2022  Portfolio';
const cw = doc.widthOfString(contactText);
doc.text(contactText, M + (UW - cw) / 2, doc.y, { width: UW, lineBreak: false });
doc.y = doc.y + 6;

// ---------- summary ----------
sectionHeader('Professional Summary');
doc.font('Helvetica').fontSize(9.25);
doc.text(
  'UI/UX Designer and Developer with hands-on experience shipping mobile and web products from research to release. I bridge design and code to build intuitive, accessible interfaces and scalable design systems. At Newprinthub, my work has lifted customer retention by 25% and helped the team ship 30% faster against sprint estimates.',
  M, doc.y, { width: UW, align: 'justify', lineGap: -1.5 }
);
doc.y = doc.y + 2;

// ---------- skills ----------
sectionHeader('Core Competencies');
skillRow('UX & Research', ['User Research', 'Design Thinking', 'User Journey Mapping', 'Interaction Design', 'Usability Testing', 'A/B Testing', 'Design with AI', 'Design Systems', 'Information Architecture', 'Accessibility (WCAG)', 'End-to-End Product Design']);
skillRow('Design Tools', ['Figma', 'Sketch', 'Adobe Illustrator', 'Magicpath', 'Miro']);
skillRow('AI & Prototyping', ['Lovable', 'Figma Make', 'Antigravity AI IDE']);
skillRow('Analytics', ['Amplitude', 'Qualtrics', 'UserTesting', 'Perplexity', 'Claude']);
skillRow('Development', ['React.js', 'JavaScript', 'HTML', 'Tailwind CSS', 'GitHub']);
doc.y = doc.y + 2;

// ---------- experience ----------
sectionHeader('Professional Experience');

writeSideBySide('UI/UX Designer \u2014 Newprinthub.com, Pune', 'May 2024 \u2013 Present');
bullets([
  'Redesigned the client onboarding flow using design thinking and usability testing, increasing customer retention by 25%.',
  'Streamlined UI components and rebuilt navigation paths, improving app user retention by 20%.',
  'Built a scalable Figma component library that removed back-and-forth between design and engineering, helping the team ship 30% faster than sprint estimates.',
  'Lead end-to-end design for PrintHub, a mobile-first printing platform serving customers across India.',
], 9.25, 2.0);

writeSideBySide('UI/UX Developer \u2014 Inrowmek.com, Pune', 'Oct 2023 \u2013 Apr 2024');
bullets([
  'Authored design documentation and a reusable Figma design system, cutting design-to-development handoff time by 40%.',
  'Designed responsive, WCAG-compliant UI components for mobile and web using Sketch and Figma.',
  'Built intuitive user interfaces for mobile and web applications from concept through developer hand-off.',
  'Created marketing assets including social media graphics and Adobe Illustrator brand illustrations.',
], 9.25, 2.0);
doc.y = doc.y + 2;

// ---------- projects ----------
sectionHeader('Key Projects');

writeSideBySide('Teamera.net \u2014 Collaborative Startup Ecosystem', '2025 \u2013 2026');
doc.font('Helvetica-Oblique').fontSize(9);
doc.text('Role: Full-Stack Designer & Developer', M, doc.y, { width: UW, lineBreak: false });
doc.y = doc.y + 11.50;
bullets([
  'Designed and developed a full-stack web app that helps founders, students, and professionals form startup teams, apply for roles, and collaborate in shared workspaces.',
  'Architected a 3-tier system using React, Node.js, Express, MongoDB Atlas, JWT authentication, and Socket.io for real-time communication.',
  'Shipped a role-based application system with a six-state lifecycle, profile portfolios, project discovery, and team workspaces.',
], 9.25, 2.0);

doc.y = doc.y + 1.50;
writeSideBySide('PrintHub \u2014 Mobile Printing Platform', 'May 2024 \u2013 Present');
doc.font('Helvetica-Oblique').fontSize(9);
doc.text('Role: UI/UX Designer', M, doc.y, { width: UW, lineBreak: false });
doc.y = doc.y + 11.50;
bullets([
  'Redesigned the full customer journey from document upload to delivery tracking, reducing drop-off and improving task completion.',
  'Built a modern Figma design system with a Poppins type scale, purple-led palette, and a library of hand-crafted SVG illustrations.',
], 9.25, 2.0);

writeSideBySide('Walkeels.com \u2014 Business Website', '2023');
doc.font('Helvetica-Oblique').fontSize(9);
doc.text('Role: UI/UX Designer & Frontend Developer', M, doc.y, { width: UW, lineBreak: false });
doc.y = doc.y + 11.50;
bullets([
  'Designed and developed a responsive web-page business website focused on clarity, lead generation, and brand trust.',
  'Delivered a mobile-first experience with a consistent visual system, smooth navigation, and an SEO-friendly structure.',
], 9.25, 2.0);
doc.y = doc.y + 2;

// ---------- education ----------
sectionHeader('Education');

writeSideBySide('Bachelor of Computer Applications (BCA)', 'Aug 2022 \u2013 Jun 2026');
doc.font('Helvetica').fontSize(9);
doc.text(
  'Tilak Maharashtra Vidyapeeth  \u00B7  Coursework: Computer Fundamentals, Operating Systems & Networking, Business Application Models, Database Management Systems.',
  M, doc.y, { width: UW, lineGap: 2.0 }
);
doc.y = doc.y + 1;

writeSideBySide('Higher Secondary Certificate \u2014 Information Technology', 'Aug 2021 \u2013 Mar 2022');
doc.font('Helvetica').fontSize(9);
doc.text(
  'ASM (CSIT) College  \u00B7  Coursework: Information Technology, Planning & Organisation Management, Business Models, Enterprise Resource Systems.',
  M, doc.y, { width: UW, lineGap: 2.0 }
);

// ---------- keep only the first page ----------
doc.bufferedPageRange({ start: 0, count: 1 });

doc.end();
await Promise.all(streams.map((s) => new Promise((resolve) => s.on('finish', resolve))));
console.log('Wrote:');
for (const t of targets) console.log(' -', t);
