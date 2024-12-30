"use client";

import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import quickgigs from '../../imgs/quickgigs.png';
import skillseva from "../../imgs/project2nd.jpg";
import dholo from "../../imgs/project3.png";
import sp from "../../imgs/spchain.jpg"
import spamurai from "../../imgs/spamurai.jpg";
import gig from "../../imgs/gig.webp";
import sih from "../../imgs/sih.jpg";
import laundry from "../../imgs/laundry.gif";
import wallet from "../../imgs/wallet.jpg";
import trading from "../../imgs/tarde.webp";
import edvo from "../../imgs/edvo.webp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
    
    return (
        <>
        <main className="flex flex-col items-center space-y-8 px-4 py-10" id='projects'>
            <div className='mb-10 border-b  border-gray-400'>
            <h1 className='text-3xl  font-mono '>Projects</h1>
            </div>
            {/* First row of project cards */}
            <div className='flex flex-col md:flex-row md:flex-wrap justify-center gap-8'>
            <ProjectCard
                    title="Trading Engine"
                    imageSrc={trading}
                    description="I've built a trading Enigne, try it out, become a market maker buy and sell BTC here!"
                    previewLink="https://tradeengine.vercel.app/"
                    githubLink="https://github.com/dodaa08/Trading-System"
                    techStack={["React.js", "Node.js", "MongoDB", "Express"]}
                    status=""
                />
            <ProjectCard
                    title="SkillSeva"
                    imageSrc={gig}
                    description="A Dapp made for people to post work and get paid via crypto once the job is done, Automated fund transfer."
                    previewLink="https://x.com/kartik___doda/status/1850478191934394825"
                    githubLink="https://github.com/dodaa08/Quick-gigs"
                    techStack={["Next.js", "Supabase", "Solidity", "Tailwind"]}
                    status=""
                />
                
                <ProjectCard
                    title="SpamurAi"
                    imageSrc={spamurai}
                    description="An AI Cold Email writer and Sender to help you with all sorts of cold emailing needs."
                    previewLink=""
                    githubLink="https://github.com/dodaa08/SpamurAI"
                    techStack={["React.js", "Node.js", "MongoDB", "Hugging Face"]}
                    status="In Progress"
                />
                
                
            </div>

            <div className='flex flex-col md:flex-row md:flex-wrap justify-center gap-8'>
            <ProjectCard
                    title="Course Selling App"
                    imageSrc={edvo}
                    description="Now Create, Sell, Buy courses using Joy, A digital asset for my platform."
                    previewLink=""
                    githubLink="https://github.com/dodaa08/Edvo"
                    techStack={["React.js", "Node.js", "MongoDB", "Express"]}
                    status="In Progress"
                />
            
            <ProjectCard
                    title="Freelancing platform"
                    imageSrc={sih}
                    description="Built an end to end platform with payment Integration during SIH"
                    previewLink="https://skillseva.vercel.app/"
                    githubLink="https://github.com/dodaa08/SkillSeva-"
                    techStack={["Next.js", "Supabase", "Stripe", "Tailwind"]}
                    status=""
                />
               
              <ProjectCard
                    title="Broken Supply Chains"
                    imageSrc={sp}
                    description="Let's fix the broken supply chains. A platform built to help you filter out the best suppliers."
                    previewLink=""
                    githubLink="https://github.com/dodaa08/Supply-chain-optimization"
                    techStack={["Python", "Streamlit", "Pandas", "Numpy"]}
                    status=""
                />
            </div>
           
            {/* Second row of project cards */}
            <div className='flex flex-col md:flex-row md:flex-wrap justify-center gap-8'>
            <ProjectCard
                    title="Dholo"
                    imageSrc={laundry}
                    description="An Android App built using java, Now Manage, Book and get Laundry on time!"
                    previewLink="https://dholoapp.netlify.app/"
                    githubLink="https://github.com/dodaa08/DholoApp"
                    techStack={["Java", "XML", "Firebase"]}
                    status=""
                />
                <ProjectCard
                    title="Crypto Wallet"
                    imageSrc={wallet}
                    description="A Crypto wallet, Let's you Create Wallet, import wallets, Send Crypto, Swap Crypto."
                    previewLink="https://store-crypto.vercel.app/"
                    githubLink="https://github.com/dodaa08/CryptoWallet"
                    techStack={["React.js", "Ethers.js", "Web3.js", "Tailwind", "Jupiter API"]}
                    status=""
                />
               
            </div>
            

            
        </main>
<ToastContainer />
</>
    );
}
