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
        className="w-full h-screen object-cover"
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

const Home = React.memo(() => {
  return (
    <>
      <HomeTop />
    </>
  );
});

export default Home;
