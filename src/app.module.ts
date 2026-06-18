import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';

@Module({
  imports: [PrismaModule, LeaderboardModule],
})
export class AppModule {}
