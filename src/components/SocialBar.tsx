import { Github } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FileUser } from 'lucide-react';


const SocialBar = ()=>{
    return(
        <>
        <div className="flex jsutify-center space-x-4">
        <Link target='_blank' to="https://github.com/dodaa08">
        <Github className='cursor-pointer'/>
        </Link>
        <Link target='_blank' to="https://x.com/kartik___doda">
        <Twitter className='cursor-pointer'/>
        </Link>
        <Link target='_blank' to="https://www.youtube.com/@Kartik_Doda">
        <Youtube className='cursor-pointer'/>
        </Link>
        <Link target='_blank' to="https://www.instagram.com/kartik__doda/">
        <Instagram className='cursor-pointer'/>
        </Link>
        <Link target='_blank' to="https://www.linkedin.com/in/kartikd4152g/">
        <Linkedin className='cursor-pointer'/>
        </Link>
        <Link target='_blank' to="https://drive.google.com/file/d/1vEpjBriQgoAOqBOVuCIiki896NGAZORt/view">
        <FileUser />
        </Link>
        </div>
        </>
    )
};

export default SocialBar;