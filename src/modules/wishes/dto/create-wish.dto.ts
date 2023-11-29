import { IsNumber, IsPositive, IsString, IsUrl, Length } from 'class-validator';

export default class CreateWishDto {
  @IsString()
  @Length(1, 250)
  name: string;

  @IsUrl()
  link: string;

  @IsUrl()
  image: string;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @IsPositive()
  price: number;

  @IsString()
  @Length(1, 1024)
  description: string;
}