import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeaderText from "../assets/header_text.png";
import Hero from "../assets/hero.png";
import Hero2 from "../assets/hero2.png";
import Hero3 from "../assets/hero3.png";
import Star from "../assets/star.png";
import Trail from "../assets/trail.png";
import Emoji from "../assets/emoji.png";
import Mail from "../assets/sms.png";
import Call from "../assets/call.png";
import Time from "../assets/time-fill.png";
import Fb from "../assets/fb.png";
import Ig from "../assets/ig.png";
import Ln from "../assets/ln.png";
import Tw from "../assets/tw.png";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-center w-full bg-bg pt-24 pb-12">
          <div className="flex flex-col gap-4 w-1/2">
            <img src={HeaderText} alt="" className="h-48 w-min" />
            <p className="w-2/3 text-2xl font-medium">
              Untuk membantu kamu hidup sepenuhnya, kami berevolusi untuk
              mengatasi berbagai permasalahan mental yang kamu alami
            </p>
            <Link
              to="/harga"
              className="w-36 text-center hover:opacity-50 transition ease-in-out bg-black px-6 py-4 rounded-full font-sans font-semibold text-white"
            >
              Coba Gratis
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <img src={Hero} alt="" className="w-80" />
          </div>
        </div>

        <div className="flex items-center justify-between w-full bg-bg pt-8 pb-24">
          <img src={Hero2} alt="" className="w-1/3 ml-36" />
          <div className="flex flex-col w-1/2 gap-4">
            <h1 className="text-5xl font-bold">How can we</h1>
            <h1 className="text-5xl font-bold text-primary">Help You?</h1>
            <p className="w-3/4 text-xl font-medium">
              Kami bekerja sama dengan ahli untuk membuat sebuah wadah mood
              journaling yang efektif untuk membantu kalian yang sedang
              mengalami permasalahan mental untuk semakin berkembang dan
              mengskplor diri
            </p>
            <Link
              to="/harga"
              className="w-36 text-center hover:opacity-50 transition ease-in-out bg-black px-6 py-4 rounded-full font-sans font-semibold text-white"
            >
              Coba Gratis
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-24 bg-primary">
        <p className="text-white text-lg font-sans font-medium px-4 py-2 rounded-full border-2 border-white">
          PEACEFUL BEGINNING
        </p>
        <div className="flex flex-col relative">
          <div className="flex items-center justify-between gap-2">
            <img src={Star} alt="" className="w-12" />
            <h1 className="text-5xl text-white font-black m-8">
              Bring Your Inner Peace
            </h1>
            <img src={Star} alt="" className="w-12" />
          </div>
          <img src={Trail} alt="" className="w-52 absolute right-8 bottom-0" />
        </div>
        <img src={Hero3} alt="" className="h-80 m-8" />
      </div>

      <div className="flex items-center justify-around p-24 w-full mt-24">
        <div className="flex flex-col gap-2 w-2/5">
          <p className="text-5xl">
            Coba <span className="text-primary font-black">Mindflow</span>{" "}
            sekarang juga untuk memulai{" "}
            <span className="text-black font-black">peaceful journey</span> mu
          </p>
          <p className="mt-4 text-xl">
            Tunggu apa lagi? Segera coba journaling program kami dan
            bergabunglah dengan jutaan pengguna yang telah menikmati manfaatnya.
          </p>
        </div>
        <img src={Emoji} alt="" className="w-2/5" />
      </div>

      <div className="flex items-start justify-around w-full py-48 px-60 bg-bg font-sans">
        <div className="flex flex-col gap-2">
          <p className="mb-4 font-bold text-lg">Tentang Mindflow</p>
          <p className="text-lg">Apa itu Mindflow?</p>
          <p className="text-lg">Hubungi Kami</p>
          <p className="text-lg">Syarat & ketentuan</p>
          <p className="text-lg">Kebijakan Privasi</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="mb-4 font-bold text-lg">Customer Support</p>
          <div className="flex w-full">
            <img src={Mail} alt="" className="w-8 mr-4" />
            <p className="text-lg">support@mindflow.co.id</p>
          </div>
          <div className="flex w-full">
            <img src={Call} alt="" className="w-8 mr-4" />
            <p className="text-lg">+6281288835715</p>
          </div>
          <div className="flex w-full">
            <img src={Time} alt="" className="w-8 mr-4" />
            <p className="text-lg">Jam Kerja: (Senin-Jumat 9:00 - 17:00)</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="mb-4 font-bold text-lg">Sosial Media</p>
          <div className="flex gap-4 mb-2">
            <img src={Fb} alt="" />
            <img src={Ig} alt="" />
          </div>
          <div className="flex gap-4">
            <img src={Ln} alt="" />
            <img src={Tw} alt="" />
          </div>
        </div>
      </div>

      <p className="flex items-center justify-center w-full bg-bg pb-24">© Copyright 2023 Mindflow All Rights Reserved.</p>
    </div>
  );
};

export default Home;
