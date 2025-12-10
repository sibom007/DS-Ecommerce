// lib/match.ts
export function urlMatch(req: Request, pattern: string) {
  const url = new URL(req.url);
  return url.pathname.startsWith(pattern);
}
