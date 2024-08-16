import Cover from "../app/assets/img/cover.jpg";
import DescImg from "../app/assets/img/relax.jpg";
import SubHeader from "../components/SubHeader";

const HomePage = () => {
  return (
    <div>
      {/* <SubHeader current='Home'/> */}
      <div className="cover">
        <img className="home-img" src={Cover} alt="cover" />
      </div>

      <div className="home-container">
        <section className="home-description-box">
          <div className="home-description">
            <h1>Transform Your Space, Elevate Your Life</h1>
            <p className="home-text">
              At Simple Home, we believe that your home is more than just a
              place—it's a reflection of your style, your personality, and your
              life. Our curated collection of home decor is designed to inspire,
              offering everything you need to create spaces that are not just
              beautiful, but also comfortable, functional, and uniquely yours.
            </p>
            <a className="button" href="/shop">
              Shop furniture
            </a>
          </div>
          <div className="home-desc-img">
            <img className="desc-img" src={DescImg} alt="relax" />
          </div>
        </section>

        <section>
          <h2>Why Choose Us?</h2>
          <div class="grid-3-cols">
            <div>
              <svg
                className="features-icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>

              <p class="features-title">
                <strong>Curated Selection</strong>
              </p>
              <p class="features-text">
                Every item in our collection is handpicked by our team of design
                experts, ensuring that you have access to the latest trends and
                timeless classics.
              </p>
            </div>

            <div>
              <svg
                className="features-icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <p class="features-title">
                <strong>Sustainable Choices</strong>
              </p>
              <p class="features-text">
                We prioritize eco-friendly materials and sustainable practices,
                so you can feel good about the products you bring into your
                home.
              </p>
            </div>

            <div>
              <svg
                className="features-icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                />
              </svg>

              <p class="features-title">
                <strong>Customer Satisfaction</strong>
              </p>
              <p class="features-text">
                Your happiness is our priority. We offer easy returns, fast
                shipping, and a dedicated customer service team to help you
                every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* <section className="feature">
          <div className="feature-title">
            <h2>Explore Our Products</h2>
          </div>
          <ul className="feature-product">
            <li className="feature-item">
              <img></img>
            </li>
            <li className="feature-item">
              <img></img>
            </li>
            <li className="feature-item">
              <img></img>
            </li>
          </ul>
        </section> */}
      </div>
    </div>
  );
};

export default HomePage;
