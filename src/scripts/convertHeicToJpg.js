import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PHOTOS_DIR = path.join(process.cwd(), 'src/assets/Photos');

async function convertHeicToJpg() {
  try {
    // Read all files in the Photos directory
    const files = fs.readdirSync(PHOTOS_DIR);

    // Filter for HEIC files
    const heicFiles = files.filter(file => 
      file.toLowerCase().endsWith('.heic') || file.toLowerCase().endsWith('.HEIC')
    );

    console.log(`Found ${heicFiles.length} HEIC files to convert`);

    // Convert each HEIC file
    for (const file of heicFiles) {
      const filePath = path.join(PHOTOS_DIR, file);
      const outputPath = path.join(PHOTOS_DIR, file.replace(/\.(heic|HEIC)$/, '.jpg'));

      console.log(`Converting ${file}...`);

      try {
        // Use sips to convert HEIC to JPEG
        await execAsync(`sips -s format jpeg "${filePath}" --out "${outputPath}"`);
        console.log(`Successfully converted ${file} to JPG`);

        // Optionally delete the original HEIC file
        // fs.unlinkSync(filePath);
        // console.log(`Deleted original HEIC file: ${file}`);
      } catch (error) {
        console.error(`Error converting ${file}:`, error);
      }
    }

    console.log('Conversion process completed');
  } catch (error) {
    console.error('Error during conversion process:', error);
  }
}

// Run the conversion
convertHeicToJpg(); 