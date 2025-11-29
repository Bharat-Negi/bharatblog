import React from "react";

export default function BlogDetails(props:any) {
  return (
    <section id="blog-details" className="blog-details section">
      <div className="container">
        <article className="article">
          <div className="post-img">
            <img src={props.imageUrl} alt="" className="img-fluid" />
          </div>

          <h2 className="title">
            {props.postTitle}
          </h2>

          <div className="meta-top">
            <ul>
              <li className="d-flex align-items-center">
                <i className="bi bi-person"></i>
                <span>{props.author}</span>
              </li>
              <li className="d-flex align-items-center">
                <i className="bi bi-clock"></i>
                <span>
                  <time>{props.date}</time>
                </span>
              </li>
              <li className="d-flex align-items-center">
                <i className="bi bi-chat-dots"></i>
                <span>{props.comments} Comments</span>
              </li>
            </ul>
          </div>

          <div className="content">
            <p>
              Similique neque nam consequuntur ad non maxime aliquam quas.
              Quibusdam animi praesentium. Aliquam et laboriosam eius aut
              nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea
              dolorem doloremque deleniti aperiam unde soluta. Est cum et quod
              quos aut ut et sit sunt. Voluptate porro consequatur assumenda
              perferendis dolore.
            </p>

            <p>
              Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non
              reiciendis. Sequi in accusamus harum vel aspernatur. Excepturi
              numquam nihil cumque odio. Et voluptate cupiditate.
            </p>

            <blockquote>
              <p>
                Et vero doloremque tempore voluptatem ratione vel aut. Deleniti
                sunt animi aut. Aut eos aliquam doloribus minus autem quos.
              </p>
            </blockquote>

            <p>
              Sed quo laboriosam qui architecto. Occaecati repellendus omnis
              dicta inventore tempore provident voluptas mollitia aliquid. Id
              repellendus quia. Asperiores nihil magni dicta est suscipit
              perspiciatis. Voluptate ex rerum assumenda dolores nihil quaerat.
              Dolor porro tempora et quibusdam voluptas. Beatae aut at ad qui
              tempore corrupti velit quisquam rerum. Omnis dolorum
              exercitationem harum qui qui blanditiis neque. Iusto autem itaque.
              Repudiandae hic quae aspernatur ea neque qui. Architecto
              voluptatem magni. Vel magnam quod et tempora deleniti error rerum
              nihil tempora.
            </p>

            <h3>Et quae iure vel ut odit alias.</h3>
            <p>
              Officiis animi maxime nulla quo et harum eum quis a. Sit hic in
              qui quos fugit ut rerum atque. Optio provident dolores atque
              voluptatem rem excepturi molestiae qui. Voluptatem laborum omnis
              ullam quibusdam perspiciatis nulla nostrum. Voluptatum est libero
              eum nesciunt aliquid qui. Quia et suscipit non sequi. Maxime sed
              odit. Beatae nesciunt nesciunt accusamus quia aut ratione
              aspernatur dolor. Sint harum eveniet dicta exercitationem minima.
              Exercitationem omnis asperiores natus aperiam dolor consequatur id
              ex sed. Quibusdam rerum dolores sint consequatur quidem ea. Beatae
              minima sunt libero soluta sapiente in rem assumenda. Et qui odit
              voluptatem. Cum quibusdam voluptatem voluptatem accusamus mollitia
              aut atque aut.
            </p>
            <img
              src="/images/blog/blog-inside-post.jpg"
              className="img-fluid"
              alt=""
            />

            <h3>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
            <p>
              Rerum ea est assumenda pariatur quasi et quam. Facilis nam porro
              amet nostrum. In assumenda quia quae a id praesentium. Quos
              deleniti libero sed occaecati aut porro autem. Consectetur sed
              excepturi sint non placeat quia repellat incidunt labore. Autem
              facilis hic dolorum dolores vel. Consectetur quasi id et optio
              praesentium aut asperiores eaque aut. Explicabo omnis quibusdam
              esse. Ex libero illum iusto totam et ut aut blanditiis. Veritatis
              numquam ut illum ut a quam vitae.
            </p>
            <p>
              Alias quia non aliquid. Eos et ea velit. Voluptatem maxime enim
              omnis ipsa voluptas incidunt. Nulla sit eaque mollitia nisi
              asperiores est veniam.
            </p>
          </div>

          <div className="meta-bottom">
            <i className="bi bi-folder"></i>
            <ul className="cats">
              <li>
                <a href="#">Business</a>
              </li>
            </ul>

            <i className="bi bi-tags"></i>
            <ul className="tags">
              <li>
                <a href="#">Creative</a>
              </li>
              <li>
                <a href="#">Tips</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
