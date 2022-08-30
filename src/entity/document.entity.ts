import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Contract } from './contract.entity';

@Entity('document', { schema: 'acg2022alba' })
export class Document {
  @PrimaryGeneratedColumn({ type: 'tinyint', name: 'document_idx' })
  documentIdx: number;

  @Column('varchar', { name: 'document_name', nullable: true, length: 50 })
  documentName: string | null;

  @OneToMany(() => Contract, (contract) => contract.documentIdxRelation)
  contract: Contract[];
}
