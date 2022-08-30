import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('check_list', { schema: 'acg2022alba' })
export class CheckList {
  @PrimaryGeneratedColumn({ type: 'tinyint', name: 'check_idx' })
  checkIdx: number;

  @Column('varchar', { name: 'check_text', length: 500 })
  checkText: string;
}
