import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  // OneToMany, // Uncomment when Expense entity is created
} from 'typeorm';
// import { Expense } from '../../expenses/entities/expense.entity'; // Import when Expense entity is created

@Entity('payment_methods')
@Unique(['name']) // Ensure payment method names are unique
export class PaymentMethod {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  name: string; // e.g., 'Cash', 'Bank Transfer', 'Company Card'

  // Optional: Link to expenses using this payment method
  // @OneToMany(() => Expense, (expense) => expense.paymentMethod)
  // expenses: Expense[];

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;
}
