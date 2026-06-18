"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LeaderboardService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaderboardService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let LeaderboardService = LeaderboardService_1 = class LeaderboardService {
    constructor(prisma) {
        this.prisma = prisma;
        this.logger = new common_1.Logger(LeaderboardService_1.name);
    }
    async getLeaderboard(currentUserId, search) {
        try {
            if (search && search.trim().length > 0) {
                return await this.getLeaderboardWithSearch(currentUserId, search.trim());
            }
            return await this.getGlobalLeaderboard(currentUserId);
        }
        catch (error) {
            this.logger.error(`Failed to retrieve leaderboard: ${error.message}`, error.stack);
            throw error;
        }
    }
    async getCurrentUserStatus(currentUserId) {
        try {
            const results = await this.prisma.$queryRaw `
        WITH RankedUsers AS (
          SELECT
            id AS "userId",
            name,
            (COALESCE(xp, 0) + COALESCE(eventxp, 0)) AS "cloudCredits",
            RANK() OVER (ORDER BY (COALESCE(xp, 0) + COALESCE(eventxp, 0)) DESC)::integer AS rank
          FROM "User"
          WHERE role = 'ENTHUSIAST'
        )
        SELECT name, "cloudCredits", rank
        FROM RankedUsers
        WHERE "userId" = ${currentUserId};
      `;
            if (!results || results.length === 0) {
                throw new common_1.NotFoundException(`User with ID ${currentUserId} is not ranked on the leaderboard because they are not an ENTHUSIAST.`);
            }
            const userRow = results[0];
            return {
                rank: userRow.rank,
                cloudCredits: userRow.cloudCredits,
                name: userRow.name,
            };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            this.logger.error(`Failed to retrieve current user status: ${error.message}`, error.stack);
            throw error;
        }
    }
    async getGlobalLeaderboard(currentUserId) {
        const results = await this.prisma.$queryRaw `
      WITH RankedUsers AS (
        SELECT
          id AS "userId",
          name,
          (COALESCE(xp, 0) + COALESCE(eventxp, 0)) AS "cloudCredits",
          RANK() OVER (ORDER BY (COALESCE(xp, 0) + COALESCE(eventxp, 0)) DESC)::integer AS rank,
          ROW_NUMBER() OVER (
            ORDER BY 
              (COALESCE(xp, 0) + COALESCE(eventxp, 0)) DESC, 
              COALESCE(eventxp, 0) DESC, 
              "updatedAt" DESC, 
              id ASC
          )::integer AS row_num
        FROM "User"
        WHERE role = 'ENTHUSIAST'
      ),
      CurrentUserDetails AS (
        SELECT "userId", rank, row_num
        FROM RankedUsers
        WHERE "userId" = ${currentUserId}
      )
      SELECT 
        r."userId",
        r.name,
        r."cloudCredits",
        r.rank,
        r.row_num
      FROM RankedUsers r
      LEFT JOIN CurrentUserDetails c ON TRUE
      WHERE 
        r.row_num <= 3
        OR
        ((c.row_num <= 3 OR c.row_num IS NULL) AND r.row_num > 3 AND r.row_num <= 6)
        OR
        (c.row_num > 3 AND r.row_num >= c.row_num - 1 AND r.row_num <= c.row_num + 1)
      ORDER BY r.row_num ASC;
    `;
        const topThreeRaw = results.filter((r) => r.row_num <= 3);
        const topThreeDtos = topThreeRaw.map((r) => ({
            isDivider: false,
            rank: r.rank,
            userId: r.userId,
            name: r.name,
            cloudCredits: r.cloudCredits,
            isCurrentUser: r.userId === currentUserId,
        }));
        const currentUserRaw = results.find((r) => r.userId === currentUserId);
        const currentUser = currentUserRaw
            ? {
                rank: currentUserRaw.rank,
                userId: currentUserRaw.userId,
                name: currentUserRaw.name,
                cloudCredits: currentUserRaw.cloudCredits,
            }
            : null;
        let displayUsers = [];
        if (currentUserRaw && currentUserRaw.row_num > 4) {
            displayUsers.push(...topThreeDtos);
            displayUsers.push({ isDivider: true });
            const aboveUser = results.find((r) => r.row_num === currentUserRaw.row_num - 1);
            const belowUser = results.find((r) => r.row_num === currentUserRaw.row_num + 1);
            if (aboveUser) {
                displayUsers.push({
                    isDivider: false,
                    rank: aboveUser.rank,
                    userId: aboveUser.userId,
                    name: aboveUser.name,
                    cloudCredits: aboveUser.cloudCredits,
                    isCurrentUser: aboveUser.userId === currentUserId,
                });
            }
            displayUsers.push({
                isDivider: false,
                rank: currentUserRaw.rank,
                userId: currentUserRaw.userId,
                name: currentUserRaw.name,
                cloudCredits: currentUserRaw.cloudCredits,
                isCurrentUser: true,
            });
            if (belowUser) {
                displayUsers.push({
                    isDivider: false,
                    rank: belowUser.rank,
                    userId: belowUser.userId,
                    name: belowUser.name,
                    cloudCredits: belowUser.cloudCredits,
                    isCurrentUser: belowUser.userId === currentUserId,
                });
            }
        }
        else {
            displayUsers = results.slice(0, 6).map((r) => ({
                isDivider: false,
                rank: r.rank,
                userId: r.userId,
                name: r.name,
                cloudCredits: r.cloudCredits,
                isCurrentUser: r.userId === currentUserId,
            }));
        }
        const uniqueDisplayUsers = [];
        const seenUserIds = new Set();
        for (const row of displayUsers) {
            if (row.isDivider) {
                uniqueDisplayUsers.push(row);
            }
            else if (row.userId && !seenUserIds.has(row.userId)) {
                seenUserIds.add(row.userId);
                uniqueDisplayUsers.push(row);
            }
        }
        return {
            currentUser,
            displayUsers: uniqueDisplayUsers,
        };
    }
    async getLeaderboardWithSearch(currentUserId, search) {
        const searchPattern = `%${search}%`;
        const userContextResults = await this.prisma.$queryRaw `
      WITH RankedUsers AS (
        SELECT
          id AS "userId",
          name,
          (COALESCE(xp, 0) + COALESCE(eventxp, 0)) AS "cloudCredits",
          RANK() OVER (ORDER BY (COALESCE(xp, 0) + COALESCE(eventxp, 0)) DESC)::integer AS rank
        FROM "User"
        WHERE role = 'ENTHUSIAST'
      )
      SELECT * FROM RankedUsers 
      WHERE "userId" = ${currentUserId};
    `;
        const currentUserRaw = userContextResults[0];
        const currentUser = currentUserRaw
            ? {
                rank: currentUserRaw.rank,
                userId: currentUserRaw.userId,
                name: currentUserRaw.name,
                cloudCredits: currentUserRaw.cloudCredits,
            }
            : null;
        const searchResults = await this.prisma.$queryRaw `
      WITH RankedUsers AS (
        SELECT
          id AS "userId",
          name,
          (COALESCE(xp, 0) + COALESCE(eventxp, 0)) AS "cloudCredits",
          RANK() OVER (ORDER BY (COALESCE(xp, 0) + COALESCE(eventxp, 0)) DESC)::integer AS rank,
          COALESCE(eventxp, 0) AS "eventxp",
          "updatedAt",
          id
        FROM "User"
        WHERE role = 'ENTHUSIAST'
      )
      SELECT "userId", name, "cloudCredits", rank FROM RankedUsers 
      WHERE name ILIKE ${searchPattern} 
      ORDER BY 
        rank ASC, 
        "eventxp" DESC, 
        "updatedAt" DESC, 
        id ASC
      LIMIT 50;
    `;
        const displayUsers = searchResults.map((r) => ({
            isDivider: false,
            rank: r.rank,
            userId: r.userId,
            name: r.name,
            cloudCredits: r.cloudCredits,
            isCurrentUser: r.userId === currentUserId,
        }));
        return {
            currentUser,
            displayUsers,
        };
    }
};
exports.LeaderboardService = LeaderboardService;
exports.LeaderboardService = LeaderboardService = LeaderboardService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LeaderboardService);
//# sourceMappingURL=leaderboard.service.js.map