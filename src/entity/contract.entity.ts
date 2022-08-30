import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Recruitment } from './recruitment.entity';
import { Document } from './document.entity';

@Index('recruitment_idx', ['recruitmentIdx'], {})
@Index('document_idx', ['documentIdx'], {})
@Entity('contract', { schema: 'acg2022alba' })
export class Contract {
  @Column('smallint', { primary: true, name: 'user_idx' })
  userIdx: number;

  @Column('smallint', { primary: true, name: 'recruitment_idx' })
  recruitmentIdx: number;

  @Column('tinyint', { primary: true, name: 'document_idx' })
  documentIdx: number;

  @Column('varchar', { name: 'contract_url', length: 500 })
  contractUrl: string;

  @ManyToOne(() => User, (user) => user.contract, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'user_idx', referencedColumnName: 'userIdx' }])
  userIdxRelation: User;

  @ManyToOne(() => Recruitment, (recruitment) => recruitment.contract, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'recruitment_idx', referencedColumnName: 'recruitmentIdx' }])
  recruitmentIdxRelation: Recruitment;

  @ManyToOne(() => Document, (document) => document.contract, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'document_idx', referencedColumnName: 'documentIdx' }])
  documentIdxRelation: Document;
}
