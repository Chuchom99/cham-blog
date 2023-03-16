import { Controller, Get, Post,  Put, Delete, Body, Param, Request  } from "@nestjs/common";
import { postService } from "./posts.service";

@Controller("posts") 
export class postController {
    constructor (private readonly PostService: postService) {}

    @Get()
    getPost() {
       return this.PostService.findPost()
    };
    @Post()
    createPost(
        @Body("title") prodTitle: string,
        @Body("content") prodContent: string,
    ) {
        const generatedId = this.PostService.createPost(prodTitle, prodContent);
       console.log(generatedId);
      return {id: generatedId};
    };
    @Put(":id")
    updatePost(
        @Param("id") postId: number,
        @Body("title") postTitle: string,
        @Body("content")postContent: string,
        @Request() req: Request
    ) {
        this.PostService.updatePost(postId, postTitle, postContent, req);
        return null;
    };
    @Delete (":id")
    deletePost(
        @Param("id") postId: number
    ) {
       this.PostService.deletePost(postId)
       return null;
    }
}