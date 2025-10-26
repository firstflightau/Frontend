import React, { useState, useEffect } from "react";
import { Toast } from "flowbite-react";
import { HiFire } from "react-icons/hi";
import { Helmet } from "react-helmet-async"; // 1. Import Helmet
import { useSelector } from "react-redux";
import testimonialImg from "../assets/images/testimonial/testimonial-1.jpeg";
import axios from "axios";
import { apiURL } from "../constant/Constant";
import dayjs from "dayjs";
import { Link, useNavigate } from "react-router-dom";

const Testimonial = () => {
  const reducerState = useSelector((state) => state);
  const navigate = useNavigate();
  const authentic = reducerState?.auth?.isAuthenticated;
  const token = reducerState?.auth?.user?.token;
  console.log(token, "topkekn");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    // date: new Date(),
  });

  const [toast, setToast] = useState({
    visible: false,
    message: "",
    type: "", // "success" or "error"
  });

  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state for GET API

  // Fetch testimonials on component mount
  const fetchTestimonials = async () => {
    try {
      // const res = await axios.get(
      //   `https://ffbackend-sn85.onrender.com/api/testimonial`
      // );
      const res = await axios.get(`${apiURL.baseURL}/api/testimonial`);
      if (res.status === 200) {
        console.log(res);
        setTestimonials(res.data.testimonials); // Assuming res.data is an array of testimonials
      }
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    } finally {
      setLoading(false); // Stop loading regardless of success or failure
    }
  };
  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    if (!authentic) {
      // return;
      navigate("/login");
      return;
    }
    e.preventDefault();

    try {
      const res = await axios({
        method: "post",
        // url: `https://ffbackend-sn85.onrender.com/api/testimonial`,
        url: `${apiURL.baseURL}/api/testimonial`,
        data: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        setToast({
          visible: true,
          message: "Comment added successfully!",
          type: "success",
        });
        fetchTestimonials();
        setFormData({ name: "", email: "", message: "" });
      } else {
        setToast({
          visible: true,
          message: "Failed to add comment. Please try again.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
      setToast({
        visible: true,
        message: "Something went wrong. Please try again later.",
        type: "error",
      });
    }
  };

  const sortedTestimonial = testimonials?.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const homeData = useSelector(
    (state) => state?.metaData?.allMetaData?.testimonial
  );

  return (
    <main>
      {homeData && (
        <Helmet>
          {/* Main SEO Tags */}
          <title>{homeData?.title}</title>
          <meta name="description" content={homeData?.description} />
          <meta name="keywords" content={homeData?.keywords} />
          <link rel="canonical" href={homeData?.canonical} />

          {/* Open Graph (Social Media) Tags */}
          <meta property="og:title" content={homeData?.ogTitle} />
          <meta property="og:description" content={homeData?.ogDescription} />
          <meta property="og:image" content={homeData?.ogImage} />
          <meta property="og:url" content={homeData?.canonical} />
          <meta property="og:type" content="website" />
        </Helmet>
      )}
      <section className="breadcrumbs-area breadcrumb-bg bg-tertiary-6000 !py-5 md:!py-10">
        <div className="container">
          <h1
            className=" text-2xl md:text-4xl font-bold capitalize mb-1 relative text-secondary-6000 wow fadeInUp"
            data-wow-delay="0.0s"
          >
            Testimonial
          </h1>
          <div className="">
            <nav
              aria-label="breadcrumb"
              className="breadcrumb-nav wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <ul className="breadcrumb listing mb-0 flex relative">
                <li className="breadcrumb-item single-list">
                  <Link
                    to="/"
                    className=" text-base font-normal text-black capitalize font"
                  >
                    Home
                  </Link>
                </li>
                <span> &nbsp; /&nbsp; </span>
                <li
                  className=" text-base font-normal text-primary-6000 capitalize font"
                  aria-current="page"
                >
                  {/* <Link to="" className=" active"> */}
                  Testimonial
                  {/* </Link> */}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <section className="destination-details-section mb-40">
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-12 col-lg-12">
              <div className="pt-10 ">
                <h4 className=" mt-5 text-secondary-6000 text-4xl font-bold mb-6">
                  What People Have Said About Our Service
                </h4>
              </div>
              <div className="pt-8">
                {loading
                  ? // Render 6 loader skeletons while data is loading
                    Array.from({ length: 6 }).map((_, index) => (
                      <div
                        key={index}
                        className="relative py-4 md:py-10 px-4 md:px-12 rounded-xl bg-gray-200 flex gap-5 mb-10 border-l-4 border-secondary-6000 animate-pulse"
                      >
                        <img
                          src={testimonialImg}
                          className="w-14 h-14 md:w-24 md:h-24 mb-3 rounded-full shadow-lg"
                          alt="Placeholder"
                        />
                        <div>
                          <h4 className="text-2xl font-bold text-gray-400 mb-1">
                            Loading...
                          </h4>
                          <p className="text-base font-semibold text-gray-400 mb-1">
                            Please wait
                          </p>
                          <p className="text-base font-normal text-gray-400">
                            Fetching data...
                          </p>
                        </div>
                      </div>
                    ))
                  : // Render testimonials once data is fetched
                    sortedTestimonial?.map((testimonial, index) => (
                      <div
                        key={index}
                        className="relative py-4 md:py-10 px-4 md:px-12 rounded-xl bg-gray-200 flex gap-5 mb-10 border-l-4 border-secondary-6000"
                      >
                        <img
                          src={testimonialImg}
                          className="w-14 h-14 md:w-24 md:h-24 mb-3 rounded-full shadow-lg"
                          alt={testimonial?.name}
                        />
                        <div>
                          <h4 className="text-2xl font-bold text-black mb-1">
                            {testimonial?.name}
                          </h4>
                          <p className="text-base font-semibold mb-1">
                            Traveler
                            {/* ({dayjs(testimonial?.date).format("DD MMM, YY")}) */}
                          </p>
                          <p className="text-base font-normal text-gray-700">
                            {testimonial?.message}
                          </p>
                        </div>
                      </div>
                    ))}
                <div className="contact-card bg-gray-200 rounded-xl px-10 py-8 relative mt-9">
                  <h4 className="contact-heading text-2xl font-bold text-secondary-6000 mb-8">
                    Write Your Comment
                  </h4>
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="row g-4">
                      <div className="col-sm-6">
                        <input
                          className="bg-gray-50 border-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          type="text"
                          placeholder="Enter your name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          className="bg-gray-50 border-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          type="email"
                          placeholder="Enter your email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-sm-12">
                        <textarea
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-1 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                          id="exampleFormControlTextarea1"
                          rows="4"
                          placeholder="Enter your message..."
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="mt-9 flex items-center justify-center">
                      <button
                        type="submit"
                        className="rounded-lg px-8 py-2 text-base text-gray-50 border-2 border-secondary-6000 bg-secondary-6000 hover:bg-transparent hover:text-secondary-6000 transition-all"
                      >
                        Post Comment
                      </button>
                    </div>
                  </form>

                  {toast.visible && (
                    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2">
                      <Toast>
                        <div
                          className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                            toast.type === "success"
                              ? "bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200"
                              : "bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200"
                          }`}
                        >
                          <HiFire className="h-5 w-5" />
                        </div>
                        <div className="ml-3 text-sm font-normal">
                          {toast.message}
                        </div>
                        <Toast.Toggle
                          className="items-center justify-center"
                          onClick={() => setToast({ ...toast, visible: false })}
                        />
                      </Toast>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonial;
