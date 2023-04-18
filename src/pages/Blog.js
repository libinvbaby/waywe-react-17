import React,{useEffect,useState} from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { Helmet } from "react-helmet";
import BlogCard from "../components/BlogCard";
import {post} from '../components/services/api'
const Blog = () => {
  const [posts, setPosts] = useState();
  const[loading, setLoading] = useState(true);
  useEffect(()=>{
    post().then(res=>{
      setPosts(res)
      setLoading(false);
    
      }).catch(e =>{
  console.log(e)
})
  },[])
  return (
    <    >
      <Helmet>
        <title>Blog - Way WeDesign</title>
        <meta name="description" content="Blog" />
      </Helmet>
 
      <Breadcrumbs pageurl="Blog" subtitle="BLOG" />
       {!loading && <>
       <BlogCard  item={posts.posts}/> 
       </>}
    </>
  );
};

export default Blog;
