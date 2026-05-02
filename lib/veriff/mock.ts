/**
 * Shufti Pro / Veriff identity verification — mock for MVP.
 * TODO: Implementar depois — REST client + webhooks.
 */
export async function startVerificationMock(userId: string): Promise<{ sessionId: string }> {
  return { sessionId: `mock_${userId.slice(0, 8)}` };
}
