import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMError } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { postModule } from './Post/post.modulle';
import {Post} from "./typeorm/entities/Post"

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "Twiste11",
    database: "blog",
    entities: [Post],
    synchronize: true
  }),
  postModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
