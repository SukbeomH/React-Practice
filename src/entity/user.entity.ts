import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Apply } from './apply.entity';
import { Contract } from './contract.entity';
import { Grade } from './grade.entity';
import { Bank } from './bank.entity';
import { BlackList } from './blackList.entity';

@Index('grade_idx', ['gradeIdx'], {})
@Index('friend_idx', ['friendIdx'], {})
@Index('bank_idx', ['bankIdx'], {})
@Entity('user', { schema: 'acg2022alba' })
export class User {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'user_idx' })
  userIdx: number;

  @Column('tinyint', { name: 'grade_idx' })
  gradeIdx: number;

  @Column('smallint', { name: 'friend_idx', nullable: true })
  friendIdx: number | null;

  @Column('tinyint', { name: 'bank_idx', nullable: true })
  bankIdx: number | null;

  @Column('varchar', { name: 'user_name', length: 50 })
  userName: string;

  @Column('varchar', { name: 'user_cell', length: 20 })
  userCell: string;

  @Column('varchar', { name: 'user_birth', length: 10 })
  userBirth: string;

  @Column('varchar', { name: 'user_address', nullable: true, length: 300 })
  userAddress: string | null;

  @Column('varchar', { name: 'user_code', length: 6 })
  userCode: string;

  @Column('varchar', { name: 'user_password', length: 500 })
  userPassword: string;

  @Column('varchar', { name: 'user_email', length: 50 })
  userEmail: string;

  @Column('varchar', { name: 'user_job', nullable: true, length: 20 })
  userJob: string | null;

  @Column('varchar', { name: 'account_owner', nullable: true, length: 50 })
  accountOwner: string | null;

  @Column('varchar', { name: 'account_number', nullable: true, length: 50 })
  accountNumber: string | null;

  @Column('datetime', { name: 'limited_date', nullable: true })
  limitedDate: Date | null;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => Apply, (apply) => apply.userIdxRelation)
  apply: Apply[];

  @OneToMany(() => Contract, (contract) => contract.userIdxRelation)
  contract: Contract[];

  @ManyToOne(() => Grade, (grade) => grade.user, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'grade_idx', referencedColumnName: 'gradeIdx' }])
  gradeIdxRelation: Grade;

  @ManyToOne(() => User, (user) => user.user, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'friend_idx', referencedColumnName: 'userIdx' }])
  friendIdxRelation: User;

  @OneToMany(() => User, (user) => user.friendIdxRelation)
  user: User[];

  @ManyToOne(() => Bank, (bank) => bank.user, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'bank_idx', referencedColumnName: 'bankIdx' }])
  bankIdxRelation: Bank;

  @OneToOne(() => BlackList, (blackList) => blackList.userIdxRelation)
  blackList: BlackList;
}
