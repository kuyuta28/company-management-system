import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpenseCategoriesService } from './expense-categories.service';
import { ExpenseCategoriesController } from './expense-categories.controller';
import { ExpenseCategory } from './entities/expense-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExpenseCategory])], // Import TypeOrmModule for the entity
  controllers: [ExpenseCategoriesController],
  providers: [ExpenseCategoriesService],
})
export class ExpenseCategoriesModule {}
