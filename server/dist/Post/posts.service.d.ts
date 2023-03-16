import { Post } from 'src/typeorm/entities/Post';
import { Repository } from 'typeorm';
export declare class postService {
    private postRepository;
    constructor(postRepository: Repository<Post>);
    findPost(): Promise<Post[]>;
    createPost(title: string, content: string): Promise<Post>;
    updatePost(id: number, title: string, content: string, req: any): Promise<Post>;
    deletePost(id: number): Promise<void>;
}
