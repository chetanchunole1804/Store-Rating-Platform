import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Store } from './store.entity';
import { Repository } from 'typeorm';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store)
    private storeRepo: Repository<Store>
  ) {}

  createStore(dto: CreateStoreDto, ownerId: string) {
    const store = this.storeRepo.create({ ...dto, ownerId });
    return this.storeRepo.save(store);
  }

  getAllStores() {
    return this.storeRepo.find();
  }

  getStoreById(id: string) {
    return this.storeRepo.findOne({ where: { id } });
  }

  getStoresByOwner(ownerId: string) {
    return this.storeRepo.find({ where: { ownerId } });
  }

  async updateStore(id: string, dto: UpdateStoreDto) {
    const store = await this.getStoreById(id);
    if (!store) throw new NotFoundException('Store not found');

    Object.assign(store, dto);
    return this.storeRepo.save(store);
  }

  async deleteStore(id: string) {
    const store = await this.getStoreById(id);
    if (!store) throw new NotFoundException('Store not found');

    return this.storeRepo.remove(store);
  }
}
