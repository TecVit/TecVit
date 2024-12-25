import { useEffect, useState } from 'react';
import './App.css';

// Images
import BackgroundImage from './image/background.jpg';
import LeticiaImage from './image/leticia.png';
import EtecImage from './image/etec.png';
import AppLeticiaImage from './image/appLeticia.png';
import CipaImage from './image/cipa.png';
import AppNativeLeticiaImage from './image/appNativeLeticia.png';
import TaskaiImage from './image/taskai.png';
import InterclasseImage from './image/interclasse.png';

// Icons
import { IonIcon } from "@ionic/react";
import * as IoniconsIcons from 'ionicons/icons';

function App() {

  // Profile
  let name = "Vitor Custodio da Silva";
  let profession = "Desenvolvedor de Software";
  let country = "BR";
  let description = "Desenvolvedor de software com mais de 2 anos de experiência na construção de aplicativos web.";
  let skills = ["Typescript", "React", "Node.js", "Python", "ExpressJS", "C++", "MondoDB", "Git"];
  let icons = "https://skillicons.dev/icons?theme=light&perline=8&i=html,css,tailwind,sass,js,ts,react,nodejs,express,npm,mongodb,git,github,cloudflare,firebase,netlify,aws,gcp,linux,mint,debian,kali,python,cpp,c";

  // About Me
  let about = "Sou apaixonado por usar a tecnologia para resolver problemas do mundo real. Estou sempre em busca de novas maneiras de melhorar a experiência do usuário e tornar o software mais acessível a todos. Também sou um forte defensor do software de código aberto e estou sempre disposto a contribuir com a comunidade.";
  let website = "tecvit.netlify.app";
  let email = "vitorfreelancer021@gmail.com";
  let link_website = "https://tecvit.netlify.app";
  let link_email = "mailto:vitorfreelancer021@gmail.com";
  
  // Informations
  let location = "Araraquara, SP";
  let experience = "+2 anos";
  let dateOfBirth = "08/03/2009";

  // Experiences
  let experiences = [
  ];

  // Educations
  let educations = [
    {
      logo: EtecImage,
      type: "Ensino Médio Integrado com Curso Técnico de RH",
      name: "Etec - Anna de Oliveira Ferraz",
      description: "Focado no desenvolvimento de habilidades em gestão de recursos humanos, incluindo liderança de equipes, recrutamento e comunicação organizacional. Incentiva a aprendizagem prática e projetos aplicados para preparar os alunos para os desafios profissionais.",
      location: "Centro, Araraquara",
      data: "2025 - 2027",
    },
    {
      logo: LeticiaImage,
      type: "Ensino Fundamental",
      name: "E.E. Letícia G. B de C. Lopes",
      description: "Durante o Ensino Fundamental na E.E. Letícia G. B de C. Lopes, desenvolvi habilidades básicas importantes, como alfabetização, raciocínio lógico e trabalho em equipe. Este período foi essencial para construir minha base acadêmica e formar valores que continuo aplicando na minha trajetória pessoal e profissional.",
      location: "Jd. das Roseiras, SP",
      data: "2020 - 2023",
    }
  ];

  // Educations
  let projects = [
    {
      logo: AppNativeLeticiaImage,
      name: "APP - Letícia Family",
      service: "React Native",
      position: "Programador",
      description: "Desenvolvi um aplicativo voltado para facilitar a comunicação entre responsáveis e professores, permitindo o envio de ocorrências, atualizações sobre o desempenho escolar dos alunos e outros comunicados importantes. A plataforma proporciona uma interação ágil e eficiente, garantindo que os responsáveis estejam sempre informados sobre o progresso e bem-estar dos alunos.",
      data: "2025",
    },
    {
      logo: TaskaiImage,
      name: "TaskAI V1",
      service: "React, NodeJS",
      position: "CEO e CTO",
      description: "Criei um projeto para automatizar tarefas repetitivas através de comandos baseados em cliques. A solução permite simplificar processos como preenchimento de formulários, execução e navegação em um sistema da escola, aumentando a produtividade e reduzindo o tempo gasto em atividades manuais.",
      data: "2024",
      link: "https://taskai-v1.netlify.app",
    },
    {
      logo: CipaImage,
      background: "#ffffff",
      name: "Website - CIPA",
      service: "Html, Css, JavaScript e NodeJS",
      position: "Desenvolvedor",
      description: "Desenvolvi um site para a CIPA (Comissão Interna de Prevenção de Acidentes) com o objetivo de coletar relatos de alunos, professores e demais membros da comunidade escolar sobre segurança e condições do ambiente escolar. A plataforma permite que os usuários registrem situações relacionadas à segurança no local, contribuindo para a melhoria contínua do ambiente escolar e para o cumprimento das normas de segurança.",
      data: "2024",
      link: 'https://cipa.netlify.app',
    },
    {
      logo: InterclasseImage,
      background: "#1a0830",
      name: "Torneios e Interclasses",
      service: "React e Firebase",
      position: "Desenvolvedor",
      description: "Criei um site voltado para a gestão de torneios e interclasses na escola, oferecendo funcionalidades como registro de equipes, visualização de resultados e montagem de tabelas de chaveamento. A plataforma simplifica a organização dos eventos esportivos e incentiva a participação de forma dinâmica e intuitiva.",
      data: "2024",
      link: "https://interclasse.netlify.app",
    },
    {
      logo: AppLeticiaImage,
      logoPadding: 3,
      background: "#144774",
      name: "Aplicativo Escolar",
      service: "React Native",
      position: "Fundador",
      description: "Durante o Ensino Fundamental, desenvolvi um aplicativo escolar que facilita a comunicação direta entre gestão, direção e coordenação da escola com os responsáveis, permitindo o envio de mensagens e boletins de forma rápida e eficiente.",
      data: "2023 - 2024",
      link: 'https://app-leticia-em.netlify.app',
    },
  ];

  // Modais
  const [mdResume, setMdResume] = useState(false);
  const [mdProjects, setMdProjects] = useState(true);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    
    const lightTheme = {
      '--one': '#020617',
      '--two': '#0f172a',
      '--three': '#1e293b',
      '--four': '#334155',
      '--five': '#475569',
      '--six': '#64748b',
      '--seven': '#94a3b8',
      '--eight': '#cbd5e1',
      '--nine': '#e2e8f0',
      '--ten': '#f1f5f9',
      '--eleven': '#f8fafc',
      '--boxShadow': '0 1px 2px 0 rgba(0, 0, 0,.2)',
    };
  
    const darkTheme = {
      '--one': '#f8fafc',
      '--two': '#e5ecf3',
      '--three': '#e2e8f0',
      '--four': '#cbd5e1',
      '--five': '#94a3b8',
      '--six': '#64748b',
      '--seven': '#475569',
      '--eight': '#334155',
      '--nine': '#2d374b',
      '--ten': '#0f172a',
      '--eleven': '#020617',
      '--boxShadow': '0 1px 2px 0 rgba(255, 255, 255,.2)',
    };
  
    const currentTheme = theme === 'dark' ? darkTheme : lightTheme;
  
    for (const [key, value] of Object.entries(currentTheme)) {
      document.documentElement.style.setProperty(key, value);
    }
  };

  useEffect(() => {
    toggleTheme();
  }, []);

  return (
    <main className='container'>
      <section className='content'>

        {/* Left */}
        <article className='left'>

          {/* Profile */}
          <div className='md-profile'>
            <div className='image-container'>
              <div className='image'>
                <img src={BackgroundImage} alt='background' />
              </div>
            </div>
            <div className='text'>
              <div className="img-person"></div>
              <h1 className='title-two'>
                {name}
                <div className='circle'></div>
              </h1>
              <h2>{profession} - {country}</h2>
              <p>{description}</p>
              {/* <img className='img-icons' src={icons} alt="Ícones" /> */}
              <div className='skills'>
                {skills.length > 0 && (
                  skills.map((skill, i) => (
                    <div className='skill' key={i}>
                      <p>{skill}</p>
                    </div>
                  ))
                )}
              </div>
              <a href = "/curriculo.pdf" download="curriculo.pdf">
                Baixar Currículo<IonIcon className='icon' icon={IoniconsIcons.downloadOutline} />
              </a>
            </div>
          </div>

          {/* About me */}
          <div className='md-about'>
            <h1 className='title title-about'>
              <div className='circle'></div>
              Sobre Mim
            </h1>
            <p>{about}</p>
            <span onClick={() => window.open(link_website)}> <IonIcon className="icon" icon={IoniconsIcons.cloudOutline} /> {website}</span>
            <span onClick={() => window.open(link_email)}> <IonIcon className="icon" icon={IoniconsIcons.mailOutline} /> {email}</span>
          </div>

          {/* Information */}
          <div className='md-information'>
            <h1 className='title'>
              <div className='circle'></div>
              Informações
            </h1>
            <li>
                <p>Localidade</p>
                <span>{location}</span>
            </li>
            <li>
                <p>Experiência</p>
                <span>{experience}</span>
            </li>
            <li>
                <p>Data de Nascimento</p>
                <span>{dateOfBirth}</span>
            </li>       
          </div>

        </article>

        {/* Right */}
        <article className='right'>

          <div className='top'>
            <button onClick={() => {
              setMdProjects(false);
              setMdResume(true);
            }} className={mdResume && 'select'}>Resumo</button>
            <button onClick={() => {
              setMdProjects(true);
              setMdResume(false);
            }} className={mdProjects && 'select'}>Projetos</button>
          </div>

          <div className='content-right'>
              {mdResume && (
                <>
                  {experiences.length > 0 && (
                    <div className="md-experience">
                      <h1 className='title'>
                        <div className='circle'></div>
                        Experiência
                      </h1>
                      
                      <div className='list'>
                        {experiences.length > 0 && (
                          experiences.map((obj, i) => (
                            <div className='item' key={i}>
                              <div style={{ background: obj.background ? obj.background : '' }} className='logo'>
                                <img src={obj.logo} />
                              </div>
                              <div className='text'>
                                <h1>{obj.type}</h1>
                                <div className='info'>
                                  {obj.name && (
                                    <p>
                                      <IonIcon className='icon' icon={IoniconsIcons.schoolOutline} />
                                      {obj.name}
                                    </p>
                                  )}
                                  {obj.location && (
                                    <p>
                                      <IonIcon className='icon' icon={IoniconsIcons.locationOutline} />
                                      {obj.location}
                                    </p>
                                  )}
                                  {obj.data && (
                                    <p>
                                      <IonIcon className='icon' icon={IoniconsIcons.calendarOutline} />
                                      {obj.data}
                                    </p>
                                  )}
                                </div>
                                <p>{obj.description}</p>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  )}
                  
                  <div className="md-education">
                    <h1 className='title'>
                      <div className='circle'></div>
                      Educação
                    </h1>
                    <div className='list'>
                      {educations.length > 0 && (
                        educations.map((obj, i) => (
                          <div className='item' key={i}>
                            <div style={{ background: obj.background ? obj.background : '' }} className='logo'>
                              <img src={obj.logo} />
                            </div>
                            <div className='text'>
                              <h1>{obj.type}</h1>
                              <div className='info'>
                                {obj.name && (
                                  <p>
                                    <IonIcon className='icon' icon={IoniconsIcons.schoolOutline} />
                                    {obj.name}
                                  </p>
                                )}
                                {obj.location && (
                                  <p>
                                    <IonIcon className='icon' icon={IoniconsIcons.locationOutline} />
                                    {obj.location}
                                  </p>
                                )}
                                {obj.data && (
                                  <p>
                                    <IonIcon className='icon' icon={IoniconsIcons.calendarOutline} />
                                    {obj.data}
                                  </p>
                                )}
                              </div>
                              <p>{obj.description}</p>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </>
              )}

              {mdProjects && (
                <>
                  <div className="md-projects">
                    <h1 className='title'>
                      <div className='circle'></div>
                      Projetos
                    </h1>
                    <div className='list'>
                      {projects.length > 0 && (
                        projects.map((obj, i) => (
                          <div className='item' key={i}>
                            <div style={{ background: obj.background ? obj.background : '', padding: obj.logoPadding ? `${obj.logoPadding}px` : '' }} className={`logo`}>
                              <img src={obj.logo} />
                            </div>
                            <div className='text'>
                              <h1>{obj.name}</h1>
                              <div className='info'>
                                {obj.service && (
                                  <p>
                                    <IonIcon className='icon' icon={IoniconsIcons.folderOutline} />
                                    {obj.service}
                                  </p>
                                )}
                                {obj.position && (
                                  <p>
                                    <IonIcon className='icon' icon={IoniconsIcons.peopleOutline} />
                                    {obj.position}
                                  </p>
                                )}
                                {obj.data && (
                                  <p>
                                    <IonIcon className='icon' icon={IoniconsIcons.calendarOutline} />
                                    {obj.data}
                                  </p>
                                )}
                              </div>
                              <p>{obj.description}</p>
                              {obj.link && (
                                <a onClick={() => window.open(obj.link)}> <IonIcon className='icon' icon={IoniconsIcons.linkOutline} /> {obj.link} </a>
                              )}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </>
              )}
          </div>
        
        </article>

      </section>
    </main>
  );
}

export default App;