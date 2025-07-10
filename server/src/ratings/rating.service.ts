import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rating } from './rating.entity';
import { Repository } from 'typeorm';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';

@Injectable()
export class RatingService {
  constructor(
    @InjectRepository(Rating)
    private ratingRepo: Repository<Rating>
  ) {}

  create(dto: CreateRatingDto, userId: string) {
    const rating = this.ratingRepo.create({ ...dto, userId });
    return this.ratingRepo.save(rating);
  }

  getByStore(storeId: string) {
    return this.ratingRepo.find({ where: { storeId } });
  }

  getByUser(userId: string) {
    return this.ratingRepo.find({ where: { userId } });
  }

  getAll() {
    return this.ratingRepo.find();
  }

  async update(id: string, dto: UpdateRatingDto) {
    const rating = await this.ratingRepo.findOne({ where: { id } });
    if (!rating) throw new NotFoundException('Rating not found');

    Object.assign(rating, dto);
    return this.ratingRepo.save(rating);
  }

  async delete(id: string) {
    const rating = await this.ratingRepo.findOne({ where: { id } });
    if (!rating) throw new NotFoundException('Rating not found');

    return this.ratingRepo.remove(rating);
  }
}
