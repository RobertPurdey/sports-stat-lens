import { env } from '@/config/env';

export async function apiFetch<T>(path: string): Promise<T> {
  const response = await fetch(`${env.apiBaseUrl}/${path}`);

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}