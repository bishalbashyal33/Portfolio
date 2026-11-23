import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Button from '../components/Button';

const organizations = [
  { name: 'Florida State University', logo: 'fsu.svg', hint: 'Bishal B. is a funded research student at FSU.' },
  { name: 'Prolaio', logo: 'prolaio.svg', darken: true, hint: 'Bishal B. worked on heart failure biomarkers as a data science intern.' },
  { name: 'Kardigan', logo: 'kardigan.svg', hint: 'Bishal B. interned at Prolaio, a Kardigan company.' },
  { name: 'ICPR 2026', logo: 'icpr.svg', hint: 'Bishal B. presented his team’s research work at the conference.' },
  { name: 'WACV', logo: 'wacv.svg', darken: true, hint: 'Bishal B. and his team will present model-ranking research at WACV 2027.' },
  { name: 'Routine of Nepal Banda', logo: 'ronb.jpg', hint: 'Bishal B. was featured by Routine of Nepal Banda.' },
  { name: 'Katmatic', logo: 'katmatic-mark.png', hint: 'Bishal B. built machine learning systems for time series data at Katmatic.' },
  { name: 'Fusemachines', logo: 'fusemachines-mark.png', hint: 'Bishal B. built an automated essay scoring system as a Fuse AI Scholar.' },
  { name: 'Hult Prize', logo: 'hult-prize-mark.svg', hint: 'Bishal B. won Nepal’s only Central & South Asia Program of the Year award from the Hult Prize Foundation in Paris.' },
  { name: 'Nepal Physics Olympiad (NePhO)', logo: 'nepho.png', hint: 'Bishal B. is a National Physics Olympiad Champion.' },
];

const Home = () => {
  const [activeLogo, setActiveLogo] = useState(null);

  return (
    <div className="max-w-4xl mx-auto px-6 pt-20 text-gray-800 dark:text-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            Hi👋, I'm <span className="text-gray-900 dark:text-gray-100">Bishal Bashyal</span>
          </h1>
          <div className="text-lg font-medium h-8">
            <TypeAnimation
              sequence={[
                'Wearable AI Researcher ⌚',
                1000,
                'Quantitative Researcher 📊',
                1000,
                'AI Software Engineer 🤖',
                1000,
                'Biomarker Data Scientist 🧬',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block', color: '#111827' }}
              repeat={Infinity}
            />
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
            Passionate about building scalable applications and solving complex problems through technology, data and AI.
          </p>
          <div className="space-x-4">
            <Button
              primary
              onClick={() => window.location.href = "mailto:bishalbash333@gmail.com"}
            >
              Say Hi! 🛫
            </Button>
            <Button
              onClick={() => window.open("https://drive.google.com/file/d/145SqCw4An4PDyNWT2BW8rZSSI-Ef2CCN/view?usp=sharing", "_blank")}
            >
              Resume 📃
            </Button>
          </div>

        </div>
        <div className="relative flex justify-center">
          <div className="absolute inset-0 "></div>
          <img
            src="https://raw.githubusercontent.com/bishalbashyal33/hostedpublicassets/refs/heads/main/personart.png"
            alt="Bishal Bashyal - AI Software Engineer and Researcher"
            className="relative  object-cover "
          />
        </div>
        <div className="relative min-w-0 md:col-span-2">
          <ul
            aria-label="Organizations and conferences"
            className="grid grid-cols-5 items-center gap-x-2 gap-y-2 rounded-xl border border-gray-200 bg-gray-50/80 px-2 py-3 sm:gap-x-4 sm:px-4 lg:grid-cols-10"
          >
            {organizations.map(({ name, logo, darken, hint }) => (
              <li key={name} className="flex min-w-0 justify-center">
                <button
                  type="button"
                  aria-describedby={`logo-hint-${logo}`}
                  onPointerEnter={event => {
                    if (event.pointerType !== 'touch') setActiveLogo(logo);
                  }}
                  onPointerLeave={event => {
                    if (event.pointerType !== 'touch') setActiveLogo(null);
                  }}
                  onFocus={() => setActiveLogo(logo)}
                  onBlur={() => setActiveLogo(null)}
                  onClick={() => setActiveLogo(logo)}
                  onKeyDown={event => {
                    if (event.key === 'Escape') setActiveLogo(null);
                  }}
                  className="flex min-h-11 w-full items-center justify-center rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                >
                  <img
                    src={`/assets/organizations/${logo}`}
                    alt={name}
                    className={`h-9 w-full max-w-24 object-contain grayscale transition motion-reduce:transition-none ${darken ? 'invert' : ''} ${activeLogo === logo ? 'scale-110 opacity-100' : 'opacity-70'}`}
                  />
                </button>
                <span
                  id={`logo-hint-${logo}`}
                  className="sr-only"
                >
                  {hint}
                </span>
              </li>
            ))}
          </ul>
          {activeLogo && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-2 bottom-full z-10 mx-auto mb-2 flex w-fit max-w-sm items-start gap-2 rounded-md border border-[#e9e9e7] bg-white px-3 py-2 text-left text-sm leading-relaxed text-[#37352f] shadow-sm"
            >
              <span>💡</span>
              <span>{organizations.find(({ logo }) => logo === activeLogo)?.hint}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
