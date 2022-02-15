import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entities';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  // inject the user service dependency here
  constructor(private usersService: UsersService) {}

  @ApiOkResponse({ type: User, isArray: true })
  @ApiQuery({ name: 'name', required: false })
  @Get()
  getUsers(@Query('name') name?: string): User[] {
    return this.usersService.findAllUser(name);
  }

  @ApiOkResponse({ type: User })
  @ApiNotFoundResponse()
  @Get(':id')
  getUserById(@Param('id') id: string): User {
    const user = this.usersService.findUserById(id);

    if (!user) throw new NotFoundException();

    return user;
  }

  @ApiCreatedResponse({ type: User })
  @Post()
  createUser(@Body() body: CreateUserDto): User {
    return this.usersService.createUser(body);
  }
}
