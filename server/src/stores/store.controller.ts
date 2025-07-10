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
import { StoreService } from './store.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { Request } from 'express';

@Controller('stores')
@UseGuards(JwtAuthGuard, RolesGuard)
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get()
  @Roles('admin', 'user', 'store-owner')
  getAllStores() {
    return this.storeService.getAllStores();
  }

  @Get('my')
  @Roles('store-owner')
  getMyStores(@Req() req: Request) {
    const ownerId = req.user['userId'];
    return this.storeService.getStoresByOwner(ownerId);
  }

  @Get(':id')
  @Roles('admin', 'user', 'store-owner')
  getStore(@Param('id') id: string) {
    return this.storeService.getStoreById(id);
  }

  @Post()
  @Roles('admin', 'store-owner')
  create(@Body() dto: CreateStoreDto, @Req() req: Request) {
    const ownerId = req.user['userId'];
    return this.storeService.createStore(dto, ownerId);
  }

  @Put(':id')
  @Roles('admin', 'store-owner')
  update(@Param('id') id: string, @Body() dto: UpdateStoreDto) {
    return this.storeService.updateStore(id, dto);
  }

  @Delete(':id')
  @Roles('admin', 'store-owner')
  remove(@Param('id') id: string) {
    return this.storeService.deleteStore(id);
  }
}
