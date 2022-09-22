import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { AnimeType } from "../../../services/animesService";
import { SlideCard } from "../slideCard";

interface props {
  anime: AnimeType[];
}

export const SlideComponent = ({ anime }: props) => {
  let slideCount = 0;
  if (anime.length > 4) {
    slideCount = 4;
  } else if (anime) {
    slideCount = anime.length;
  }
  return (
    <>
      <div className="d-flex flex-column align-items-center py-4">
        <Splide
          options={{
            type: "loop",
            perPage: slideCount,
            perMove: 1,
            width: slideCount * 300,
            pagination: false,
            arrows: anime.length > 4 ? true : false,
            drag: anime.length > 4 ? true : false,
            breakpoints: {
              1200: {
                perPage: slideCount >= 2 ? 2 : 1,
                width: slideCount >= 2 ? 600 : 300,
                arrows: anime.length > 2 ? true : false,
                drag: anime.length > 2 ? true : false,
              },
              600: {
                perPage: 1,
                width: 300,
                arrows: anime.length > 1 ? true : false,
                drag: anime.length > 1 ? true : false,
              },
              300: {
                width: 250,
              },
            },
          }}
        >
          {anime?.map((anime) => (
            <SplideSlide key={anime.id}>
              <SlideCard anime={anime} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};
