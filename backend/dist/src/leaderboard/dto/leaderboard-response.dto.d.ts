export declare class LeaderboardUserDto {
    rank: number;
    userId: string;
    name: string;
    cloudCredits: number;
}
export declare class LeaderboardRowDto {
    isDivider: boolean;
    rank?: number;
    userId?: string;
    name?: string;
    cloudCredits?: number;
    isCurrentUser?: boolean;
}
export declare class LeaderboardResponseDto {
    currentUser: LeaderboardUserDto | null;
    displayUsers: LeaderboardRowDto[];
}
