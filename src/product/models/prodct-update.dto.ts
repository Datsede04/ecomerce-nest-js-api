import { IsNotEmpty } from 'class-validator';

export class ProductUpdateDto {
  title?: String;
  description?: String;
  image?: String;
  price?: String;
}
