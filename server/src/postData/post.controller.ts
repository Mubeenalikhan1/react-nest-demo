import {
  Controller,
  Param,
  Get,
} from '@nestjs/common';

import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get(':id')
  create(@Param('id') id: number) {
    return this.postService.getPostData(id);
  }
  
  @Get()
  findAll(): any {
    return this.postService.getAllPost();
  }
}
