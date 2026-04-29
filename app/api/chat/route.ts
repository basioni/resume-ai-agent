import { ChatService } from "@/services/ChatService";

export async function POST(req: Request) {
  const { question } = await req.json();

  const service = new ChatService();
  const answer = await service.ask(question);

  return Response.json({ answer });
}