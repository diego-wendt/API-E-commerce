import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EnumCategoria } from '../enum/enum.categoria';
import { CarrinhoEntity } from './carrinho.entity';

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

  @ManyToMany(() => CarrinhoEntity, (produto)=>produto.cesta)
  produtos: CarrinhoEntity[];
}
