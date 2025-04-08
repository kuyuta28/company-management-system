import { IsString, IsNotEmpty, MaxLength, IsOptional } from 'class-validator';

export class CreateExpenseCategoryDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsString()
  @IsOptional() // Description is optional
  description?: string;

  // Add parent_category_id later if needed for subcategories
  // @IsInt()
  // @IsOptional()
  // parentCategoryId?: number;
}
