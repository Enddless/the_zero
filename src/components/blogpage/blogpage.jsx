import Header from "../header/header";
import Blog from "../blog/blog"
import Footer from "../footer/footer";
import './blogpage.css';


function BlogPage() {


  return (
    <section className="blogpage">
      <Header />
      <div className="container blog-block">
        <h1 className="blog-block__title heading1">View Our blog list</h1>
        <h5 className="blog-block__subtitle heading5">It is easy way to create your beatiful blog for daily</h5>
        <div className="blog-block__table">
          <Blog />
        </div>

      </div>
      <Footer />
    </section>
  );
}

export default BlogPage;
