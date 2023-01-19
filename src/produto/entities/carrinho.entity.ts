import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProdutoEntity } from './produto.entity';

@Entity({ name: 'carrinho' })
export class CarrinhoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  usuario: string;

  @ManyToMany(() => ProdutoEntity, (cesta)=>cesta.produtos, { cascade: true })
  @JoinTable()
  cesta: ProdutoEntity[];

  addProdutos(products: any[]) {
    if (this.cesta == null) {
      this.cesta = new Array<ProdutoEntity>();
    }
    this.cesta.push(...products);
  }
}
