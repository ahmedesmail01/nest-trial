import { UsersService } from './../../services/users/users.service';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
// import { Request, Response } from 'express';
import { createUser } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private UserService: UsersService) {}
  @Get()
  getUsers() {
    return this.UserService.fetchUsers();
  }

  @Get('posts')
  getPosts() {
    return [
      {
        username: 'ahmed',
        email: 'ahmed@gmail.com',
        posts: [{ id: 1, title: 'post1' }],
      },
      {
        username: 'Nasr',
        email: 'Nasr@gmail.com',
        posts: [{ id: 2, title: 'post2' }],
      },
      {
        username: 'Mohamed',
        email: 'Mohamed@gmail.com',
        posts: [{ id: 3, title: 'post3' }],
      },
    ];
  }

  @Get('/posts/comments')
  getComments() {
    return [
      {
        id: 1,
        title: 'post 1',
        comments: [
          {
            id: 1,
            text: 'comment 1',
          },
          {
            id: 2,
            text: 'comment 1',
          },
          {
            id: 3,
            text: 'comment 1',
          },
        ],
      },
      {
        id: 1,
        title: 'post 1',
        comments: [
          {
            id: 1,
            text: 'comment 1',
          },
        ],
      },
      {
        id: 1,
        title: 'post 1',
        comments: [
          {
            id: 1,
            text: 'comment 1',
          },
        ],
      },
    ];
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: createUser) {
    console.log(userData.email);
    return {};
  }

  @Get(':id')
  getUserById(
    @Param('id', ParseIntPipe) id: number,
    @Query('sortBy') sortBy: string,
  ) {
    console.log(id, sortBy);
    return {};
  }

  @Get(':id/:postId')
  getPostById(@Param('id') id: string, @Param('postId') postId: string) {
    console.log(postId);

    return { id, postId };
  }
}
