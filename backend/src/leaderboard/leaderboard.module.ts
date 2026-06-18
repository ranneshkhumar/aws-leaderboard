import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LeaderboardController } from './leaderboard.controller';
import { LeaderboardService } from './leaderboard.service';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtStrategy } from '../auth/strategies/jwt.strategy';

@Module({
  imports: [
    PrismaModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [LeaderboardController],
  providers: [LeaderboardService, JwtStrategy],
  exports: [LeaderboardService],
})
export class LeaderboardModule {}

