import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entities';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: '1',
      name: 'Clifford Owusu',
      age: 2,
    },
    {
      id: '2',
      name: 'Michael Owusu',
      age: 4,
    },
  ];

  findAllUser(): User[] {
    return this.users;
  }

  findUserById(id: string): User {
    return this.users.find((user) => user.id === id);
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser: User = {
      id: Date.now().toString(),
      ...createUserDto,
    };

    this.users.push(newUser);

    return newUser;
  }
}
