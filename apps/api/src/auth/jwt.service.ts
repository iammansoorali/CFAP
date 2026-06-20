export function generateToken(userId: string): string {
  return `token-${userId}`;
}

export function verifyToken(token: string): boolean {
  return token.startsWith('token-');
}
