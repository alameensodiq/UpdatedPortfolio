import "./App.css";
import Profile from "./assets/mypassport.png";
import ProfileBg from "./assets/small.png";
import backup from "./assets/backup.png";
import Payarena from "./assets/Payarena.png";
import tm from "./assets/tm.png";
import Project4 from "./assets/project4.png";
import Bills from "./assets/Bills.png";
import tmsaasadmin from "./assets/tmsaasadmin.png";
import collection from "./assets/collection.png";
import Mall from "./assets/Mall.png";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";


function App() {

  return (

    <>
      <header>
        <div className="container m-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-xl">Sodiq Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-3">
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">
                    Technologies
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white cursor-pointer">
                    About me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="container  m-auto px-4 pt-12 sm:py-32 flex flex-col sm:flex-row gap-6">
            <div>
              <h1 className="font-bold text-4xl">Hello, I'm Al-ameen Sodiq</h1>
              <h1 className="font-bold text-4xl mt-1 gradiant-text running-text">
                Frontend developer
              </h1>
              <p className="mt-4 text-gray-400">
                Former Bid Tender and Petroleum engineering seeking to apply
                competent development skills with focus on collaboration,
                communication and passion
              </p>
            </div>
            <div className="relative">
              <img src={Profile} alt="pictures" className="relative z-10 w-[520px] m-auto sm:w-[520px] rounded rounded-full" />
              <img src={ProfileBg} width={180} className="relative -top-[160px] left-[50px]  w-[100px] m-auto sm:w-[220px]" />
            </div>
          </div>
        </section>
        <section>
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5">
                <img src={tm} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  TM30 website
                </h3>
                {/* <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for online
                </p> */}
                <div className="flex mt-12 gap-2">
                  <button onClick={() => window.open('https://tm30.net/', '_blank')} className="flex-1 test-sm py-3 bg-gradient-to-t from-blue-500 to-cyan-50 rounded-full hover:from-blue-700 hover: to-cyan-700">
                    Live preview
                  </button>
                  <button onClick={() => window.open('https://github.com/alameensodiq/tm30-website', '_blank')} className="flex-1 text-sm  py-3 border rounded-full hover:bg-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5">
                <img src={backup} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Back up Cash
                </h3>
                {/* <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for online
                </p> */}
                <div className="flex gap-4 mt-12">
                  <button onClick={() => window.open('https://mybackupcash.com/', '_blank')} className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 to-cyan-50 rounded-full hover:from-blue-700 hover: to-cyan-700">
                    Live preview
                  </button>
                  {/* <button className="flex-1 text-sm py-3 border rounded-full hover:bg-blue-500 hover:text-blue-500">
                    Checkout github
                  </button> */}
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5">
                <img src={Payarena} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  PayArena Super App
                </h3>
                {/* <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for online
                </p> */}
                <div className="flex gap-4 mt-12">
                  <button onClick={() => window.open('https://play.google.com/store/apps/details?id=com.unifiedpayment.payarena&pcampaignid=web_share', '_blank')} className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 to-cyan-50 rounded-full hover:from-blue-700 hover: to-cyan-700" className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 to-cyan-50 rounded-full hover:from-blue-700 hover: to-cyan-700">
                    Live preview
                  </button>
                  <button onClick={() => window.open('https://github.com/alameensodiq/pay-arena-mall', '_blank')} className="flex-1 text-sm py-3 border rounded-full hover:bg-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5">
                <img src={Mall} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  PayArena Mall
                </h3>
                {/* <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for online
                </p> */}
                <div className="flex gap-4 mt-12">
                  <button onClick={() => window.open('https://mall.payarena.com/', '_blank')} className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 to-cyan-50 rounded-full hover:from-blue-700 hover: to-cyan-700">
                    Live preview
                  </button>
                  {/* <button onClick={() => window.open('https://github.com/alameensodiq/pay-arena-mall', '_blank')} className="flex-1 text-sm py-3 border rounded-full hover:bg-blue-500 hover:text-blue-500">
                    Checkout github
                  </button> */}
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5">
                <img src={Bills} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  PayMyBills
                </h3>
                {/* <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for online
                </p> */}
                <div className="flex gap-4 mt-12">
                  <button onClick={() => window.open('https://paymybills.ng/', '_blank')} className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 to-cyan-50 rounded-full hover:from-blue-700 hover: to-cyan-700">
                    Live preview
                  </button>
                  {/* <button onClick={() => window.open('https://github.com/alameensodiq/pay-arena-mall', '_blank')} className="flex-1 text-sm py-3 border rounded-full hover:bg-blue-500 hover:text-blue-500">
                    Checkout github
                  </button> */}
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5">
                <img src={collection} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Collection Portal
                </h3>
                {/* <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for online
                </p> */}
                <div className="flex gap-4 mt-12">
                  <button onClick={() => window.open('https://collections.payarena.com', '_blank')} className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 to-cyan-50 rounded-full hover:from-blue-700 hover: to-cyan-700">
                    Live preview
                  </button>
                  <button onClick={() => window.open('https://github.com/alameensodiq/paycollection', '_blank')} className="flex-1 text-sm py-3 border rounded-full hover:bg-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5">
                <img src={tmsaasadmin} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Tmsaas
                </h3>
                {/* <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS layout for online
                </p> */}
                <div className="flex gap-4 mt-12">
                  <button onClick={() => window.open('https://saasadmin.tm30.net/login', '_blank')} className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 to-cyan-50 rounded-full hover:from-blue-700 hover: to-cyan-700">
                    Live preview
                  </button>
                  <button onClick={() => window.open('https://github.com/alameensodiq/Tmsaas-admin', '_blank')} className="flex-1 text-sm py-3 border rounded-full hover:bg-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section */}
        <section className="py-10">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">HTML</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">CSS</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">
                    JavaScript, Typescript, JQuery
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Angular</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">React</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[95%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">React Native</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
            </div>
          </div>
        </section>
        {/* Additional skills section */}
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional Technologies and skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-20 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-3 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git
                </p>
              </div>
              <div>
                <p className="font-bold before:w-3 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Teamwork
                </p>
              </div>
              <div>
                <p className="font-bold before:w-3 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Engagement
                </p>
              </div>
              <div>
                <p className="font-bold before:w-3 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Quick Learning
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-20 mt-4 sm:mt-6 w-[80%]">
              <div>
                <p className="font-bold before:w-3 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git
                </p>
              </div>
              <div>
                <p className="font-bold before:w-3 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Teamwork
                </p>
              </div>
              <div>
                <p className="font-bold before:w-3 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Engagement
                </p>
              </div>
              <div>
                <p className="font-bold before:w-3 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Quick Learning
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Additional skills section */}
        <section className="py-8">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
                <p>
                  Graduated 2018 , Petroleum Engineering, University of Ibadan.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
                <p>
                  Graduated 2018 , Petroleum Engineering, University of Ibadan.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
           <p className="text-gray-300 text-sm"> Copy right @2023</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a><img src={Facebook} className="w-5" /></a>
              </li>
              <li>
                <a><img src={LinkedIn}className="w-5" /></a>
              </li>
              <li>
                <a><img src={Instagram} className="w-5" /></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
