import Inspiration1 from '../../app/assets/img/inspiration1.jpg';
import Inspiration2 from '../../app/assets/img/inspiration2.jpg';
import Inspiration3 from '../../app/assets/img/inspiration3.jpg';


const Inspiration = () => {
    return (
        <section className="inspiration">
          <div className="inspiration-title">
            <h2>Inspiration & Ideas</h2>
          </div>
          <ul className="inspiration-list">
            <li className="inspiration-block">
              <img className="inspiration-item" src={Inspiration1} alt="Color-trends" />
              <h5>Color Trends for Every Season</h5>
              <p>
                Discover the latest color trends that will keep your home
                stylish all year round. From warm, earthy tones in the fall to
                vibrant pastels in the spring, our seasonal color guides will
                help you refresh your space with the perfect palette.
              </p>
            </li>
            <li className="inspiration-block">
              <img className="inspiration-item" src={Inspiration2} alt="DIY-project" />
              <h5>DIY Projects to Personalize Your Space</h5>
              <p>
                Get hands-on with our easy and creative DIY projects. Whether
                you're looking to upcycle old furniture, create custom wall art,
                or add unique touches to your home, our step-by-step guides will
                inspire your inner designer.
              </p>
            </li>
            <li className="inspiration-block">
              <img
                className="inspiration-item"
                src={Inspiration3}
                alt="small-spaces-big-style"
              />
              <h5>Small Spaces, Big Style</h5>
              <p>
                Learn how to make the most of your space with our tips for
                decorating small areas. From smart storage solutions to
                multi-functional furniture, we'll show you how to maximize every
                square foot without sacrificing style.
              </p>
            </li>
          </ul>
        </section>
    );
};

export default Inspiration;