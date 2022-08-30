import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Place } from './place.entity';

@Entity('area', { schema: 'acg2022alba' })
export class Area {
  @PrimaryGeneratedColumn({ type: 'tinyint', name: 'area_idx' })
  areaIdx: number;

  @Column('varchar', { name: 'area_name', nullable: true, length: 10 })
  areaName: string | null;

  @OneToMany(() => Place, (place) => place.areaIdxRelation)
  place: Place[];
}
