import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Recruitment } from './recruitment.entity';

@Index('recruitment_idx', ['recruitmentIdx'], {})
@Entity('apply', { schema: 'acg2022alba' })
export class Apply {
  @Column('smallint', { primary: true, name: 'recruitment_idx' })
  recruitmentIdx: number;

  @Column('smallint', { primary: true, name: 'user_idx' })
  userIdx: number;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'cancel_date', nullable: true })
  cancelDate: Date | null;

  @ManyToOne(() => User, (user) => user.apply, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'user_idx', referencedColumnName: 'userIdx' }])
  userIdxRelation: User;

  @ManyToOne(() => Recruitment, (recruitment) => recruitment.apply, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'recruitment_idx', referencedColumnName: 'recruitmentIdx' }])
  recruitmentIdxRelation: Recruitment;
}
