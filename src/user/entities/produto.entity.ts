import { type } from 'os';
import { emit } from 'process';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EnumCategoria } from '../enum/enum.categoria';

@Entity({ name: 'produto' })
export class ProdutoEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  nome: string;

  @Column('float')
  valor: number;

  @Column()
  descricao: string;

  @Column({ type: 'enum', enum: EnumCategoria })
  categoria: EnumCategoria;
}
