export interface ResumeChunk {
  id: string;
  text: string;
}

export interface ChatRequest {
  question: string;
}

export interface ChatResponse {
  answer: string;
}