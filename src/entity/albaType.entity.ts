import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Recruitment } from './recruitment.entity';

@Entity('alba_type', { schema: 'acg2022alba' })
export class AlbaType {
  @PrimaryGeneratedColumn({ type: 'tinyint', name: 'alba_type_idx' })
  albaTypeIdx: number;

  @Column('varchar', { name: 'alba_type_desc', length: 15 })
  albaTypeDesc: string;

  @OneToMany(() => Recruitment, (recruitment) => recruitment.albaTypeRelation)
  recruitment: Recruitment[];
}
