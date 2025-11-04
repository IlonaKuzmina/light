interface MainHeroProps {
  title: string;
}

const SmallHero = ({ title }: MainHeroProps) => {
  return (
    <section className="section-top-padding">
      <div className="container">
        <h1 className="section-title">{title}</h1>
      </div>
    </section>
  );
};

export default SmallHero;
