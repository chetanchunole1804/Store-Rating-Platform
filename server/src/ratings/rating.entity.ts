import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rating {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  storeId: string;

  @Column()
  userId: string;

  @Column('int')
  value: number;

  @Column({ nullable: true })
  comment?: string;
}
