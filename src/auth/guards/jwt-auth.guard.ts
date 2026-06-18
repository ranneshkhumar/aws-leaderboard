import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any, context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const isPublic = this.isPublicRoute(request);

    if (err || !user) {
      if (isPublic) {
        return null; // For public routes, proceed without throwing (user remains null)
      }
      throw err || new UnauthorizedException('Missing or invalid token');
    }
    return user; // Set request.user to the validated user
  }

  private isPublicRoute(request: any): boolean {
    const path = request.path || request.url;
    const method = request.method;
    
    // Normalize path to ignore trailing slashes and query parameters
    const normalizedPath = path ? path.split('?')[0].replace(/\/+$/, '') : '';
    
    // GET /leaderboard is public, but GET /leaderboard/me is protected
    return method === 'GET' && normalizedPath === '/leaderboard';
  }
}

