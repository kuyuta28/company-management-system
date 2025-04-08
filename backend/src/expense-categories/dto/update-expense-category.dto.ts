import { PartialType } from '@nestjs/mapped-types';
import { CreateExpenseCategoryDto } from './create-expense-category.dto';

// PartialType makes all properties of CreateExpenseCategoryDto optional
export class UpdateExpenseCategoryDto extends PartialType(CreateExpenseCategoryDto) {}
