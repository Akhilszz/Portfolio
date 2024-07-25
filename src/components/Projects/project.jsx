import { projectData } from '../projectData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './project.css';

export const Project = () => {
    const mainSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <div id='project' className="project-container">
            <h2 className="project-title">My Works</h2>
            <div className="main-project">
                <Slider {...mainSettings} className='slider'>
                    {projectData.map((data, index) => (
                        <div key={index} className="project-card">
                            <div className="image-container">
                                <img src={data.img1} alt="Project-image" className="project-image" />
                            </div>
                            <div className="project-description">
                                <p>{data.Description}</p>
                            </div>
                            <div className="project-buttons">
                                <button>
                                    <a href={data.LiveLink}>Demo</a>
                                </button>
                                <button>
                                    <a href={data.Github}>Github</a>
                                </button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
