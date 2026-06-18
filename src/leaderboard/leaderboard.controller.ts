import { Controller, Get, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { LeaderboardService } from './leaderboard.service';
import { LeaderboardQueryDto } from './dto/leaderboard-query.dto';
import { LeaderboardResponseDto } from './dto/leaderboard-response.dto';
import { LeaderboardMeResponseDto } from './dto/leaderboard-me-response.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'; // Adjust import path if needed to match the existing codebase
import { CurrentUser } from '../auth/decorators/current-user.decorator'; // Adjust import path if needed to match the existing codebase

@Controller('leaderboard')
@UseGuards(JwtAuthGuard)
export class LeaderboardController {
  constructor(private readonly leaderboardService: LeaderboardService) {}

  /**
   * GET /leaderboard
   * Fetches the global leaderboard or filters by query.search.
   * Leverages validation pipe for query parsing.
   */
  @Get()
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async getLeaderboard(
    @CurrentUser('id') currentUserId: string | null,
    @Query() query: LeaderboardQueryDto,
  ): Promise<LeaderboardResponseDto> {
    return this.leaderboardService.getLeaderboard(currentUserId, query.search);
  }

  /**
   * GET /leaderboard/me
   * Fetches the current authenticated user's leaderboard position.
   * Throws 404 NotFoundException if the user is not found or not an ENTHUSIAST.
   */
  @Get('me')
  async getMyStatus(
    @CurrentUser('id') currentUserId: string,
  ): Promise<LeaderboardMeResponseDto> {
    return this.leaderboardService.getCurrentUserStatus(currentUserId);
  }
}

