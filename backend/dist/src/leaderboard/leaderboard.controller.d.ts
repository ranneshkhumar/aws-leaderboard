import { LeaderboardService } from './leaderboard.service';
import { LeaderboardQueryDto } from './dto/leaderboard-query.dto';
import { LeaderboardResponseDto } from './dto/leaderboard-response.dto';
import { LeaderboardMeResponseDto } from './dto/leaderboard-me-response.dto';
export declare class LeaderboardController {
    private readonly leaderboardService;
    constructor(leaderboardService: LeaderboardService);
    getLeaderboard(currentUserId: string | null, query: LeaderboardQueryDto): Promise<LeaderboardResponseDto>;
    getMyStatus(currentUserId: string): Promise<LeaderboardMeResponseDto>;
}
