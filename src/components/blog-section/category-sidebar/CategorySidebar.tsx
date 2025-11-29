import React from "react";

export const CategorySidebar = () => {
  return (
    <div className="widgets-container">
      <div className="blog-author-widget-2 widget-item">
        <div className="d-flex flex-column align-items-center">
          <img
            src="/images/blog/blog-author.jpg"
            className="rounded-circle flex-shrink-0"
            alt=""
          />
          <h4>Jane Smith</h4>
          <div className="social-links">
            <a href="https://x.com/#">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="https://facebook.com/#">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://instagram.com/#">
              <i className="biu bi-instagram"></i>
            </a>
            <a href="https://instagram.com/#">
              <i className="biu bi-linkedin"></i>
            </a>
          </div>

          <p>
            Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed
            possimus accusantium. Quas repellat voluptatem officia numquam sint
            aspernatur voluptas. Esse et accusantium ut unde voluptas.
          </p>
        </div>
      </div>

      <div className="search-widget widget-item">
        <h3 className="widget-title">Search</h3>
        <form action="">
          <input type="text" />
          <button type="submit" title="Search">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>

      <div className="recent-posts-widget widget-item">
        <h3 className="widget-title">Recent Posts</h3>

        <div className="post-item">
          <img
            src="/images/blog/blog-recent-1.jpg"
            alt=""
            className="flex-shrink-0"
          />
          <div>
            <h4>
              <a href="blog-details.html">Nihil blanditiis at in nihil autem</a>
            </h4>
            <time>Jan 1, 2020</time>
          </div>
        </div>

        <div className="post-item">
          <img
            src="/images/blog/blog-recent-2.jpg"
            alt=""
            className="flex-shrink-0"
          />
          <div>
            <h4>
              <a href="blog-details.html">Quidem autem et impedit</a>
            </h4>
            <time>Jan 1, 2020</time>
          </div>
        </div>

        <div className="post-item">
          <img
            src="/images/blog/blog-recent-3.jpg"
            alt=""
            className="flex-shrink-0"
          />
          <div>
            <h4>
              <a href="blog-details.html">
                Id quia et et ut maxime similique occaecati ut
              </a>
            </h4>
            <time>Jan 1, 2020</time>
          </div>
        </div>

        <div className="post-item">
          <img
            src="/images/blog/blog-recent-4.jpg"
            alt=""
            className="flex-shrink-0"
          />
          <div>
            <h4>
              <a href="blog-details.html">Laborum corporis quo dara net para</a>
            </h4>
            <time>Jan 1, 2020</time>
          </div>
        </div>

        <div className="post-item">
          <img
            src="/images/blog/blog-recent-5.jpg"
            alt=""
            className="flex-shrink-0"
          />
          <div>
            <h4>
              <a href="blog-details.html">
                Et dolores corrupti quae illo quod dolor
              </a>
            </h4>
            <time>Jan 1, 2020</time>
          </div>
        </div>
      </div>

      <div className="tags-widget widget-item">
        <h3 className="widget-title">Tags</h3>
        <ul>
          <li>
            <a href="#">App</a>
          </li>
          <li>
            <a href="#">IT</a>
          </li>
          <li>
            <a href="#">Business</a>
          </li>
          <li>
            <a href="#">Mac</a>
          </li>
          <li>
            <a href="#">Design</a>
          </li>
          <li>
            <a href="#">Office</a>
          </li>
          <li>
            <a href="#">Creative</a>
          </li>
          <li>
            <a href="#">Studio</a>
          </li>
          <li>
            <a href="#">Smart</a>
          </li>
          <li>
            <a href="#">Tips</a>
          </li>
          <li>
            <a href="#">Marketing</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
