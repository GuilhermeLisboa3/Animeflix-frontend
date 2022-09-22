import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { AnimeType } from '../../../services/animesService';
import { SlideCard } from '../slideCard';

interface props{
    anime: AnimeType[]
}

export const SlideComponent = ({anime}:props)=>{
    return (
        <>
            <div>
                <Splide options={{
                    type:"loop",
                    perPage:4,
                    perMove:1,
                    pagination:false
                }}>
                    {anime?.map((anime)=>(
                        <SplideSlide key={anime.id}>
                            <SlideCard anime={anime}/>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </>
    )
}