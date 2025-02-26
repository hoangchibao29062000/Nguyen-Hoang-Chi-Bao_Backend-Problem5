import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("users") // Tạo bảng tên "users"
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ unique: true, nullable: false })
  username!: string;

  @Column({ nullable: false })
  password!: string;

  @Column({ nullable: false, default: true })
  active!: boolean;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", nullable: false })
  create_at: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", nullable: false })
  update_at: Date;
}

