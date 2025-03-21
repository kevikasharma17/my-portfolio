import * as fs from 'fs';
import * as path from 'path';
import heic2any from 'heic2any';

const PHOTOS_DIR = path.join(process.cwd(), 'src/assets/Photos');

async function convertHeicToJpg() {
  try {
    // Read all files in the Photos directory
    const files = fs.readdirSync(PHOTOS_DIR);

    // Filter for HEIC files
    const heicFiles = files.filter((file: string) => 
      file.toLowerCase().endsWith('.heic') || file.toLowerCase().endsWith('.HEIC')
    );

    console.log(`Found ${heicFiles.length} HEIC files to convert`);

    // Convert each HEIC file
    for (const file of heicFiles) {
      const filePath = path.join(PHOTOS_DIR, file);
      const outputPath = path.join(PHOTOS_DIR, file.replace(/\.(heic|HEIC)$/, '.jpg'));

      console.log(`Converting ${file}...`);

      try {
        // Read the HEIC file
        const buffer = fs.readFileSync(filePath);
        const blob = new Blob([buffer]);

        // Convert to JPEG
        const convertedBlob = await heic2any({
          blob,
          toType: 'image/jpeg',
          quality: 0.9
        });

        // Convert blob to buffer
        const finalBlob = Array.isArray(convertedBlob) ? convertedBlob[0] : convertedBlob;
        const arrayBuffer = await finalBlob.arrayBuffer();
        const jpgBuffer = new Uint8Array(arrayBuffer);

        // Write the JPG file
        fs.writeFileSync(outputPath, jpgBuffer);
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