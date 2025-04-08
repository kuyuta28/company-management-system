import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  // OneToMany, // Uncomment for subcategories later
  // ManyToOne, // Uncomment for subcategories later
  // JoinColumn, // Uncomment for subcategories later
} from 'typeorm';
// import { Expense } from '../../expenses/entities/expense.entity'; // Import when Expense entity is created

@Entity('expense_categories')
@Unique(['name']) // Ensure category names are unique
export class ExpenseCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  // Optional: For subcategories later
  // @ManyToOne(() => ExpenseCategory, (category) => category.children, { nullable: true })
  // @JoinColumn({ name: 'parent_category_id' })
  // parent: ExpenseCategory | null;

  // @OneToMany(() => ExpenseCategory, (category) => category.parent)
  // children: ExpenseCategory[];

  // Optional: Link to expenses using this category
  // @OneToMany(() => Expense, (expense) => expense.category)
  // expenses: Expense[];

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;
}
