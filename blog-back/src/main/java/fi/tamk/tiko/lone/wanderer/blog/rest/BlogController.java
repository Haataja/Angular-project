/*
Blog application that provides platform for blogging.
Copyright (C) 2019  Hanna Haataja <hanna.haataja@tuni.fi>

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
 */
package fi.tamk.tiko.lone.wanderer.blog.rest;

import fi.tamk.tiko.lone.wanderer.blog.blog.BlogPost;
import fi.tamk.tiko.lone.wanderer.blog.blog.BlogRepository;
import fi.tamk.tiko.lone.wanderer.blog.blog.Comment;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
public class BlogController {
    Logger log = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private BlogRepository blogRepository;


    @RequestMapping("/user")
    public ResponseEntity<?> user(Principal user) {
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @RequestMapping("/posts")
    public ResponseEntity<Iterable<BlogPost>> getPosts(){
        return new ResponseEntity<>(blogRepository.findAllByOrderByIdDesc(), HttpStatus.OK);
    }

    @RequestMapping("/posts/{id}")
    public ResponseEntity<BlogPost> getPost(@PathVariable long id){
        if(blogRepository.findById(id).isPresent()){
            return new ResponseEntity<>(blogRepository.findById(id).get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/posts/add")
    public ResponseEntity<?> addPost(@RequestBody BlogPost blogPost){
        //log.debug(blogPost.getAuthor() + " : " + blogPost.getTitle() + " : " + blogPost.getPost() + " : "+blogPost.getUrl() + " : ");
        return new ResponseEntity<>(blogRepository.save(blogPost), HttpStatus.CREATED);
    }

    @PostMapping("/posts/modify/{id}")
    public ResponseEntity<?> modifyPost(@RequestBody BlogPost blogPost, @PathVariable long id){
        //log.debug("POST: {}", blogPost.getPost());
        if(blogRepository.findById(id).isPresent()){
            BlogPost firstBlogPost = blogRepository.findById(id).get();
            firstBlogPost.setAuthor(blogPost.getAuthor());
            firstBlogPost.setPost(blogPost.getPost());
            firstBlogPost.setTitle(blogPost.getTitle());
            if(blogPost.getUrl() != null){
                firstBlogPost.setUrl(blogPost.getUrl());
            }
            blogRepository.save(firstBlogPost);
            return new ResponseEntity<>(firstBlogPost, HttpStatus.OK);
        }else {
            return new ResponseEntity<>(blogPost, HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(value = "/posts/delete/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deletePost(@PathVariable long id){
        if(blogRepository.findById(id).isPresent()){
            blogRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/comment/add/{id}")
    public ResponseEntity<?> addComment(@PathVariable long id,@RequestBody Comment comment){
        log.info("id: {} and comment {}", id, comment.toString());
        if(blogRepository.findById(id).isPresent()){
            log.debug("Got the post!");
            BlogPost blogPost = blogRepository.findById(id).get();
            comment.setBlogPost(blogPost);
            blogPost.getCommentList().add(comment);
            blogRepository.save(blogPost);
            return new ResponseEntity<>(blogPost.getCommentList(),HttpStatus.OK);
        } else {
            return new ResponseEntity<>(comment,HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(value = "/comment/delete/{postID}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteComment(@PathVariable long postID, @RequestParam long commentId){
        if(blogRepository.findById(postID).isPresent()){
            BlogPost blogPost = blogRepository.findById(postID).get();
            blogPost.getCommentList().removeIf(c -> c.getId() == commentId);
            blogRepository.save(blogPost);
            return new ResponseEntity<>(blogPost,HttpStatus.OK);
        } else {
            return new ResponseEntity<>(postID,HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping("/posts/like/{postID}")
    public ResponseEntity<Integer> likePost(@PathVariable long postID){
        //log.debug("Getting a like");
        if(blogRepository.findById(postID).isPresent()){
            BlogPost blogPost = blogRepository.findById(postID).get();
            blogPost.setLikes(blogPost.getLikes() + 1);
            blogRepository.save(blogPost);
            return new ResponseEntity<>(blogPost.getLikes(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(0, HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping("/posts/unlike/{postID}")
    public ResponseEntity<Integer> unlikePost(@PathVariable long postID){
        //log.debug("Getting a like");
        if(blogRepository.findById(postID).isPresent()){
            BlogPost blogPost = blogRepository.findById(postID).get();
            blogPost.setLikes(blogPost.getLikes() - 1);
            blogRepository.save(blogPost);
            return new ResponseEntity<>(blogPost.getLikes(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(0, HttpStatus.NOT_FOUND);
        }
    }
}
