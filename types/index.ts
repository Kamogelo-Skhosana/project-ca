export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface Session {
  id: string;
  userId: string;
  startedAt: Date;
  // ... more
}