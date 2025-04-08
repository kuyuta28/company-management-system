import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { ExpenseCategory } from '../../expense-categories/entities/expense-category.entity';
import { PaymentMethod } from '../../payment-methods/entities/payment-method.entity';

// Define allowed statuses using an enum
export enum ExpenseStatus {
  NEW = 'New',
  PENDING_APPROVAL = 'Pending Approval',
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
  PAID = 'Paid',
}

@Entity('expenses')
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id', type: 'int', nullable: false })
  userId: number;

  @ManyToOne(() => User, /* (user) => user.createdExpenses, */ { nullable: false, onDelete: 'RESTRICT' }) // Prevent deleting user if they have expenses
  @JoinColumn({ name: 'user_id' })
  user: User; // User who created the expense

  @Column({ name: 'category_id', type: 'int', nullable: false })
  categoryId: number;

  @ManyToOne(() => ExpenseCategory, /* (category) => category.expenses, */ { nullable: false, onDelete: 'RESTRICT' }) // Prevent deleting category if used
  @JoinColumn({ name: 'category_id' })
  category: ExpenseCategory;

  @Column({ name: 'payment_method_id', type: 'int', nullable: false })
  paymentMethodId: number;

  @ManyToOne(() => PaymentMethod, /* (method) => method.expenses, */ { nullable: false, onDelete: 'RESTRICT' }) // Prevent deleting payment method if used
  @JoinColumn({ name: 'payment_method_id' })
  paymentMethod: PaymentMethod;

  @Column({ name: 'expense_date', type: 'date', nullable: false })
  expenseDate: string; // Store as string 'YYYY-MM-DD' or Date object depending on preference/driver

  @Column({ type: 'numeric', precision: 12, scale: 2, nullable: false })
  amount: number; // Use string type if precision issues arise with JS numbers

  @Column({ type: 'varchar', length: 3, nullable: false, default: 'VND' })
  currency: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @Column({ name: 'vendor_payee', type: 'varchar', length: 255, nullable: true })
  vendorPayee: string | null;

  @Column({
    type: 'enum',
    enum: ExpenseStatus,
    nullable: false,
    default: ExpenseStatus.NEW,
  })
  status: ExpenseStatus;

  @Column({ name: 'attachment_url', type: 'varchar', length: 512, nullable: true })
  attachmentUrl: string | null;

  @Column({ name: 'approver_id', type: 'int', nullable: true })
  approverId: number | null;

  @ManyToOne(() => User, /* (user) => user.approvedExpenses, */ { nullable: true, onDelete: 'SET NULL' }) // Allow setting approver to null if user deleted
  @JoinColumn({ name: 'approver_id' })
  approver: User | null; // User who approved/rejected

  @Column({ name: 'approved_at', type: 'timestamptz', nullable: true })
  approvedAt: Date | null;

  // Optional columns for future use
  // @Column({ name: 'project_id', type: 'int', nullable: true })
  // projectId: number | null;

  // @Column({ name: 'department_id', type: 'int', nullable: true })
  // departmentId: number | null;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;
}
