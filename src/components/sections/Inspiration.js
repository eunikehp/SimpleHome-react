import Inspiration1 from "../../app/assets/img/inspiration1.jpg";
import Inspiration2 from "../../app/assets/img/inspiration2.jpg";
import Inspiration3 from "../../app/assets/img/inspiration3.jpg";

const Inspiration = () => {
  return (
    <section className="inspiration">
      <div className="inspiration-title">
        <h2>Inspiration & Ideas</h2>
      </div>
      <ul className="inspiration-list">
        <li className="inspiration-block">
          <img
            className="inspiration-item"
            src={Inspiration1}
            alt="Color-trends"
          />
          <div className="inspiration-text">
            <h6>Color Trends for Every Season</h6>
            <p>
              Discover the latest color trends that will keep your home stylish
              all year round. From warm, earthy tones in the fall to vibrant
              pastels in the spring, our seasonal color guides will help you
              refresh your space with the perfect palette.
            </p>
          </div>
        </li>
        <li className="inspiration-block">
          <img
            className="inspiration-item"
            src={Inspiration2}
            alt="DIY-project"
          />
          <div className="inspiration-text">
            <h6>DIY Projects to Personalize Your Space</h6>
            <p>
              Get hands-on with our easy and creative DIY projects. Whether
              you're looking to upcycle old furniture, create custom wall art,
              or add unique touches to your home, our step-by-step guides will
              inspire your inner designer.
            </p>
          </div>
        </li>
        <li className="inspiration-block">
          <img
            className="inspiration-item"
            src={Inspiration3}
            alt="small-spaces-big-style"
          />
          <div className="inspiration-text">
            <h6>Small Spaces, Big Style</h6>
            <p>
              Learn how to make the most of your space with our tips for
              decorating small areas. From smart storage solutions to
              multi-functional furniture, we'll show you how to maximize every
              square foot without sacrificing style.
            </p>
          </div>
        </li>
        {/* <li className="inspiration-block">
          <img
            className="inspiration-item"
            src={Inspiration3}
            alt="small-spaces-big-style"
          />
          <div className="inspiration-text">
            <h6>Mixing Modern & Vintage</h6>
            <p>
              Create a home that tells a story by blending modern pieces with
              vintage finds. Our guide to mixing styles will help you strike the
              perfect balance between old and new, making your space both
              timeless and contemporary.
            </p>
          </div>
        </li> */}
      </ul>
    </section>
  );
};

export default Inspiration;
