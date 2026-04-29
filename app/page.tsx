// /app/page.tsx
import Upload from "@/components/Upload";
import Chat from "@/components/Chat";

export default function Home() {
  return (
    <main className="min-h-screen p-8 flex flex-col gap-8">
      <h1 className="text-2xl font-bold">Resume AI Agent</h1>

      <section>
        <h2 className="text-xl mb-2">Upload Resume</h2>
        <Upload />
      </section>

      <section>
        <h2 className="text-xl mb-2">Chat</h2>
        <Chat />
      </section>
    </main>
  );
}