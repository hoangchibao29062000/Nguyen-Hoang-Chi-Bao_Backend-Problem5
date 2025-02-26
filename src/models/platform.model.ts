import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { Product } from "./product.model";

@Entity("platforms")
export class Platform extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ nullable: false })
    name_platform!: string;

    @Column({ nullable: false, default: true })
    active!: boolean;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", nullable: false })
    create_at: Date;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", nullable: false })
    update_at: Date;

    //relate

    @OneToMany(() => Product, (product) => product.id_platform)
    id_platform: Product[]
}