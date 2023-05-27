import React from 'react';
import './FollowingPage.css'; // Import the CSS file for styling
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSignOut } from '@fortawesome/free-solid-svg-icons'


const FollowingPage = () => {
  const authors = [
    {
      id: 3,
      name: 'BY JEREMY SCOTT',
      title: 'Arc’teryx: Best Quality Jacket Brand',
      profilePicture: 'https://travelfreak.com/wp-content/uploads/2021/11/best-jacket-brands-1-1200x800.jpg',
      blogPost: 'Arc’teryx is a Canadian brand known for its high-quality, durable outdoor clothing. In fact, they’re one of the best outdoor clothing brands in the world. Their winter jackets do well in protecting the user in a multitude of challenging climates. Arc’teryx believes that the only way to build the right gear for such climates is by building the brand in the climate itself. As such, British Columbia’s Coast Mountains have served as the inspiration and testing ground for many of the brand’s products. ',
    },
    {
      id: 2,
      name: 'BY NICK AND HANNAH',
      title: '6 Best Things to do in Batur, Bali',
      profilePicture: 'https://static.saltinourhair.com/wp-content/uploads/2019/11/23125318/things-to-do-munduk-Handara-Gate-728x600.jpg',
      blogPost: 'The beautiful area around the Mount Batur volcano, one of the four sacred mountains in Bali, is home to stunning sunrises, black lava fields, natural hot springs, and delicious coffee. Come for a day or two, so you can make the famous trek up to the volcano’s summit at sunrise. There you’ll be met by panoramic golden views over the whole of Bali! Best of all, you’ll still have time to rest, recover, and discover the magic and serenity of this healing landscape. Don’t miss out on all the best things to do in Batur, Bali, with our complete guide.',
    },
    {
      id: 3,
      name: 'BY THE TRAVEL BOOK',
      title: 'Denmark',
      profilePicture: 'https://thetravelbook.world/wp-content/uploads/2020/08/Scandinavia-2.png',
      blogPost: 'Denmark – the land of beautiful coastlines, innovative architecture, and a very old history marked by village churches and Viking castles. The land that invented their own concept – hygge – which basically means having a good time. And Danes do enjoy having a good time. You see it in the food culture, the local beers, their many holidays, and their love for candy. Denmark has all the charm both in culture and nature.',
    },

    // Add more authors here
  ];


  return (
    <><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css"></link>
    <div className="following-page ">
      <div className='row'>
        <div className='col-md-12'>
          <div className='col-md-1' style={{padding: 10}}><FontAwesomeIcon className='icon' icon={faBars}/></div>
          <div className='col-md-10'>
            <h1>Following Page</h1>
            <div className="author-list grow">
              {authors.map(author => (
                <div key={author.id} className="author-card">
                  <img
                    className="profile-picture"
                    src={author.profilePicture}
                    alt={`Profile picture of ${author.name}`} />
                  <h2>{author.name}</h2>
                  <p>{author.blogPost}</p>
                  <Link to={"/BlogPost"}>
                    More...
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className='col-md-1' style={{ padding: 10, textAlign: 'right'}}><FontAwesomeIcon className='icon' icon={faSignOut} /></div>
        </div>
      </div>
    </div></>
  );
};

export default FollowingPage;
