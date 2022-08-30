import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('wage', { schema: 'acg2022alba' })
export class Wage {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'wage_idx' })
  wageIdx: number;

  @Column('varchar', { name: 'group_name', length: 50 })
  groupName: string;

  @Column('int', { name: 'minutes' })
  minutes: number;

  @Column('int', { name: 'wage_value' })
  wageValue: number;
}
