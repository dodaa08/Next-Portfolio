"use client";

import React from 'react';
import ProjectCard from './ProjectCard';
import quickgigs from '../../imgs/quickgigs.png';
import skillseva from "../../imgs/project2nd.jpg";
import dholo from "../../imgs/project3.png";
import spamurai from "../../imgs/spamurai.jpg";
import gig from "../../imgs/gig.jpg";
import sih from "../../imgs/sih.jpg";
import sp from "../../imgs/sp.jpg";
import laundry from "../../imgs/laundry.gif";
import wallet from "../../imgs/wallet.jpg";

export default function Page() {
    return (
        <main className="flex flex-col items-center space-y-8 px-4 py-10">
            {/* First row of project cards */}
            <div className='flex flex-col md:flex-row md:flex-wrap justify-center gap-8'>
                <ProjectCard
                    title="Spamurai"
                    imageSrc={spamurai}
                    description="An AI Email Writer-Sender, which helps you to write and send emails in a click."
                    previewLink=""
                    githubLink="https://github.com/dodaa08/SpamurAI"
                    techStack={["React.js", "Node.js", "MongoDB", "Hugging Face", "Move"]}
                    status="In Progress"
                />
                <ProjectCard
                    title="SkillSeva"
                    imageSrc={gig}
                    description="A Decentralized Market Place, with automated payment Mechanism once the job is done."
                    previewLink="https://x.com/kartik___doda/status/1850478191934394825"
                    githubLink="https://github.com/dodaa08/Quick-gigs"
                    techStack={["Next.js", "Supabase", "Solidity", "Tailwind"]}
                    status="Done"
                />
                <ProjectCard
                    title="A FreeLancing Platform"
                    imageSrc={sih}
                    description="A Freelancing platform, Empowring the Employbility in India."
                    previewLink="https://x.com/kartik___doda/status/1832169622386233410"
                    githubLink="https://github.com/dodaa08/SkillSeva-"
                    techStack={["Next.js", "Supabase", "Stripe", "Tailwind"]}
                    status="Done"
                />
            </div>
            {/* Second row of project cards */}
            <div className='flex flex-col md:flex-row justify-center gap-8'>
                <ProjectCard
                    title="Broken Supply Chains"
                    imageSrc={sp}
                    description="Get connected with the best suppliers in the market."
                    previewLink=""
                    githubLink="https://github.com/dodaa08/Supply-chain-optimization"
                    techStack={["Python", "Streamlit", "Pandas", "Numpy"]}
                    status="Done"
                />
                <ProjectCard
                    title="Dholo"
                    imageSrc={laundry}
                    description="Now book a Laundry one click."
                    previewLink="https://dholoapp.netlify.app/"
                    githubLink="https://github.com/dodaa08/DholoApp"
                    techStack={["Java", "XML", "Firebase"]}
                    status="Done"
                />
                <ProjectCard
                    title="Crypto Wallet"
                    imageSrc={wallet}
                    description="Working on making the UX easy for onboarding users."
                    previewLink="https://store-crypto.vercel.app/"
                    githubLink="https://github.com/dodaa08/CryptoWallet"
                    techStack={["React.js", "Ethers.js", "Web3.js", "Tailwind"]}
                    status="Done"
                />
            </div>
        </main>
    );
}
