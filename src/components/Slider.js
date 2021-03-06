import { Box, Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Slide } from "react-slideshow-image";
import { RiNewspaperFill } from "react-icons/ri";

export default function Slider({ latestBlogs }) {
  const icon = useColorModeValue("black", "white");

  return (
    <Box h="90vh" w="60vw" ml="20vw" mt="10vh" backgroundColor="gray">
      <Flex h="40px">
        <RiNewspaperFill fill={icon} size="18px" />
        <Text
          fontWeight="bold"
          display="flex"
          height="18px"
          alignItems="center"
          fontSize="18px"
          ml="5px"
        >
          Latest News
        </Text>
      </Flex>
      {latestBlogs.length > 0 ? (
        <Box
          borderRadius="15px"
          overflow="hidden"
          boxShadow="0 2px 5px rgba(0,0,0,.25)"
        >
          <Slide>
            {latestBlogs.map((blog) => (
              <Link
                key={blog.id}
                _hover={{ textDecoration: "none" }}
                textDecoration="none"
                href={`/blog/${blog.id}`}
              >
                <Flex
                  alignItems="flex-end"
                  h={"70vh"}
                  backgroundImage={`linear-gradient(0deg, rgba(0,0,0,.45) 0%, rgba(255,255,255,0) 100%), url(http://localhost${blog.fieldImage.uri.url})`}
                  backgroundSize="cover"
                >
                  <Text
                    fontWeight="bold"
                    color="white"
                    fontSize="30px"
                    verticalAlign="bottom"
                    key={blog.id}
                    p="30px 60px"
                  >
                    {blog.title}
                  </Text>
                </Flex>
              </Link>
            ))}
          </Slide>
        </Box>
      ) : (
        <Box>
          <Text
            fontSize={24}
            fontFamily={"heading"}
            fontWeight="bold"
            textAlign="center"
            verticalAlign="center"
          >
            No Blogs
          </Text>
        </Box>
      )}
    </Box>
  );
}
