import { PrismaService } from '../prisma/prisma.service';
import { LeaderboardResponseDto } from './dto/leaderboard-response.dto';
import { LeaderboardMeResponseDto } from './dto/leaderboard-me-response.dto';
export declare class LeaderboardService {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    getLeaderboard(currentUserId: string | null, search?: string): Promise<LeaderboardResponseDto>;
    getCurrentUserStatus(currentUserId: string): Promise<LeaderboardMeResponseDto>;
    private getGlobalLeaderboard;
    private getLeaderboardWithSearch;
}
