import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { RatingService } from './rating.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { Request } from 'express';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';

@Controller('ratings')
@UseGuards(JwtAuthGuard, RolesGuard)
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @Post()
  @Roles('user')
  create(@Body() dto: CreateRatingDto, @Req() req: Request) {
    const userId = req.user['userId'];
    return this.ratingService.create(dto, userId);
  }

  @Get('store/:storeId')
  @Roles('store-owner', 'admin')
  getStoreRatings(@Param('storeId') storeId: string) {
    return this.ratingService.getByStore(storeId);
  }

  @Get('user')
  @Roles('user')
  getMyRatings(@Req() req: Request) {
    const userId = req.user['userId'];
    return this.ratingService.getByUser(userId);
  }

  @Get()
  @Roles('admin')
  getAll() {
    return this.ratingService.getAll();
  }

  @Put(':id')
  @Roles('user')
  update(@Param('id') id: string, @Body() dto: UpdateRatingDto) {
    return this.ratingService.update(id, dto);
  }

  @Delete(':id')
  @Roles('user', 'admin')
  remove(@Param('id') id: string) {
    return this.ratingService.delete(id);
  }
}
