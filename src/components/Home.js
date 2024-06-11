import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BlogItem from './BlogItem';


function Home() {
  const blogData = [
  {
    title: 'First Blog Post',
    content: 'This is the content of the first blog post.'
  },
  {
    title: 'Second Blog Post',
    content: 'This is the content of the second blog post.'
  },
  // Add more blog objects here
];
  return (
    <div>
      <Header />
      <h2>Welcome to My Blog!</h2>
      <p>This is my awesome blog. Enjoy reading!</p>
      {blogData.map((blog, index) => (
        <BlogItem key={index} title={blog.title} content={blog.content} />
      ))}


      {/* Add blog post list component */}
	  {/*     <BlogList />*/}	  
      <Footer />
    </div>
  );
}

export default Home;
