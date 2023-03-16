import { Module } from "@nestjs/common";
import { Post } from "src/typeorm/entities/Post";
import { postService } from "./posts.service";
import { postController } from "./post.controller";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Post])],
    controllers: [postController],
    providers: [postService],
})
export class postModule {}; 
