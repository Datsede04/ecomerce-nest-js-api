import { IsNotEmpty } from 'class-validator';

export class ProductCreateDto {
  @IsNotEmpty()
  title: String;

  @IsNotEmpty()
  description: String;

  @IsNotEmpty()
  image: String;

  @IsNotEmpty()
  price: String;
}
