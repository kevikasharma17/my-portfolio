import ffmpeg from 'fluent-ffmpeg';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create thumbnails directory if it doesn't exist
const thumbnailsDir = path.join(__dirname, 'src/assets/Pro Photos for Brand/Reels for Brand\'s Social Media/thumbnails');
if (!fs.existsSync(thumbnailsDir)) {
  fs.mkdirSync(thumbnailsDir, { recursive: true });
}

// Array of videos to process
const videos = [
  { input: 'Reel 01.mp4', output: 'reel-01.jpg' },
  { input: 'Reel 02.mp4', output: 'reel-02.jpg' },
  { input: 'Reel 03.mp4', output: 'reel-03.jpg' },
  { input: 'Reel 04.mp4', output: 'reel-04.jpg' }
];

const baseDir = path.join(__dirname, 'src/assets/Pro Photos for Brand/Reels for Brand\'s Social Media');

videos.forEach(({ input, output }) => {
  const inputPath = path.join(baseDir, input);
  const outputPath = path.join(thumbnailsDir, output);

  ffmpeg(inputPath)
    .screenshots({
      timestamps: ['0'],
      filename: output,
      folder: thumbnailsDir,
      size: '640x360'
    })
    .on('end', () => {
      console.log(`Generated thumbnail for ${input}`);
    })
    .on('error', (err) => {
      console.error(`Error generating thumbnail for ${input}:`, err);
    });
}); 