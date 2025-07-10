import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info, context) {
    const req = context.switchToHttp().getRequest();
    const authHeader = req.headers['authorization'] || req.headers['Authorization'];
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '');
      console.log('JWT Token:', token);
    }
    return super.handleRequest(err, user, info, context);
  }
}
