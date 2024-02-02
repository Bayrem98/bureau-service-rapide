import { Card } from "@mui/material";
import React, { useState } from "react";
import { Carousel, CarouselItem } from "reactstrap";

const items = [
  {
    src: "/image/home-image/batiment.jpg",
    altText: "Slide 1",
    key: 1,
  },
  {
    src: "/image/home-image/art.jpg",
    altText: "Slide 2",
    key: 2,
  },
  {
    src: "/image/home-image/sante.jpg",
    altText: "Slide 3",
    key: 3,
  },
  {
    src: "/image/home-image/transport.jpg",
    altText: "Slide 3",
    key: 4,
  },
];
const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          src={item.src}
          alt={item.altText}
          style={{ width: "100%", height: 350 }}
        />
      </CarouselItem>
    );
  });

  return (
    <>
      <div className="" style={{ marginTop: 40 }}>
        <div
          className="d-flex justify-content-between"
          style={{ marginLeft: 70, marginRight: 70 }}
        >
          <div>
            <h1 style={{ color: "#1976d2" }}>Bienvenue chez</h1>
            <p style={{ textAlign: "justify", marginRight: 30, fontSize: 14 }}>
              <span style={{ color: "red", fontSize: 22 }}>
                Bureau Service Rapide
              </span>{" "}
              ,votre partenaire polyvalent pour toutes vos exigences
              professionnelles. Nous sommes bien plus qu'une simple entreprise
              de services; nous sommes votre guichet unique pour la satisfaction
              de vos besoins les plus divers. À Bureau Service Rapide, notre
              engagement envers l'excellence se manifeste dans chaque service
              que nous offrons. Que vous recherchiez une assistance
              administrative, des solutions informatiques avancées, une gestion
              logistique efficace, ou d'autres services spécialisés, nous sommes
              là pour répondre à vos attentes avec rapidité, précision et
              professionnalisme. Notre équipe dédiée de professionnels qualifiés
              est prête à collaborer avec vous pour comprendre vos besoins
              spécifiques et fournir des solutions sur mesure. Nous comprenons
              que chaque entreprise est unique, c'est pourquoi nous nous
              efforçons de personnaliser nos services pour vous offrir une
              expérience exceptionnelle et répondre à vos exigences uniques.
              Chez Bureau Service Rapide, nous croyons en l'efficacité, la
              fiabilité et la rapidité. Notre engagement envers la qualité se
              reflète dans chaque aspect de notre travail, du premier contact à
              la réalisation réussie de chaque mission.
            </p>
          </div>
          <div>
            <img
              src="/image/home-image/service6.jpg"
              alt="."
              width={600}
              height={420}
              style={{ borderRadius: 50 }}
            />
          </div>
        </div>
        <div
          style={{
            marginTop: 20,
            marginBottom: 50,
          }}
        >
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            {slides}
          </Carousel>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ marginLeft: 20, marginRight: 20, marginBottom: 50 }}
        >
          <Card>
            <img
              src="/image/home-image/service2.jpg"
              alt="."
              width={300}
              height={210}
              style={{ borderRadius: 10 }}
            />
          </Card>
          <Card>
            <img
              src="/image/home-image/service4.jpg"
              alt="."
              width={300}
              height={210}
              style={{ borderRadius: 10 }}
            />
          </Card>
          <Card>
            <img
              src="/image/home-image/service3.jpg"
              alt="."
              width={300}
              height={210}
              style={{ borderRadius: 10 }}
            />
          </Card>
          <Card>
            <img
              src="/image/home-image/service5.jpg"
              alt="."
              width={300}
              height={210}
              style={{ borderRadius: 10 }}
            />
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
