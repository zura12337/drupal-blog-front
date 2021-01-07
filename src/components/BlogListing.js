import { Box } from '@chakra-ui/react';
import React from 'react';
import BlogTeaser from './BlogTeaser';

export default function BlogListing({ blogs }) {
  return (
    <Box w={'100%'} mx={10}>
      {blogs.map(blog => (
        <BlogTeaser key={blog.id} blog={blog} />
      ))}
    </Box>
  );
}
