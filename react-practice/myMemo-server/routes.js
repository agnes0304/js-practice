const express = require('express');
const router = express.Router();
const fs = require("fs");


// 전체페이지 GET
router.get('/', (req, res, next)=>{
    fs.readFile('db.json', 'utf8',(err, data)=>{
        if(err) {
            res.status(404).json({ message: 'Something Wrong'})
        } else {
            res.json();
        }
    })
});

// NewPost
router.post('/newpost', (req, res, next)=>{
    const id = Math.random();
    // 이 부분 추가
    const postData = {
        id: id,
        name: req.body.name,
        body: req.body.body,
    };
    fs.readFile('db.json', 'utf8', (err, data) => {
        if(err){
            console.log(err);
        } else {
            const posts = JSON.parse(data);
            posts.unshift(postData);
            fs.writeFile('db.json', JSON.stringify(posts), (err) =>{
                if(err) {
                    console.log(err);
                } else{
                    res.json({msg: 'Stored Success', id:id})
                }
            });
        }
    });
});

// 개별 포스트 Detail
router.get('/:id', (req, res, next)=>{
	const postId = req.params.id;
	const data = fs.readFileSync('db.json', 'utf8');
    const posts = JSON.parse(data);
    const post = posts.find(post => {
        return post.id.toSting() === postId;
    });
    if(!post) {
        return res.status(404).json({ msg: 'not found'});
    } 
    res.json({
        name: post.name, body: post.body
    })
});


module.exports = routers;