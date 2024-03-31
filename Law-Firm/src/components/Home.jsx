import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "./Navbar";
import "./Home.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img1 from "../assets/images/team.jpg";
import Footer from "./Footer";
// import Contact from "./Contact";

const Home = () => {
  const [showModal, setShowModal] = useState(true);
  const [opacity, setOpacity] = useState(1);

  const handleAgree = () => {
    setOpacity(0);
    setTimeout(() => {
      setShowModal(false);
      setOpacity(1);
    }, 500);
  };

  return (
    <>
      {showModal && (
        <div className="modal w-full h-screen">
          <div className="fixed p-3 md:p-7 border border-black blur-0 rounded-lg bg-white md:min-h-[70%] top-[9%] h-[87%] w-[80%] md:w-[47%] left-[9%] md:top-[10%] md:left-[26%]">
            <h1 className="text-[25px] font-semibold">Disclaimer</h1>
            <p className="text-[12px] md:text-[16px] mb-2">
              The rules of the Bar Council of India do not permit advertisement
              or solicitation by Advocates in any form or manner.
            </p>
            <p className="text-[12px] md:text-[16px]">
              This website{" "}
              <span className="text-blue-600 mb-5">
                rhs-law-chambers.netlify.app
              </span>{" "}
              and the contents there of are merely for informational purposes
              and not in the nature of solicitation or an advertisement.
              Similarly, any matter / information / content posted by RHS Law
              Chambers on this website shall not be construed as legal advice.
            </p>
            <p className="text-[14px] md:text-[16px] hidden md:block mb-5">
              RHS Law Chambers takes no liability for consequences of any action
              taken by you relying on the matter/ information / content posted
              on this website.
            </p>
            <p className="text-[14px] md:text-[16px] hidden md:block">
              It is to be noted that no offer of recruitment is made by RHS Law
              Chambers wherein any payments are to be made by the prospective
              candidates to anyone. If any such solicitation is sought, the same
              is fraudulent and should be ignored.
            </p>
            <br />
            <p className="text-[12px] md:text-[16px]">
              By entering this website, you confirm and acknowledge that you
              have voluntarily sought the information relating to and/or posted
              by RHS Law Chambers and there has been no solicitation /
              advertisement / inducement by either RHS Law Chambers and/or its
              partners and/or its members.
            </p>
            <div className="flex items-center mt-2 gap-3 justify-center">
              <button
                className="p-3 rounded-lg hover:rounded-[23px] hover:text-white bg-red-400 hover:bg-red-600 text-[18px]"
                onClick={handleAgree}
              >
                I Agree
              </button>
            </div>
          </div>
        </div>
      )}
      <div
        style={{ opacity }}
        className="transition-opacity duration-500 ease-in-out"
      >
        {!showModal && (
          <>
            <Navbar />
            <div className="main z-2 relative w-full h-screen">
              <div className="w-full absolute top-[30%] md:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                <h1 className="text-center text-white text-[3rem] md:text-[8rem]">
                  RHS Law Chambers
                </h1>
                <p className="text-center text-white text-[20px]">
                  LAW FIRM & LEGAL SERVICES
                </p>
              </div>
            </div>
            <div className=" w-full h-screen">
              <div className="relative h-full w-full bg-white">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_150%,transparent_190%)]">
                  <h1 className="text-center pt-3 font-semibold text-[29px]">
                    About Us
                  </h1>
                  <div className="w-full h-[55%] grid grid-cols-1 md:grid md:grid-cols-2">
                    <div className="p-6 pl-10 mb-16 md:mb-0 md:pl-20">
                      <h1 className="text-center text-[1.7rem] md:text-[3rem]">
                        RHS Law Chambers
                      </h1>
                      <p className="text-[14px] mt-[-10px] md:mt-0 text-center md:text-[1.7rem] pt-6">
                        RHS Law Chambers is a full-service, general-practice law
                        firm, delivering expert legal advice to corporates and
                        individual litigants. With litigation and drafting
                        experience under their belts, and expertise in their
                        respective fields, Partners at RHS Law Chambers have
                        resolved to provide all in all solutions to your Legal
                        problems.
                      </p>
                    </div>
                    <div className="relative h-[100%]">
                      <div className="w-[18rem]  md:w-[26rem] absolute  cover top-[50%] rounded-xl left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                        <img
                          src="https://cdn.pixabay.com/photo/2015/03/17/15/44/case-law-677940_960_720.jpg"
                          className="cover mt-4 rounded-xl hover:scale-110 transition-transform duration-300"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-10 h-screen">
              <div className="relative h-full w-full bg-white">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:74px_84px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_190%,transparent_230%)]">
                  <h1 className="text-center font-semibold text-[25px]">
                    Testimonials / Greetings
                  </h1>
                  <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    // autoplay={{
                    //   delay: 8000,
                    //   disableOnInteraction: false,
                    // }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper rounded:lg mt-5 w-full md:w-full h-[90%] md:h-[80%]"
                  >
                    <SwiperSlide className="mt-12 ml-0 md:ml-[34rem]">
                      <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                          <img
                            className="w-full object-cover"
                            src="https://media.licdn.com/dms/image/D4D22AQGpvQTFj0npxQ/feedshare-shrink_800/0/1702386997303?e=1714608000&v=beta&t=0SgiJybxcX1K6r4wQq4xI8ZRcLoeCctY8u7RZ14KOwI"
                            alt=""
                          />
                        </div>
                        <div className="p-6">
                          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Tailwind card
                          </h5>
                          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc felis ligula.
                          </p>
                        </div>
                        <div className="p-6 pt-0">
                          <button
                            data-ripple-light="true"
                            type="button"
                            className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="mt-12">
                      <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                          <img
                            className="w-full object-cover"
                            src="https://vidhikshiksha.com/blog/wp-content/uploads/2022/03/Web-Article-02.png"
                            alt=""
                          />
                        </div>
                        <div className="p-6">
                          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Tailwind card
                          </h5>
                          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc felis ligula.
                          </p>
                        </div>
                        <div className="p-6 pt-0">
                          <button
                            data-ripple-light="true"
                            type="button"
                            className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="mt-12">
                      <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                          <img
                            className="w-full object-cover"
                            src="https://media.licdn.com/dms/image/D5622AQE54FvDLw3Yyg/feedshare-shrink_1280/0/1707992372493?e=1714608000&v=beta&t=lPdBl3jqp9hbcPqEDXFqWP3lKQCXMsZ7mCUAuDobM_A"
                            alt=""
                          />
                        </div>
                        <div className="p-6">
                          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Tailwind card
                          </h5>
                          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc felis ligula.
                          </p>
                        </div>
                        <div className="p-6 pt-0">
                          <button
                            data-ripple-light="true"
                            type="button"
                            className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="mt-12">
                      <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                          <img
                            className="w-full object-cover"
                            src="https://www.kaashiv.com/img/course/hnaquf2w.png"
                            alt=""
                          />
                        </div>
                        <div className="p-6">
                          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Tailwind card
                          </h5>
                          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc felis ligula.
                          </p>
                        </div>
                        <div className="p-6 pt-0">
                          <button
                            data-ripple-light="true"
                            type="button"
                            className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="mt-12">
                      <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                          <img
                            className="w-full object-cover"
                            src="https://media.licdn.com/dms/image/D5622AQHxSv7v_Ia65Q/feedshare-shrink_1280/0/1707992372356?e=1714608000&v=beta&t=z2nwhs5KOLVuVdHvg0dgd-b2RnAEntbGnpLe3cJTVSI"
                            alt=""
                          />
                        </div>
                        <div className="p-6">
                          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Tailwind card
                          </h5>
                          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc felis ligula.
                          </p>
                        </div>
                        <div className="p-6 pt-0">
                          <button
                            data-ripple-light="true"
                            type="button"
                            className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="mt-12">
                      <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                          <img
                            className="w-full object-cover"
                            src="https://media.licdn.com/dms/image/D4D0BAQHTzerMKaT4dw/company-logo_200_200/0/1696932040644?e=1719446400&v=beta&t=zZPty3Sd6hzS_jEJqJBi4ClHsgFRWeIxNOgGXC0D0lQ"
                            alt=""
                          />
                        </div>
                        <div className="p-6">
                          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Tailwind card
                          </h5>
                          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc felis ligula.
                          </p>
                        </div>
                        <div className="p-6 pt-0">
                          <button
                            data-ripple-light="true"
                            type="button"
                            className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="mt-12">
                      <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                          <img
                            className="w-full object-cover"
                            src="https://media.licdn.com/dms/image/D4D22AQHTw7YTl7avBQ/feedshare-shrink_800/0/1702386657866?e=1714608000&v=beta&t=MMOFiIMiX8-ExAwFbcj5Qq7DzdNDkHAx87RjdKnDgRI"
                            alt=""
                          />
                        </div>
                        <div className="p-6">
                          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Tailwind card
                          </h5>
                          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc felis ligula.
                          </p>
                        </div>
                        <div className="p-6 pt-0">
                          <button
                            data-ripple-light="true"
                            type="button"
                            className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="trust w-full min-h-[100vh] md:min-h-[46vh] bg-[#25357C] p-12 md:p-24 md:pl-28 md:pr-28 gap-2 grid grid-cols-1 md:grid-cols-5 items-center">
              <div className="w-full">
                <h2 className="text-[23px] md:text-[29px] text-white">
                  Facts You
                  Should Trust
                </h2>
              </div>
              <div className="md:h-full h-[1px] mt-[-30px] md:mt-0 md:ml-4 bg-gray-100 w-full md:w-[1px]"></div>
              <div className="md:r-20">
                <h2 className="text-center text-white text-[28px]">
                  Professional
                </h2>
                <div className="w-20 ml-[5rem] md:ml-[3rem] h-[1px] bg-yellow-500"></div>
                <h2 className="text-center text-white text-[28px]">
                  Efficiency
                </h2>
              </div>
              <div className="md:mr-20">
                <h2 className="text-center text-white text-[28px]">
                  Dedication
                </h2>
                <div className="w-20 ml-[5rem] md:ml-[3rem] h-[1px] bg-yellow-500"></div>
                <h2 className="text-center text-white text-[28px]">
                  Reliability
                </h2>
              </div>
              <div className="md:mr-7">
                <h2 className="text-center text-white text-[28px]">
                  Trustworthiness
                </h2>
                <div className="w-28 ml-[4rem] md:ml-[2.5rem] h-[1px] bg-yellow-500"></div>
                <h2 className="text-center text-white text-[28px]">
                  Satisfied Clients
                </h2>
              </div>
            </div>
            <div className="w-full relative h-screen">
              <div className="absolute top-0 z-[-2] h-screen w-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
                <h1 className="text-[3rem] text-center font-normal">
                  Our team
                </h1>
                <div className=" mt-2 md:mt-[-40px] absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 w-[60%] h-[60%]">
                  <img
                    className="object-cover rounded-lg w-full h-full"
                    src={img1}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="trust w-full min-h-[100vh] md:min-h-[46vh] bg-[#25357C] p-12 md:p-24 md:pl-28 md:pr-28 gap-2 grid grid-cols-1 md:grid-cols-5 items-center">
              <div className="w-full">
                <h2 className="text-[26px] md:text-[33px] text-white">
                  Allied Services
                </h2>
              </div>
              <div className="md:h-full h-[1px] mt-[-30px] md:mt-0 md:ml-4 bg-gray-100 w-full md:w-[1px]"></div>
              <div className="md:r-20">
                <h2 className="text-center text-white text-[28px]">
                  Professional
                </h2>
                <div className="w-20 ml-[5rem] md:ml-[3rem] h-[1px] bg-yellow-500"></div>
                <h2 className="text-center text-white text-[28px]">
                  Efficiency
                </h2>
              </div>
              <div className="md:mr-20">
                <h2 className="text-center text-white text-[28px]">
                  Dedication
                </h2>
                <div className="w-20 ml-[5rem] md:ml-[3rem] h-[1px] bg-yellow-500"></div>
                <h2 className="text-center text-white text-[28px]">
                  Reliability
                </h2>
              </div>
              <div className="md:mr-7">
                <h2 className="text-center text-white text-[28px]">
                  Trustworthiness
                </h2>
                <div className="w-28 ml-[4rem] md:ml-[2.5rem] h-[1px] bg-yellow-500"></div>
                <h2 className="text-center text-white text-[28px]">
                  Satisfied Clients
                </h2>
              </div>
            </div>

            <section className="contact-page-sec">
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <div className="contact-page-form" method="post">
                      <h2 className="text-center text-[29px]">Get in Touch</h2>
                      <form action="contact-mail.php" method="post">
                        <div className="row">
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="single-input-field">
                              <input
                                type="text"
                                placeholder="Your Name"
                                name="name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="single-input-field">
                              <input
                                type="email"
                                placeholder="E-mail"
                                name="email"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="single-input-field">
                              <input
                                type="text"
                                placeholder="Phone Number"
                                name="phone"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="single-input-field">
                              <input
                                type="text"
                                placeholder="Subject"
                                name="subject"
                              />
                            </div>
                          </div>
                          <div className="col-md-12 message-input">
                            <div className="single-input-field">
                              <textarea
                                placeholder="Write Your Message"
                                name="message"
                              ></textarea>
                            </div>
                          </div>
                          <div className="single-input-fieldsbtn">
                            <input type="submit" value="Send Now" />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="contact-page-map">
                    <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d112011.86459512373!2d77.2734976!3d28.6785536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1711183442273!5m2!1sen!2sin"
              className="w-full h-1/2"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
