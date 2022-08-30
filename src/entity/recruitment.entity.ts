import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Apply } from './apply.entity';
import { Contract } from './contract.entity';
import { Admin } from './admin.entity';
import { Place } from './place.entity';
import { AlbaType } from './albaType.entity';

@Index('admin_idx', ['adminIdx'], {})
@Index('writer_idx', ['writerIdx'], {})
@Index('editor_idx', ['editorIdx'], {})
@Index('place_idx', ['placeIdx'], {})
@Index('alba_type_idx', ['albaTypeIdx'], {})
@Entity('recruitment', { schema: 'acg2022alba' })
export class Recruitment {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'recruitment_idx' })
  recruitmentIdx: number;

  @Column('tinyint', { name: 'admin_idx' })
  adminIdx: number;

  @Column('tinyint', { name: 'writer_idx' })
  writerIdx: number;

  @Column('tinyint', { name: 'editor_idx' })
  editorIdx: number;

  @Column('smallint', { name: 'place_idx' })
  placeIdx: number;

  @Column('tinyint', { name: 'alba_type_idx' })
  albaTypeIdx: number;

  @Column('int', { name: 'wage', default: 0 })
  wage: number;

  @Column('datetime', { name: 'recruitment_start_at' })
  recruitmentStartAt: Date;

  @Column('datetime', { name: 'recruitment_end_at' })
  recruitmentEndAt: Date;

  @Column('varchar', { name: 'recruitment_text', length: 500 })
  recruitmentText: string;

  @Column('int', { name: 'arrived_key' })
  arrivedKey: number;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('datetime', { name: 'deleted_at', nullable: true })
  deletedAt: Date | null;

  @OneToMany(() => Apply, (apply) => apply.recruitmentIdxRelation)
  apply: Apply[];

  @OneToMany(() => Contract, (contract) => contract.recruitmentIdxRelation)
  contract: Contract[];

  @ManyToOne(() => Admin, (admin) => admin.recruitmentAdmin, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'admin_idx', referencedColumnName: 'adminIdx' }])
  adminIdxRelation: Admin;

  @ManyToOne(() => Admin, (admin) => admin.recruitmentWriter, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'writer_idx', referencedColumnName: 'adminIdx' }])
  writerIdxRelation: Admin;

  @ManyToOne(() => Admin, (admin) => admin.recruitmentEditor, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'editor_idx', referencedColumnName: 'adminIdx' }])
  editorIdxRelation: Admin;

  @ManyToOne(() => Place, (place) => place.recruitment, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'place_idx', referencedColumnName: 'placeIdx' }])
  placeIdxRelation: Place;

  @ManyToOne(() => AlbaType, (albaType) => albaType.recruitment, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'alba_type_idx', referencedColumnName: 'albaTypeIdx' }])
  albaTypeRelation: AlbaType;
}
