import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class PostService {
    private posts: Post[] = [];
    private postsUpdate = new Subject<Post[]>();

    constructor(private http: HttpClient) {}

    getPosts() {
        this.http.get<{posts: any}>('http://localhost:3001/api/posts')
        .pipe( map((data) => {
            return data.posts.map((post) => {
                return {
                    id: post._id,
                    title: post.title,
                    content: post.content
                }
            })
        }))
        .subscribe((transformedData) => {
            this.posts = transformedData;
            this.postsUpdate.next([...this.posts]);
        })
    }

    addPost(title: string, content: string) {
        const post: Post = {id : null, title: title, content:content};
        this.http.post<{id: string, title: string, content: string}>('http://localhost:3001/api/posts', post)
        .subscribe((data) => {
            post.id = data.id;
            this.posts.push(data);
            this.postsUpdate.next([...this.posts]);
        })
    }

    deletePost(id: string) {
        this.http.delete(`http://localhost:3001/api/posts/${id}`)
        .subscribe(() => {
            const upddatedPosts = this.posts.filter((post) => post.id !== id);
            this.posts = upddatedPosts;
            this.postsUpdate.next([...this.posts]);
        })
    }

    getPostUpdateListener() {
        return this.postsUpdate.asObservable();
    }
}