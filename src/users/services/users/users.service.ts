import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'ahmed', email: 'ahmed@gmail.com' },
    { username: 'Nasr', email: 'Nasr@gmail.com' },
    { username: 'Mohamed', email: 'Mohamed@gmail.com' },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }
}
