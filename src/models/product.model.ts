import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany } from "typeorm";
import { Unit } from "./unit.model";
import { ShippingProduct } from "./shipping_product.model";
import { Platform } from "./platform.model";

@Entity("products")
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ nullable: false })
  name_product!: string;

  @Column({ nullable: false, default: 0 })
  price_input!: number;

  @Column({ nullable: false, default: 0 })
  price_sell!: number;

  @Column({ nullable: false, default: 0 })
  percent_profit!: number;

  @Column({ nullable: false, default: 0 })
  profit!: number;

  @Column({ nullable: false, default: false })
  is_sale!: boolean;

  @Column({ nullable: false, default: 0 })
  price_sale_list!: number;

  @Column({ nullable: false, default: 0 })
  profit_sale!: number;

  @Column({ nullable: false, default: 0 })
  percent_sale!: number;

  @Column({ nullable: false, default: false })
  is_voucher!: boolean;

  @Column({ nullable: false, default: 0 })
  percent_voucher!: number;

  @Column({ nullable: false, default: 0 })
  price_voucher_list!: number;

  @Column({ nullable: false, default: 0 })
  profit_voucher!: number;

  @Column({ nullable: false, default: 0 })
  percent_costs_platform!: number;

  @Column({ nullable: false, default: 0 })
  costs_platform!: number;

  @Column({ nullable: false, default: 0 })
  percent_costs_payment!: number;

  @Column({ nullable: false, default: 0 })
  costs_payment!: number;

  @Column({ nullable: false, default: 0 })
  percent_costs_box!: number;

  @Column({ nullable: false, default: 0 })
  costs_box!: number;

  @Column({ nullable: false, default: 0 })
  percent_costs_operating!: number;

  @Column({ nullable: false, default: 0 })
  costs_operating!: number;

  @Column({ nullable: false, default: 0 })
  percent_costs_tax!: number;

  @Column({ nullable: false, default: 0 })
  costs_tax!: number;

  @Column({ nullable: false, default: 0 })
  percent_costs_ads!: number;

  @Column({ nullable: false, default: 0 })
  costs_ads!: number;

  @Column({ nullable: false, default: 0 })
  percent_costs_affilate!: number;

  @Column({ nullable: false, default: 0 })
  costs_affilate!: number;

  @Column({ nullable: false, default: '' })
  list_shipping!: string;

  @Column({ nullable: false, default: 0 })
  total_costs!: number;

  @Column({ nullable: false, default: 0 })
  price_listing!: number;

  @Column({ type: 'text', nullable: false })
  images!: string;

  @Column({ nullable: false, default: 0 })
  quantity_imported!: number;

  @Column({ nullable: false, default: 0 })
  quantity_tock!: number;

  @Column({ nullable: false, default: "" })
  description_product!: string;

  @Column({ nullable: false, default: true })
  active!: boolean;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", nullable: false })
  create_at: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", nullable: false })
  update_at: Date;

  //relate

  @ManyToOne(() => Platform, (platform) => platform.id_platform)
  id_platform: Platform

  @ManyToOne(() => Unit, (unit) => unit.id_unit)
  id_unit: Unit

  @OneToMany(() => ShippingProduct, (shippingProduct) => shippingProduct.id_product)
  id_product!: ShippingProduct[];
}