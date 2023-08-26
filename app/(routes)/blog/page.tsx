import Container from "@/components/shared/Container";
import Wrapper from "@/components/shared/Wrapper";
import React from "react";
import Blogs from "./components/Blogs";

const BlogPage = () => {
  return (
    <Container>
      <Wrapper className="px-0">
        <Blogs />
      </Wrapper>
    </Container>
  );
};

export default BlogPage;
