import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  OneToMany,
} from 'typeorm';
// import { Expense } from '../../expenses/entities/expense.entity'; // Import when Expense entity is created

// Define allowed roles using an enum for better type safety and maintainability
export enum UserRole {
  ADMIN = 'Admin',
  FINANCE = 'Finance',
  MANAGER = 'Manager',
  EMPLOYEE = 'Employee',
}

@Entity('users')
@Unique(['email']) // Ensure email addresses are unique
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  email: string;

  @Column({ name: 'password_hash', type: 'varchar', length: 255, nullable: false, select: false }) // Exclude password hash from default selects
  passwordHash: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    nullable: false,
  })
  role: UserRole;

  // Optional: Link to expenses created by this user
  // @OneToMany(() => Expense, (expense) => expense.user)
  // createdExpenses: Expense[];

  // Optional: Link to expenses approved by this user
  // @OneToMany(() => Expense, (expense) => expense.approver)
  // approvedExpenses: Expense[];

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;
}
