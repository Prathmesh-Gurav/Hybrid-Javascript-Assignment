//File IO

const fs = require("fs").promises;

const [file1, file2, outputFile] = process.argv.slice(2);

async function mergeFiles(f1, f2, out) {
  try {
    const [content1, content2] = await Promise.all([
      fs.readFile(f1),
      fs.readFile(f2),
    ]);

    const mergedContent = content1 + "\n" + content2;

    await fs.writeFile(out, mergedContent);
    console.log(` Merged content written to '${out}' successfully.`);
  } catch (err) {
    console.error("Error during file merge:", err.message);
  }
}

mergeFiles(file1, file2, outputFile);
