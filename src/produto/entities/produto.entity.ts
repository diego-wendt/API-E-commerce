import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EnumCategoria } from '../enum/enum.categoria';

@Entity({ name: 'Produto' })
export class ProdutoEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  nome: string;

  @Column()
  valor: number;

  @Column()
  descricao: string;

  @Column({ type: 'enum', enum: EnumCategoria })
  categoria: EnumCategoria;
}
