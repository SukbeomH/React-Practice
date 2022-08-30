import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { User } from './user.entity';

@Entity('black_list', { schema: 'acg2022alba' })
export class BlackList {
  @Column('smallint', { primary: true, name: 'user_idx' })
  userIdx: number;

  @Column('enum', { name: 'black_yn', enum: ['Y', 'N'], default: 'N' })
  blackYn: 'Y' | 'N';

  @Column('tinyint', { name: 'pre_cancel_cnt', default: 0 })
  preCancelCnt: number;

  @Column('tinyint', { name: 'late_cnt', default: 0})
  lateCnt: number;

  @Column('tinyint', { name: 'not_attend_cnt', default: 0})
  notAttendCnt: number;

  @Column('tinyint', { name: 'dress_cnt', default: 0 })
  dressCnt: number;

  @Column('tinyint', { name: 'attitude_cnt', default: 0 })
  attitudeCnt: number;

  @Column('tinyint', { name: 'etc_cnt', default: 0})
  etcCnt: number;

  @Column('varchar', { name: 'memo', nullable: true, length: 100 })
  memo: string | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @OneToOne(() => User, (user) => user.blackList, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'user_idx', referencedColumnName: 'userIdx' }])
  userIdxRelation: User;
}
