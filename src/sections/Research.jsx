import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChartNoAxesColumnIncreasing, ImagePlus } from "lucide-react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const industryDetails = "This industry research project was conducted at Prolaio. Details cannot be shared due to the confidential nature of the work.";
const actionClass = "mt-auto w-full rounded-md bg-gray-800 px-4 py-2 text-center text-white hover:bg-gray-700";

const researchProjects = [
  {
    title: "eVO₂ Max Prediction from ECG and Accelerometer Data",
    description: "Developed a model that combines ECG and accelerometer signals to estimate maximal oxygen uptake (VO₂ max). The best-performing model improved prediction performance over the project baseline and met the FDA acceptance criteria used in the evaluation.",
    details: industryDetails,
    image: "/assets/research/evo2-max.jpg",
    imageAlt: "Illustration of a treadmill runner wearing an ECG chest strap and wrist activity tracker",
  },
  {
    title: "LVEF Estimation from Smartwatch ECG",
    description: "Developed an approach to estimate left ventricular ejection fraction (LVEF) from smartwatch ECG recordings, exploring how wearable signals can be used to assess the heart’s pumping function.",
    details: industryDetails,
    image: "/assets/research/lvef-smartwatch.jpg",
    imageAlt: "Illustration of a smartwatch ECG recording alongside a highlighted left ventricle",
  },
  {
    title: "AutoResearch Biomarker",
    description: "Built a JSON-driven research tool for rapidly designing and prototyping biomarker prediction algorithms. Researchers can use it to iterate on statistical and deep learning approaches.",
    details: industryDetails,
    image: "/assets/research/autoresearch-biomarker.jpg",
    imageAlt: "Illustration of biosignal waveforms feeding a model-design workflow on a laptop",
  },
  {
    title: "Annotation-Free Model Ranking",
    description: "Our framework uses generative surrogates to rank computer vision models for target environments without labeled data. My team and I will present this work at WACV in Orlando in January 2027.",
    icon: ChartNoAxesColumnIncreasing,
    details: "My team and I will present An Annotation-Free Framework for Model Ranking in Unlabeled Target Environments via Generative Surrogates at IEEE/CVF WACV 2027 in the Orlando area. The conference runs January 4–8, 2027.",
  },
  {
    title: "LLIE-CvT: Low-Light Image Enhancement",
    description: "Our convolutional vision transformer adapts its attention to underexposed regions to improve low-light images. The paper was published in the ICPR 2026 proceedings.",
    icon: ImagePlus,
    articleUrl: "https://link.springer.com/chapter/10.1007/978-3-032-31933-3_24",
  },
];

const Research = () => {
  const detailsDialog = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const showDetails = (project) => {
    setSelectedProject(project);
    detailsDialog.current.showModal();
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <motion.h2
        className="text-4xl font-semibold text-gray-900 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Research 🔬
      </motion.h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="pb-10"
      >
        {researchProjects.map((project) => (
          <SwiperSlide key={project.title} className="!h-auto !flex">
            <motion.div
              className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden p-6 gap-4 border border-gray-300 w-full min-h-[430px] flex flex-col"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="aspect-[3/2] w-full rounded-lg object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="grid aspect-[3/2] w-full place-items-center rounded-lg bg-gradient-to-br from-slate-800 to-cyan-800 text-cyan-100">
                  <project.icon aria-hidden="true" size={64} strokeWidth={1.25} />
                </div>
              )}
              <div className="space-y-2">
                <h3 className="text-xl font-bold leading-snug text-gray-800">{project.title}</h3>
                <p className="text-base leading-relaxed text-gray-600">{project.description}</p>
              </div>
              {project.articleUrl ? (
                <a className={actionClass} href={project.articleUrl} target="_blank" rel="noopener noreferrer">
                  Read Published Article
                </a>
              ) : (
                <button
                  type="button"
                  className={actionClass}
                  aria-haspopup="dialog"
                  onClick={() => showDetails(project)}
                >
                  Read More
                </button>
              )}
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <dialog
        ref={detailsDialog}
        aria-labelledby="research-details-title"
        aria-describedby="research-details-message"
        className="m-auto w-[calc(100%-2rem)] max-w-md rounded-lg bg-white p-6 text-gray-900 shadow-xl backdrop:bg-black/50"
      >
        <h3 id="research-details-title" className="text-xl font-bold">{selectedProject?.title}</h3>
        <p id="research-details-message" className="mt-2 text-gray-600">
          {selectedProject?.details}
        </p>
        <form method="dialog" className="mt-6 flex justify-end">
          <button type="submit" className="rounded-md bg-gray-800 px-4 py-2 text-white hover:bg-gray-700">
            Close
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default Research;
