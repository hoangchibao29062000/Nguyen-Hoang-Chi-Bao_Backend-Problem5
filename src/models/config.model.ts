import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("configs") // Tạo bảng tên "configs"
export class Config extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true, nullable: false })
    key_config: string;

    @Column({ nullable: false })
    name_config: string;

    @Column({ nullable: false })
    value_config: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", nullable: false })
    create_at: Date;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", nullable: false })
    update_at: Date;
}

