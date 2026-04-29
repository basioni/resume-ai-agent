import { ResumeService } from "@/services/ResumeService";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  const service = new ResumeService();
  await service.processAndStore(file);

  return Response.json({ success: true });
}