import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ExpenseCategoriesService } from './expense-categories.service';
import { CreateExpenseCategoryDto } from './dto/create-expense-category.dto';
import { UpdateExpenseCategoryDto } from './dto/update-expense-category.dto';
import { ExpenseCategory } from './entities/expense-category.entity';

@Controller('api/v1/expense-categories') // Set base route according to API plan
export class ExpenseCategoriesController {
  constructor(
    private readonly expenseCategoriesService: ExpenseCategoriesService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED) // Set appropriate status code for creation
  create(
    @Body() createExpenseCategoryDto: CreateExpenseCategoryDto,
  ): Promise<ExpenseCategory> {
    // TODO: Add authorization checks (e.g., Admin/Finance roles) later
    return this.expenseCategoriesService.create(createExpenseCategoryDto);
  }

  @Get()
  findAll(): Promise<ExpenseCategory[]> {
    // TODO: Add authorization checks (e.g., any authenticated user) later
    return this.expenseCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<ExpenseCategory> {
    // TODO: Add authorization checks later
    // ParseIntPipe automatically validates that 'id' is a number
    return this.expenseCategoriesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateExpenseCategoryDto: UpdateExpenseCategoryDto,
  ): Promise<ExpenseCategory> {
    // TODO: Add authorization checks (e.g., Admin/Finance roles) later
    return this.expenseCategoriesService.update(id, updateExpenseCategoryDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) // Set appropriate status code for successful deletion
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    // TODO: Add authorization checks (e.g., Admin/Finance roles) later
    return this.expenseCategoriesService.remove(id);
  }
}
