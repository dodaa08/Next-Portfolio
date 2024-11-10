"use client";

import React from 'react';
import ProjectCard from './ProjectCard';
import quickgigs from '../../imgs/quickgigs.png';
import skillseva from "../../imgs/project2nd.jpg";
import dholo from "../../imgs/project3.png";

export default function Page() {
    return (
        <div className={`flex flex-col`}>
            <main className='flex flex-col justify-center items-center mt-10 flex-grow'>
                <ProjectCard
                    title="Quick Gigs"
                    imageSrc={quickgigs}
                    description="A Decentralized Market Place, For Gig workers/ Freelancers. The Solidity contracts will automate the Payment (in crypto for now) once the work is verified from both ends."
                    previewLink="https://x.com/kartik___doda/status/1850478191934394825"
                    githubLink="https://github.com/dodaa08/Quick-gigs"
                />
                <ProjectCard
                    title="Skill Seva"
                    imageSrc={skillseva}
                    description="An end to end freelancing platform, Built using Next.JS, TypeScript, Supabase, Clerk, Stripe. It&apos;s Ready and fully functional, Both the ends are connected with payment integration."
                    previewLink="https://x.com/kartik___doda/status/1832169622386233410"
                    githubLink="https://github.com/dodaa08/SkillSeva-"
                />
                <ProjectCard
                    title="Dholo"
                    imageSrc={dholo}
                    description="An Android App built using Java, XML, Firebase. It&apos;s a Laundry Management app where users can book a laundry service, track their order, and get tokens online."
                    previewLink="https://dholoapp.netlify.app/"
                    githubLink="https://github.com/dodaa08/DholoApp"
                />
            </main>
        </div>
    );
}
