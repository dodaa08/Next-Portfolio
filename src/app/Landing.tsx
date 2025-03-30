import Header from "../components/Header";

const Landing = () => {
  return (
    <div className="bg-neutral-900 min-h-screen flex flex-col text-white items-center py-2">
      
      {/* Centered Header */}
     

      {/* Main Content */}
      <div className="p-6 flex justify-center">
        <div className="max-w-[900px] text-center"> {/* Adjust width as needed */}
          <h1 className="text-3xl text-white/80 font-bold">
            Kartikdoda.tech
          </h1>

          <div className="mt-6 text-lg text-white/85 leading-relaxed">
            <p>
              <h1 className="text-2xl py-5">Hi, </h1> 

              I’m a <span className="text-yellow-500">FullStack Web3 Developer</span> with interest in 
              <span className="text-yellow-500"> Blockchain, Distributed Systems,</span> and backend engineering.
            </p>

            <p className="mt-4">
              I enjoy architecting scalable backend systems, optimizing performance, and exploring how decentralized technologies shape the future. 
            </p>

            <p className="mt-4">
              Right now, I'm learning more about 
              <span className="text-yellow-500"> distributed computing, Solana,</span> and how blockchain networks maintain consensus.
            </p>

            <p className="mt-4">
              When I’m not coding, I’m probably contributing to open-source projects, playing Sports, or experimenting with new tech stacks.
            </p>
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default Landing;
