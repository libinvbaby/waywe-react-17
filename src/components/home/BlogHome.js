import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { request } from 'graphql-request';

const BlogHome = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { posts } = await request(
        'https://api-ap-south-1.hygraph.com/v2/clf3we3t74e4r01ugdh21hjyi/master',
        `
          {
            posts(first: 3, orderBy: datePublished_DESC) {
              createdAt
              datePublished
              coverPhoto {
                id
                url
              }
              id
              publishedAt
              slug
              title
              author {
                name
              }
              content {
                html
              }
              smalldesc
            }
          }
        `
      );
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    Aos.init({ duration: 600, easing: 'ease' });
  }, []);

  return (
    <>
      <div className="container py-5">
      <div class="section-title text-center"><h2 class="section-title__title">Recent Blogs</h2></div>
        <div className="row">
          {posts.map((post, index) => (
            <div key={index} className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
              {/* News One Single */}
              <div className="news-one__single">
                <div className="news-one__img">
                  <img src={post.coverPhoto.url} alt="coverphoto blog" />
                  <Link to={`/blog/${post.slug}`}>
                    <span className="news-one__plus" />
                  </Link>
                  {/* <div className="news-one__date-box">
                    <p>{post.datePublished}</p>
                  </div> */}
                </div>
                <div className="news-one__content">
                  <ul className="list-unstyled news-one__meta">
                    <li>
                      <a>
                        <i className="far fa-user-circle" /> by {post.author.name}
                      </a>
                    </li>
                   
                  </ul>
                  <h3 className="news-one__title">
                    <Link to={`https://waywedesign.com/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="news-one__text">{post.smalldesc}</p>
                  <div className="news-one__read-more">
                    <Link to={`https://waywedesign.com/${post.slug}`} className="news-one__read-more-btn">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">

        <Link class="about-one__btn thm-btn" to="/blog">View More</Link>
        </div>
      </div>
    </>
  );
};

export default BlogHome;
