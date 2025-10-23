import { StyledBlogSearchSection } from "./styles/BlogPage.styled";

function BlogSearch() {
  return (
    <StyledBlogSearchSection>
      <h1>Discover our latest posts</h1>
      <p>Explore our latest blog posts and plan your next journey with ease.</p>

      <form>
        <input type="text" placeholder="Search blog posts" />
        <input type="submit" value="Search" />
      </form>
    </StyledBlogSearchSection>
  );
}

export default BlogSearch;
