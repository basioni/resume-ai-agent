const pdf = require("pdf-parse");

export async function parsePdf(buffer: Buffer) {
  return pdf(buffer);
}