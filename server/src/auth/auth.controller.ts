import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { Response, Request } from 'express';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() dto: SignupDto, @Res() res: Response) {
    const result = await this.authService.signup(dto);
    return res.json(result);
  }

  @Post('login')
  async login(@Body() dto: LoginDto, @Res() res: Response) {
    const { user, token } = await this.authService.login(dto);
    res.cookie('token', token, { httpOnly: true });
    return res.json({ user });
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  logout(@Res() res: Response) {
    res.clearCookie('token');
    return res.json({ message: 'Logged out successfully' });
  }
}
