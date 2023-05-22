import React from 'react';
import PageTitle from "../PageTitle";
import SkillCard from "../SkillCard";
import '../SkillCard.css';
function Skills(props) {
    const genSkills        = ['Reserch and Development (CS)', 'High Performance Computing',
        'Cyber Security', 'Database Management', 'Version Control', 'Lean Manufacturing'];
    const managementSkills = ['Agile/Scrum', 'Organizational Behaviour',
        'Cyber Risk Management'];
    const Genlanguages     = ['Java', 'SQL', 'C', 'C++', 'NodeJS',
        'JavaScript', 'Lua', 'PHP', 'R', 'TypeScript', 'CSS', 'G&M', 'EmacsLisp', 'AWK'];
    const MarkupLang       = ['HTML', 'YAML', 'XML', 'JSON', 'Markdown',
        'Emacs Org Mode'];
    const Frameworks       = ['React Native', 'JHipster', 'RevealJS'];
    const LibraryTech      = ['OpenMPI', 'OpenMP', 'OpenSSL', 'Cypress',
        'Spring MVC', 'Spring Data JPA', 'Hibernate', 'rpcbind', 'ZeroMQ with C'];
    const OperatingSystems = ['Arch Linux', 'Debian Linux', 'RHEL', 'SUSE Linux'];
    const DatabaseMsys     = ['PostreSQL', 'MySQL / MariaDB', 'MongoDB'];
    const Virtualization   = ['Docker', 'Portainer', 'LXC/LXD', 'VirtualBox',
        'QEMU/KVM'];
    const LinuxUtils       = ['RipGrep', 'OpenBox WM', 'Gnome', 'KDE', 'Cinnamon',
        'Vim', 'Emacs', 'Bash', 'ZSH', 'Systemd processes', 'cut, grep, xargs, sed, etc...'];
    const CloudProds       = ['Linode', 'AWS', 'Interserver'];
    const MiscSkill        = ['AES', 'RSA', 'CVE', 'CVSS', 'Material-UI', 'Next-UI',
        'JQuery', 'Bootstrap', 'Maven', 'Git', 'Haproxy', 'TeamSpeak Administration', 'Discord Administration',
        'Apache Webserver', 'NGINX'];
    const ManufactSkill    = ['Haitian Injection Molding processing (medical and consumer goods) [Polypropylene, Polycarbonate]',
        'Star Automation Robotics', 'Fanuc Robotics (Certified, Cert Level 1)',
        'Plant Layout Optimization', 'Conair Franklin Material Handling'];
    const funnySkills       = ['Linux Ricing', 'Wurm Online Grinding', 'Conky (Linux Desktop Widget)',
        'Stock and Crypto Day Trading', 'Googler', 'Youtube Learner', 'LateX', 'Jack of All tradesman',
        'Packard Engine Rebuilder', 'Lathe and Milling Experience', 'Crypto Miner', 'Car Salesman',
        'CSS Gradient Animations', 'TIG Welding (Aluminum)', 'MIG Welding (Steel)', 'Web Development',
        'Mikrotik Administration', 'Server / Desktop Computer Builder', 'Novice Circuit Tinkerer',
        'Electrical Wiring (120-480V, single or three phase)', 'Fast Learner (Pattern Recognition Skills)'];
    return (
        <div className='skillsPageWrapper'>
           <PageTitle title='Skills'
                      titleSize='title--mainSize'
                      titleColor="1F2120"
                      bgColor="#E0FFF8"/>
            <div className='skillDivider'></div>

            <div className='skillsContainer'>
                <div className='skillTitles'>
                <PageTitle title='General Skills'
                           titleSize='itle--subSize'
                           titleColor="1F2120"
                           bgColor="#a6c1ed"/>
                </div>

                <div className='skillsWrapper'>
                <SkillCard SkillBullets={genSkills}/>
                </div>
            </div>
            <div className='skillDivider'></div>

            <div className='skillsContainer'>
                <div className='skillTitles'>
                    <PageTitle title='Management'
                               titleSize='itle--subSize'
                               titleColor="1F2120"
                               bgColor="#a6c1ed"/>
                </div>
                <div className='skillsWrapper'>
                    <SkillCard SkillBullets={managementSkills}/>
                </div>
            </div>
            <div className='skillDivider'></div>


            <div className='skillsContainer'>
                <div className='skillTitles'>
                    <PageTitle title='Programming Languages'
                               titleSize='itle--subSize'
                               titleColor="1F2120"
                               bgColor="#a6c1ed"/>

                </div>
                <div className='skillsWrapper'>
                    <SkillCard SkillBullets={Genlanguages}/>
                </div>
            </div>
            <div className='skillDivider'></div>

            <div className='skillsContainer'>
                <div className='skillTitles'>
                    <PageTitle title='Markup Languages'
                               titleSize='itle--subSize'
                               titleColor="1F2120"
                               bgColor="#a6c1ed"/>

                </div>
                <div className='skillsWrapper'>
                    <SkillCard SkillBullets={MarkupLang}/>
                </div>
            </div>
            <div className='skillDivider'></div>

            <div className='skillsContainer'>
                <div className='skillTitles'>
                    <PageTitle title='Frameworks'
                               titleSize='itle--subSize'
                               titleColor="1F2120"
                               bgColor="#a6c1ed"/>
                </div>
                <div className='skillsWrapper'>
                    <SkillCard SkillBullets={Frameworks}/>
                </div>
            </div>
            <div className='skillDivider'></div>

            <div className='skillsContainer'>
                <div className='skillTitles'>
                    <PageTitle title='Main Libraries'
                               titleSize='itle--subSize'
                               titleColor="1F2120"
                               bgColor="#a6c1ed"/>
                </div>
                <div className='skillsWrapper'>
                    <SkillCard SkillBullets={LibraryTech}/>
                </div>
            </div>
            <div className='skillDivider'></div>

            <div className='skillsContainer'>
                <div className='skillTitles'>
                    <PageTitle title='Operating Systems'
                               titleSize='itle--subSize'
                               titleColor="1F2120"
                               bgColor="#a6c1ed"/>
                </div>
                <div className='skillsWrapper'>
                    <SkillCard SkillBullets={OperatingSystems}/>
                </div>
            </div>
            <div className='skillDivider'></div>

            <div className='skillsContainer'>
                <div className='skillTitles'>
                    <PageTitle title='Database Management Systems'
                               titleSize='itle--subSize'
                               titleColor="1F2120"
                               bgColor="#a6c1ed"/>
                </div>
                <div className='skillsWrapper'>
                    <SkillCard SkillBullets={DatabaseMsys}/>
                </div>
            </div>
            <div className='skillDivider'></div>

            <div className='skillsContainer'>
                <div className='skillTitles'>
                    <PageTitle title='Virtualization Technologies'
                               titleSize='itle--subSize'
                               titleColor="1F2120"
                               bgColor="#a6c1ed"/>
                </div>
                <div className='skillsWrapper'>
                    <SkillCard SkillBullets={Virtualization}/>
                </div>
            </div>
            <div className='skillDivider'></div>

            <div className='skillsContainer'>
                <div className='skillTitles'>
                    <PageTitle title='Linux Technologies'
                               titleSize='itle--subSize'
                               titleColor="1F2120"
                               bgColor="#a6c1ed"/>
                </div>
                <div className='skillsWrapper'>
                    <SkillCard SkillBullets={LinuxUtils}/>
                </div>
            </div>
            <div className='skillDivider'></div>

            <div className='skillsContainer'>
                <div className='skillTitles'>
                    <PageTitle title='Cloud'
                               titleSize='itle--subSize'
                               titleColor="1F2120"
                               bgColor="#a6c1ed"/>
                </div>
                <div className='skillsWrapper'>
                    <SkillCard SkillBullets={CloudProds}/>
                </div>
            </div>
            <div className='skillDivider'></div>

            <div className='skillsContainer'>
                <div className='skillTitles'>
                    <PageTitle title='Manufacturing Technologies'
                               titleSize='itle--subSize'
                               titleColor="1F2120"
                               bgColor="#a6c1ed"/>
                </div>
                <div className='skillsWrapper'>
                    <SkillCard SkillBullets={ManufactSkill}/>
                </div>
            </div>
            <div className='skillDivider'></div>

            <div className='skillsContainer'>
                <div className='skillTitles'>
                    <PageTitle title='Miscellaneous'
                               titleSize='itle--subSize'
                               titleColor="1F2120"
                               bgColor="#a6c1ed"/>
                </div>
                <div className='skillsWrapper'>
                    <SkillCard SkillBullets={MiscSkill}/>
                </div>
            </div>
            <div className='skillDivider'></div>

            <div className='skillsContainer'>
                <div className='skillTitles'>
                    <PageTitle title='Funny or Uncategorized Skills'
                               titleSize='itle--subSize'
                               titleColor="1F2120"
                               bgColor="#a6c1ed"/>
                </div>
                <div className='skillsWrapper'>
                    <SkillCard SkillBullets={funnySkills}/>
                </div>
            </div>



        </div>
    );
}

export default Skills;