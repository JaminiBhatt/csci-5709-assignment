import React from 'react';
import './BlogPost.css';
import { Link } from "react-router-dom";
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignRight, faBars, faComment, faHeart, faHeartBroken, faHeartCircleBolt, faSignOut, faThumbsUp, faTimes } from '@fortawesome/free-solid-svg-icons'

const BlogPost = () => {
  const post = {
    title: 'Arc’teryx: Best Quality Jacket Brand',
    content: 'Arc’teryx is a Canadian brand known for its high-quality, durable outdoor clothing. In fact, they’re one of the best outdoor clothing brands in the world. Their winter jackets do well in protecting the user in a multitude of challenging climates. Arc’teryx believes that the only way to build the right gear for such climates is by building the brand in the climate itself. As such, British Columbia’s Coast Mountains have served as the inspiration and testing ground for many of the brand’s products.Through plenty of rigorous testing and research, Arc’teryx is able to provide some of the highest-quality outerwear on the market. And like many of its competitors, the brand uses only premium-quality fabrics and materials.'
      + 'This ensures that their jackets and other outdoor gear items are durable, long-lasting, and provide the best possible performance.'
      + 'Another innovative feature included in many of the brand’s outerwear products is Gore-Tex. This is a waterproof fabric permeable to air and water vapor, making it very breathable, too. From the brand’s broad range of jackets, some of my top picks are the Arc’teryx Beta AR Jacket (men’s/women’s) and the insulated Atom LT Hoody (men’s/women’s). Both of these jackets are windproof, waterproof, and durable, ensuring adequate protection when exploring the outdoors.',
    author: 'Jeremy Scott Foster',
    datePosted: 'May 23, 2023',
    profilePicture: 'https://travelfreak.com/wp-content/uploads/2021/11/best-jacket-brands-1-1200x800.jpg',
  };

function likepost(){
  $('#like').addClass('hithere'); 
}

function commentpost(){
  alert('Subscribe to comment on a post');
}

return (
  <><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css"></link>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <div className='row'>
      <div className='col-md-12'>
        <div className='col-md-1' style={{ padding: 10 }}><FontAwesomeIcon className='icon' icon={faBars} /></div>
        <div className='col-md-10'>
          <div className="blog-post grow">
            <img
              className="picture"
              src={post.profilePicture} />
            <h1>{post.title} </h1>
            <FontAwesomeIcon id="like" onClick={() => { likepost() }} style={{ textAlign: 'right', marginRight: '15px' }} className='icon' icon={faThumbsUp} />
            <FontAwesomeIcon style={{ textAlign: 'right' }} onClick={() => { commentpost() }} className='icon' icon={faComment} />
            <div className="meta-info">
              <p className="author">By {post.author}</p>
              <p className="date-posted">Posted on {post.datePosted}</p>
            </div>
            <p className="content">{post.content}</p>

            <p style={{ textAlign: 'right' }}><Link to={"/FollowingPage"}>Back to following page</Link></p>
          </div>
        </div>
        <div className='col-md-1' style={{ padding: 10, textAlign: 'right' }}><FontAwesomeIcon className='icon' icon={faSignOut} /></div>
      </div>
    </div>
  </>
);
};

export default BlogPost;
