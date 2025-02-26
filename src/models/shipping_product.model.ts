import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinTable, ManyToOne } from "typeorm";
import { Shipping } from './shipping.model';
import { Product } from "./product.model";

@Entity("shipping_products")
export class ShippingProduct extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ nullable: false })
  costs_ship_list!: string;

  @Column({ nullable: false })
  costs_ship!: string;

  @Column({ nullable: false, default: true })
  active!: boolean;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", nullable: false })
  create_at: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", nullable: false })
  update_at: Date;

  //relatetionship

  @ManyToOne(() => Shipping, (shipping) => shipping.id_shipping)
  id_shipping!: Shipping;

  @ManyToOne(() => Product, (product) => product.id_product)
  id_product!: Product;
}