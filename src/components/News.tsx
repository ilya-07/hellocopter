import React from "react";
import Title from "../common/Title";
import { news } from "../assets/text";
import { INews } from "../common/types";
import Container from "../common/Container";
import { Link } from "react-router-dom";

interface IProps {}

const News: React.FC<IProps> = (props) => {
  return (
    <section className="bg-[#181818] text-white pb-4 sm:pb-6  lg:pb-[50px]">
      <Container>
        <div>
          <div className="mb-[80px]">
            <Title title="Что у нас нового" subtitle="Новости" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] lg:gap-[24px]">
            {news.map((el: INews, i: number) => (
              <article
                className="grid max-w-[374px] mx-auto grid-cols-1 grid-rows-[auto_auto_auto]"
                key={i}
              >
                <img className="mb-[50px]" src={el.img} alt="img" />
                <h3 className="mb-[10px] text-[22px]">{el.title}</h3>
                <p className="grid grid-cols-1 gap-[25px] grid-rows-[auto_auto]">
                  <span className="text-[16px] font-thin">{el.text}</span>
                  <span>
                    <Link
                      className="text-gr relative after:content-[''] after:absolute after:left-0 after:-bottom-5 after:bg-gr after:w-full after:h-[2px]"
                      to="/news"
                    >
                      Читать полностью
                    </Link>
                  </span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default News;
