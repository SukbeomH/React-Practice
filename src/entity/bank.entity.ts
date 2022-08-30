import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('bank', { schema: 'acg2022alba' })
export class Bank {
  @PrimaryGeneratedColumn({ type: 'tinyint', name: 'bank_idx' })
  bankIdx: number;

  @Column('varchar', { name: 'bank_name', length: 20 })
  bankName: string;

  @OneToMany(() => User, (user) => user.bankIdxRelation)
  user: User[];
}
