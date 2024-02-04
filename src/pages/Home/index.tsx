import Image from "next/image";
import React from "react";

const HomeTop = React.memo(() => {
  return (
    <div className="relative">
      <Image
        src={
          "https://github.com/hirokiwa/hirokiwa-portfolio/assets/89170014/0aa15259-f930-48f5-b66a-340e0f0a4a4e"
        }
        alt={"ガッツポーズの背中"}
        width={0}
        height={0}
        sizes="100vh"
        className="w-full h-screen object-cover bg-slate-100"
      />
      <div className="absolute top-0 left-0 m-5">
        <p>hirokiwa.com</p>
      </div>
      <p className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold">
        ぜーんぶ楽しい
      </p>
      <p className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-base text-white">
        Scroll Down ∨
      </p>
    </div>
  );
});

const WhoIAm = React.memo(() => {
  return (
    <div className="px-48 pt-48 pb-48">
      <div className="flex justify-center items-center">
        <div className="relative w-1/2 flex justify-center">
          <div>
            <Image
              src={
                "https://github.com/hirokiwa/hirokiwa-portfolio/assets/89170014/4b5f1227-028b-4727-be51-4b16675965a8"
              }
              alt={"ひろきのイメージ"}
              width={0}
              height={0}
              sizes="30vw"
              className="w-[20vw] rounded-lg bg-slate-100 aspect-[16464/24690]"
            />
            <p className="text-xs">※画像はイメージです。</p>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <div>
            <h2 className="text-3xl font-bold">Who I am</h2>
            <div className="mt-12">
              <h3 className=" text-xl font-semibold">ひろき</h3>
              <p className="text-sm">ソフトウェアエンジニア。</p>
              <p className="text-sm">コード書いたりデザインしたり。</p>
              <p className="text-sm">ブラウザで動く何かを作る人。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

const Home = React.memo(() => {
  return (
    <>
      <HomeTop />
      <WhoIAm />
    </>
  );
});

export default Home;
