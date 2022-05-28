import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { HasPermission } from 'src/permission/has-permission.decorator';
import { RoleService } from './role.service';

@Controller('roles')
export class RoleController {
  constructor(private rollService: RoleService) {}

  @Get()
  @HasPermission('roles')
  async all() {
    return this.rollService.all();
  }

  @Post()
  @HasPermission('roles')
  async create(@Body('name') name: string, @Body('permissions') ids: number[]) {
    return this.rollService.create({
      name,
      permissions: ids.map((id) => ({ id })),
    });
  }
  @Get(':id')
  @HasPermission('roles')
  async get(@Param('id') id: number) {
    return this.rollService.findOne({ id }, ['permissions']);
  }

  @Put(':id')
  async updata(
    @Param('id') id: number,
    @Body('name') name: String,
    @Body('permissions') ids: number[],
  ) {
    this.rollService.update(id, { name });

    const role = await this.rollService.findOne({ id });
    return this.rollService.create({
      ...role,
      permissions: ids.map((id) => ({ id })),
    });
  }

  @Delete(':id')
  @HasPermission('roles')
  async delete(@Param('id') id: number) {
    return this.rollService.delete(id);
  }
}
