import React from "react";
import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { CertificationCard } from "./ui/CertificationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define the type for certification
interface Certification {
  title: string;
  issuer: string;
  date: string;
  image: string;
}

const certifications: Certification[] = [
  {
    title: "Flipkart Runway: Season 4 - Online Quiz",
    issuer: "Flipkart",
    date: "Apr 2024",
    image: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/67e12331-5e73-455d-9246-531cd70dc22b.jpg",
  },
  {
    title: "Unstop Talent Park - Tech (MCQ + Coding Assessment)",
    issuer: "Unstop",
    date: "Sept 2024",
    image: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/f1080076-6885-41bd-92b0-72eddb6c42e7.jpg",
  },
];

export function Certifications() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Certifications</SectionTitle>
        <Slider {...settings} className="max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert.title} className="px-4">
              <CertificationCard {...cert} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Certifications;