import DescImg from "../../app/assets/img/relax.jpg";

const Hero = () => {
  return (

      <section className="grid-col-2">
        <div className="home-description">
          <h1 className="heading-primary">
            Transform Your Space, Elevate Your Life
          </h1>
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
  );
};

export default Hero;
