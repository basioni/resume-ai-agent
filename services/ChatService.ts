import { index } from "@/lib/pinecone";
import { OpenAIEmbeddings, OpenAI } from "@langchain/openai";

export class ChatService {
  async ask(question: string) {
    const embeddings = new OpenAIEmbeddings();
    const queryVector = await embeddings.embedQuery(question);

    const results = await index.query({
      vector: queryVector,
      topK: 5,
      includeMetadata: true,
    });

    const context = results.matches
      .map((m) => m.metadata?.text)
      .join("\n");

    const model = new OpenAI({ temperature: 0 });

    const response = await model.invoke(`
      You are a resume analysis assistant.
      Use only the context below:

      ${context}

      Question: ${question}
    `);

    return response;
  }
}