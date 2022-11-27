import React from 'react';

const BlogSection = () => {
    return (
        <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
            <div className="container mx-auto">


                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                            <span className="text-rose-700 mb-2 block text-lg font-semibold">
                                Blog Sections                            </span>
                            <h2
                                className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]"
                            >
                                Get Know about Camera                            </h2>
                            <p className="text-body-color text-base">
                                There are many variations of cameras but
                                the majority have lack of opportunity to know about the cameras.
                                We have discussed different important aspects about cameras
                            </p>
                        </div>
                    </div>
                </div>





                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2 xl:w-1/3">
                        <div className="mb-10 overflow-hidden rounded-lg bg-white">
                            <img src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg" alt="" className='w-full' />

                            <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                                <h3>
                                    <a
                                        href="/"
                                        className="text-dark hover:text-rose-700 mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                    >
                                        What kind of camera you should buy
                                    </a>
                                </h3>
                                <p className="text-body-color mb-7 text-base leading-relaxed">
                                    Do you want to know what kind of camera you should buy. Here we have discussed the details of Camera choosing system
                                </p>
                                <a
                                    href="/"
                                    className="text-body-color hover:border-rose-700 hover:bg-rose-700 inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
                                >
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 xl:w-1/3">
                        <div className="mb-10 overflow-hidden rounded-lg bg-white">
                            <img src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-02.jpg" alt=""
                                className="w-full"
                            />
                            <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                                <h3>
                                    <a
                                        href="/"
                                        className="text-dark hover:text-rose-700 mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                    >
                                        The guide to choose best camera
                                    </a>
                                </h3>
                                <p className="text-body-color mb-7 text-base leading-relaxed">
                                    How you can identify the best camera. Here is the utimate guide to buy best choosing best camrea
                                </p>
                                <a
                                    href="/"
                                    className="text-body-color hover:border-rose-700 hover:bg-rose-700 inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
                                >
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 xl:w-1/3">
                        <div className="mb-10 overflow-hidden rounded-lg bg-white">
                            <img
                                src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-03.jpg"
                                alt=""
                                className="w-full"
                            />
                            <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                                <h3>
                                    <a
                                        href="/"
                                        className="text-dark hover:text-rose-700 mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                    >
                                        Creative Picture Ideas
                                    </a>
                                </h3>
                                <p className="text-body-color mb-7 text-base leading-relaxed">
                                    It is not only camera features but you need to know about the creative image ideas to perform the best capture
                                </p>
                                <a
                                    href="/"
                                    className="text-body-color hover:border-rose-700 hover:bg-rose-700 inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
                                >
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default BlogSection;