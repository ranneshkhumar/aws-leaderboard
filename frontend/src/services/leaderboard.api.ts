import { LeaderboardResponseDto, LeaderboardMeResponseDto } from '../types/leaderboard.types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export class LeaderboardApiService {
  private baseUrl: string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || API_BASE_URL || '';
  }

  /**
   * Fetch leaderboard data.
   * If search is provided, calls GET /leaderboard?search=query
   */
  async getLeaderboard(token: string | null, search?: string): Promise<LeaderboardResponseDto> {
    const queryParams = new URLSearchParams();
    if (search && search.trim()) {
      queryParams.append('search', search.trim());
    }

    const url = `${this.baseUrl}/leaderboard${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
    
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch leaderboard: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Fetch current authenticated user's stats
   */
  async getMe(token: string): Promise<LeaderboardMeResponseDto> {
    const url = `${this.baseUrl}/leaderboard/me`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch user ranking context: ${response.statusText}`);
    }

    return response.json();
  }
}
