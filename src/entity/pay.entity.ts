import { Column, Entity } from 'typeorm';

@Entity('pay', { schema: 'acg2022alba' })
export class Pay {
  @Column('smallint', { name: 'user_idx', primary: true })
  userIdx: number;

  @Column('int', { name: 'pay_amount' })
  payAmount: number;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;
}
