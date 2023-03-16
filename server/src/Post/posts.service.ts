// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Post } from 'src/typeorm/entities/Post';
// import { Repository } from 'typeorm';

// @Injectable()
// export class postService {
//   constructor(
//     @InjectRepository(Post) private postRepository: Repository<Post>, {
    
//   } )  {}
//   findPost() {
//     //
//   };
//   createPost() {
//     //
//   };
//   updatePost() {
//     //
//   };
//   deletePost() {
//     //
//   }
// }

// post.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/typeorm/entities/Post';
import { Repository } from 'typeorm';

@Injectable()
export class postService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}

  async findPost(): Promise<Post[]> {
    return await this.postRepository.find();
  }

  async createPost(title: string, content: string): Promise<Post> {
    const post = new Post();
    post.title = title;
    post.content = content;
    return await this.postRepository.save(post);
  }

  async updatePost(id: number, title: string, content: string, req: any ): Promise<Post> {
    const post = await this.postRepository.findOne({ where: { id: parseInt(id.toString(), 10) } });
    if (!post) {
      throw new Error(`Post with id ${id} not found`);
    }
    post.title = title;
    post.content = content;
    return await this.postRepository.save(post);
  };

  async deletePost(id: number): Promise<void> {
    await this.postRepository.delete(id);
  }
}

// (id: number, title: string, content: string, req: any): Promise<Post> {
//     const post = await this.postRepository.findOne({where: {id: parseInt(req.params.id, 10)}});
//     post.title = title;
//     post.content = content;
//     return await this.postRepository.save(post);
//   }