import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProdutoEntity } from './produto.entity';

@Entity({ name: 'carrinho' })
export class CarrinhoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  usuario: string;

  @ManyToMany(()=>ProdutoEntity)
  @JoinTable()
  cesta: ProdutoEntity[];
}
