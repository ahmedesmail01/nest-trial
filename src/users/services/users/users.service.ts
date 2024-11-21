import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { id: 1, username: 'ahmed', email: 'ahmed@gmail.com' },
    { id: 2, username: 'Nasr', email: 'Nasr@gmail.com' },
    { id: 3, username: 'Mohamed', email: 'Mohamed@gmail.com' },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    const generatedId = Date.now();
    this.fakeUsers.push({ id: generatedId, ...userDetails });
    return;
  }

  fetchUserById(userId: number) {
    const user = this.fakeUsers.find((user) => user.id === userId);
    if (!user)
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);

    return user;
  }
}
