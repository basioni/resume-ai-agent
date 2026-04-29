import { parsePdf } from "@/lib/pdf";
import { index } from "@/lib/pinecone";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "@langchain/openai";

export class ResumeService {
  async processAndStore(file: File) {
    const buffer = Buffer.from(await file.arrayBuffer());
    const parsed = await parsePdf(buffer);

    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 500,
      chunkOverlap: 50,
    });

    const docs = await splitter.createDocuments([parsed.text]);

    const embeddings = new OpenAIEmbeddings();

    for (const doc of docs) {
      const vector = await embeddings.embedQuery(doc.pageContent);

      await index.upsert([
        {
          id: crypto.randomUUID(),
          values: vector,
          metadata: { text: doc.pageContent },
        },
      ]);
    }
  }
}