import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'admin' })
export class AdminEntity {
  @PrimaryGeneratedColumn({ name: 'admin_idx', type: 'smallint' })
  adminIdx: number;

  @Column({ name: 'admin_email', length: 50 })
  adminEmail: string;

  @Column({ name: 'admin_pass', type: 'nvarchar', length: 100 })
  adminPass: string;

  @Column({ name: 'admin_name', length: 300 })
  adminName: string;

  @Column({ name: 'admin_cell', length: 20 })
  adminCell: string;

  @Column({ name: 'company_name', length: 50, nullable: true, default: '에이시지알' })
  companyName: string;

  @Column({ name: 'company_tel', length: 20, nullable: true })
  companyTel: string;

  @Column('tinyint', { name: 'admin_grade_idx', nullable: true })
  adminGradeIdx: number;

  @Column({ name: 'security_use_yn', type: 'enum', enum: ['Y', 'N'], default: 'Y' })
  securityUseYN: 'Y' | 'N';

  @Column({ name: 'approved_yn', type: 'enum', enum: ['Y', 'N'], default: 'Y' })
  approvedYN: 'Y' | 'N';

  @Column({ name: 'login_token', length: 300, nullable: true })
  loginToken: string;

  @Column({ name: 'login_fail_cnt', type: 'tinyint', width: 1, default: 0 })
  loginFailCnt: number;

  @DeleteDateColumn({ name: 'admin_avail', precision: null, type: 'datetime' })
  adminAvail: Date | null;
}
