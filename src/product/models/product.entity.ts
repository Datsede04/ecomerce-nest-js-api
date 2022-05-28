import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: String;

  @Column()
  description: String;

  @Column()
  image: String;

  @Column()
  price: String;
}
