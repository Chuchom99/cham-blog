"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postModule = void 0;
const common_1 = require("@nestjs/common");
const Post_1 = require("../typeorm/entities/Post");
const posts_service_1 = require("./posts.service");
const post_controller_1 = require("./post.controller");
const typeorm_1 = require("@nestjs/typeorm");
let postModule = class postModule {
};
postModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Post_1.Post])],
        controllers: [post_controller_1.postController],
        providers: [posts_service_1.postService],
    })
], postModule);
exports.postModule = postModule;
;
//# sourceMappingURL=post.modulle.js.map