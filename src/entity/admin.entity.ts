import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Recruitment } from './recruitment.entity';
import { Grade } from './grade.entity';

@Index('grade_idx', ['gradeIdx'], {})
@Entity('admin', { schema: 'acg2022alba' })
export class Admin {
  @Column('tinyint', { primary: true, name: 'admin_idx' })
  adminIdx: number;

  @Column('tinyint', { name: 'grade_idx', default: 1 })
  gradeIdx: number;

  @Column('varchar', { name: 'admin_email', length: 50 })
  adminEmail: string;

  @Column('varchar', { name: 'admin_name', length: 50 })
  adminName: string;

  @Column('varchar', { name: 'admin_cell', length: 20 })
  adminCell: string;

  @Column('varchar', { name: 'login_token', nullable: true, length: 300 })
  loginToken: string | null;

  @Column('tinyint', { name: 'login_fail_cnt', default:0 })
  loginFailCnt: number;

  @Column('datetime', { name: 'login_at', nullable: true })
  loginAt: Date | null;

  @OneToMany(() => Recruitment, (recruitment) => recruitment.adminIdxRelation)
  recruitmentAdmin: Recruitment[];

  @OneToMany(() => Recruitment, (recruitment) => recruitment.writerIdxRelation)
  recruitmentWriter: Recruitment[];

  @OneToMany(() => Recruitment, (recruitment) => recruitment.editorIdxRelation)
  recruitmentEditor: Recruitment[];

  @ManyToOne(() => Grade, (grade) => grade.admin, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'grade_idx', referencedColumnName: 'gradeIdx' }])
  gradeIdxRelation: Grade;
}
