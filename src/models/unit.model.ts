import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { Product } from "./product.model";

@Entity("units")
export class Unit extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ nullable: false })
  name_unit!: string;

  @Column({ nullable: false, default: true })
  active!: boolean;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", nullable: false })
  create_at: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", nullable: false })
  update_at: Date;

  //relate

  @OneToMany(() => Product, (product) => product.id_unit)
  id_unit: Product[]
}