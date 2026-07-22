import sharp from 'sharp';
import { readdirSync, statSync, renameSync, unlinkSync } from 'fs';
import path from 'path';

const targetDir = './public/assets/images';

async function processDirectory(dir) {
  try {
    const entries = readdirSync(dir);
    for (const entry of entries) {
      const fullPath = path.join(dir, entry);
      const stat = statSync(fullPath);
      
      if (stat.isDirectory()) {
        await processDirectory(fullPath);
      } else if (stat.isFile() && /\.(png|jpe?g)$/i.test(entry)) {
        // Only process files larger than 150KB
        if (stat.size > 150 * 1024) {
          const ext = path.extname(entry).toLowerCase();
          const tempPath = fullPath + '.temp';
          
          console.log(`Processing: ${fullPath} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
          
          try {
            if (ext === '.png') {
              await sharp(fullPath)
                .png({ quality: 80, compressionLevel: 9, palette: true })
                .toFile(tempPath);
            } else if (ext === '.jpg' || ext === '.jpeg') {
              await sharp(fullPath)
                .jpeg({ quality: 80, mozjpeg: true })
                .toFile(tempPath);
            }
            
            const tempStat = statSync(tempPath);
            console.log(`  Compressed to: ${(tempStat.size / 1024 / 1024).toFixed(2)} MB (${((1 - tempStat.size / stat.size) * 100).toFixed(1)}% savings)`);
            
            // Replace original with compressed version
            unlinkSync(fullPath);
            renameSync(tempPath, fullPath);
          } catch (err) {
            console.error(`  Error compressing ${fullPath}:`, err);
            try {
              unlinkSync(tempPath);
            } catch (e) {}
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dir}:`, error);
  }
}

console.log('Starting image compression in public/assets/images...');
await processDirectory(targetDir);
console.log('Finished image compression.');
