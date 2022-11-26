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
                                        50+ Best creative website themes & templates
                                    </a>
                                </h3>
                                <p className="text-body-color mb-7 text-base leading-relaxed">
                                    Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                                    Lorem consectetur adipiscing elit.
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
                                        The ultimate UX and UI guide to card design
                                    </a>
                                </h3>
                                <p className="text-body-color mb-7 text-base leading-relaxed">
                                    Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                                    Lorem consectetur adipiscing elit.
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
                                        Creative Card Component designs graphic elements
                                    </a>
                                </h3>
                                <p className="text-body-color mb-7 text-base leading-relaxed">
                                    Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                                    Lorem consectetur adipiscing elit.
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