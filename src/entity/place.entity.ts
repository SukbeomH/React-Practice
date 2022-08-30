import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Recruitment } from './recruitment.entity';
import { Area } from './area.entity';

@Index('area_idx', ['areaIdx'], {})
@Entity('place', { schema: 'acg2022alba' })
export class Place {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'place_idx' })
  placeIdx: number;

  @Column('tinyint', { name: 'area_idx' })
  areaIdx: number;

  @Column('varchar', { name: 'place_name', length: 30 })
  placeName: string;

  @Column('varchar', { name: 'place_address', length: 300 })
  placeAddress: string;

  @Column('datetime', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('datetime', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('datetime', { name: 'deleted_at', nullable: true })
  deletedAt: Date | null;

  @OneToMany(() => Recruitment, (recruitment) => recruitment.placeIdxRelation)
  recruitment: Recruitment[];

  @ManyToOne(() => Area, (area) => area.place, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'area_idx', referencedColumnName: 'areaIdx' }])
  areaIdxRelation: Area;
}
