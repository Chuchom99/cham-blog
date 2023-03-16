import { postService } from "./posts.service";
export declare class postController {
    private readonly PostService;
    constructor(PostService: postService);
    getPost(): Promise<import("../typeorm/entities/Post").Post[]>;
    createPost(prodTitle: string, prodContent: string): {
        id: Promise<import("../typeorm/entities/Post").Post>;
    };
    updatePost(postId: number, postTitle: string, postContent: string, req: Request): any;
    deletePost(postId: number): any;
}
