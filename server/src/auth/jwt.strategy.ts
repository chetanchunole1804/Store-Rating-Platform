import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req) => req?.cookies?.token,
      ]),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'secret123',
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, role: payload.role };
  }
}
