import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from "embla-carousel-react";
import { PROJECTS } from '../utils/data';
import ProjectCard from '../components/ProjectCard';
import { IoIosArrowForward } from "react-icons/io";

const MyProjects = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const updateScrollButtons = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", updateScrollButtons);
        updateScrollButtons();
    }, [emblaApi, updateScrollButtons]);

    return (
        <section id="projects" className="bg-white mt-14">
            <div className="container mx-auto px-8 md:px-10 py-10">
                <div className="w-full lg:w-[60vw] mx-auto">
                    <h4 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 text-center">
                        Recent Projects
                    </h4>
                    <p className="text-sm text-center mt-4 leading-6">
                        From concept to deployment, these projects showcase my technical
                        expertise. I focus on clean code, performance, and user experience.
                    </p>
                </div>

                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex pt-14 pb-8">
                            {PROJECTS.map((project) => (
                                <div
                                    key={project.id}
                                    onClick={() => window.open(`${project.url}`, '_blank')}
                                    className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33%] cursor-pointer"
                                >
                                    <ProjectCard
                                        imgUrl={project.image}
                                        title={project.title}
                                        tags={project.tags}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Left Arrow */}
                    <button
                        className={`absolute top-1/2 transform -translate-y-1/2 bg-[#d68a39] text-white p-2 rounded-full shadow -left-5 ${
                            !canScrollPrev ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        onClick={() => emblaApi && emblaApi.scrollPrev()}
                        disabled={!canScrollPrev}
                    >
                        <IoIosArrowForward className="rotate-180" />
                    </button>

                    {/* Right Arrow */}
                    <button
                        className={`absolute top-1/2 transform -translate-y-1/2 bg-[#d68a39] text-white p-2 rounded-full shadow -right-5 ${
                            !canScrollNext ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        onClick={() => emblaApi && emblaApi.scrollNext()}
                        disabled={!canScrollNext}
                    >
                        <IoIosArrowForward />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MyProjects;
