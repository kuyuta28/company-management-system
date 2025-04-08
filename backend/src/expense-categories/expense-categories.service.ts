import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExpenseCategoryDto } from './dto/create-expense-category.dto';
import { UpdateExpenseCategoryDto } from './dto/update-expense-category.dto';
import { ExpenseCategory } from './entities/expense-category.entity';

@Injectable()
export class ExpenseCategoriesService {
  constructor(
    @InjectRepository(ExpenseCategory)
    private readonly categoryRepository: Repository<ExpenseCategory>,
  ) {}

  async create(
    createExpenseCategoryDto: CreateExpenseCategoryDto,
  ): Promise<ExpenseCategory> {
    const newCategory = this.categoryRepository.create(createExpenseCategoryDto);
    return this.categoryRepository.save(newCategory);
  }

  async findAll(): Promise<ExpenseCategory[]> {
    return this.categoryRepository.find();
  }

  async findOne(id: number): Promise<ExpenseCategory> {
    const category = await this.categoryRepository.findOne({ where: { id } });
    if (!category) {
      throw new NotFoundException(`ExpenseCategory with ID ${id} not found`);
    }
    return category;
  }

  async update(
    id: number,
    updateExpenseCategoryDto: UpdateExpenseCategoryDto,
  ): Promise<ExpenseCategory> {
    // Preload checks if the entity exists and loads it, then merges new data
    const category = await this.categoryRepository.preload({
      id: id,
      ...updateExpenseCategoryDto,
    });
    if (!category) {
      throw new NotFoundException(`ExpenseCategory with ID ${id} not found`);
    }
    return this.categoryRepository.save(category);
  }

  async remove(id: number): Promise<void> {
    const category = await this.findOne(id); // Reuse findOne to check existence
    // Use remove for potential cascade operations or softDelete if configured
    // Use delete for direct deletion without loading entity first (slightly faster)
    const result = await this.categoryRepository.delete(id);
    if (result.affected === 0) {
      // Should not happen if findOne succeeded, but good practice
      throw new NotFoundException(`ExpenseCategory with ID ${id} not found`);
    }
    // For soft delete, you would use: await this.categoryRepository.softRemove(category);
  }
}
