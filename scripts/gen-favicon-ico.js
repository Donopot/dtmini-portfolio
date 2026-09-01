const sharp = require('sharp');
const fs = require('fs');

(async () => {
  const sizes = [16, 32, 48];
  const pngs = [];
  for (const s of sizes) {
    const buf = await sharp('public/favicon.svg', { density: 300 }).resize(s, s).png().toBuffer();
    pngs.push({ size: s, data: buf });
  }

  const count = pngs.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type icon
  header.writeUInt16LE(count, 4); // nb images

  const entrySize = 16;
  const dir = Buffer.alloc(entrySize * count);
  let offset = 6 + entrySize * count;

  pngs.forEach((p, i) => {
    const e = entrySize * i;
    dir.writeUInt8(p.size >= 256 ? 0 : p.size, e);        // width
    dir.writeUInt8(p.size >= 256 ? 0 : p.size, e + 1);    // height
    dir.writeUInt8(0, e + 2);   // palette
    dir.writeUInt8(0, e + 3);   // reserved
    dir.writeUInt16LE(1, e + 4); // planes
    dir.writeUInt16LE(32, e + 6); // bpp
    dir.writeUInt32LE(p.data.length, e + 8); // taille
    dir.writeUInt32LE(offset, e + 12);       // offset
    offset += p.data.length;
  });

  const ico = Buffer.concat([header, dir, ...pngs.map(p => p.data)]);
  fs.writeFileSync('public/favicon.ico', ico);
  console.log('favicon.ico écrit :', ico.length, 'octets,', count, 'tailles', sizes.join('/'));
})().catch(e => { console.error('ERR', e); process.exit(1); });
