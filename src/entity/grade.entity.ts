import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Admin } from './admin.entity';

@Entity('grade', { schema: 'acg2022alba' })
export class Grade {
  @PrimaryGeneratedColumn({ type: 'tinyint', name: 'grade_idx' })
  gradeIdx: number;

  @Column('varchar', { name: 'grade_name', length: 10 })
  gradeName: string;

  @OneToMany(() => User, (user) => user.gradeIdxRelation)
  user: User[];

  @OneToMany(() => Admin, (admin) => admin.gradeIdxRelation)
  admin: Admin[];
}
