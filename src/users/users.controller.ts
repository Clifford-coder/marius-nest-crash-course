import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entities';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  // inject the user service dependency here
  constructor(private usersService: UsersService) {}
  @Get()
  getUser(): User[] {
    return this.usersService.findAllUser();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): User {
    return this.usersService.findUserById(id);
  }

  @Post()
  createUser(@Body() body: CreateUserDto): User {
    return this.usersService.createUser(body);
  }
}
