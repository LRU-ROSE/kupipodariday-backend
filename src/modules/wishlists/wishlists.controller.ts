import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';

import JwtAuthGuard from '~modules/auth/guards/jwt-auth.guard.js';

import CreateWishlistDto from './dto/create-wishlist.dto.js';
import UpdateWishlistDto from './dto/update-wishlist.dto.js';
import WishlistsService from './wishlists.service.js';

import type { TWishlist } from './types.js';
import type { TUserRequest } from '~common/types.js';

@UseGuards(JwtAuthGuard)
@Controller('wishlistlists')
export default class WishlistsController {
  constructor(private readonly wishlistsService: WishlistsService) {}

  @Get()
  findAll(): Promise<TWishlist[]> {
    return this.wishlistsService.findAll();
  }

  @Post()
  create(
    @Body() dto: CreateWishlistDto,
    @Req() { user }: TUserRequest,
  ): Promise<TWishlist> {
    return this.wishlistsService.create(dto, user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<TWishlist> {
    return this.wishlistsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() dto: UpdateWishlistDto,
    @Req() { user }: TUserRequest,
  ): Promise<TWishlist> {
    return this.wishlistsService.update(id, dto, user.id);
  }

  @Delete(':id')
  removeOne(
    @Param('id') id: number,
    @Req() { user }: TUserRequest,
  ): Promise<TWishlist> {
    return this.wishlistsService.removeOne(id, user.id);
  }
}
