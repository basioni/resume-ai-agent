export function initLangchain() {
  process.env.LANGCHAIN_TRACING_V2 = "true";
  process.env.LANGCHAIN_PROJECT = "resume-ai-agent";
}