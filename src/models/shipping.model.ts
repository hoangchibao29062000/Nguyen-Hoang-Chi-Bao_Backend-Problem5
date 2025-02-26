import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { ShippingProduct } from "./shipping_product.model";

@Entity("shippings")
export class Shipping extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ nullable: false })
  name_shipping!: string;

  @Column({ nullable: false })
  persent!: number;

  @Column({ nullable: false })
  key: string;

  @Column({ nullable: false, default: true })
  active!: boolean;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", nullable: false })
  create_at: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", nullable: false })
  update_at: Date;

  //relate

  @OneToMany(() => ShippingProduct, (Shipping_product) => Shipping_product.id_shipping)
  id_shipping!: ShippingProduct[];
}