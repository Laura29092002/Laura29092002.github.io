import type { projectType } from '@/types/projectType'
import imageAR from '@/assets/images/AR.png'
import imageMessagerie from '@/assets/images/messagerie.png'
//import imageSizzleAndStudy from '@/assets/images/sizzleandstudy.png'
import imageWeeklyMeals from '@/assets/images/weekly-meals.png'
import imageCapteur from '@/assets/images/capteur.png'
import videoCapteur from '@/assets/videos/capteur.mp4'
import imageHelico from '@/assets/images/helico.png'
import videoHelico from '@/assets/videos/helico.mp4'
import imageEcam from '@/assets/images/ECAM.png'
import imageFilm from '@/assets/images/film.png'
import videoFilm from '@/assets/videos/film.mp4'
import imageLicorne from '@/assets/images/licorne.png'
import imageSLF from '@/assets/images/slf.png'
import imageSNCF from '@/assets/images/figma-SNCF.png'
import videoSNCF from '@/assets/videos/figma.mp4'

const fileHelico = '/Hélicoptère.f3d'


export const projectData: projectType[] = [
  {
    title: "SLF - Plateforme de vente de vêtements",
    image: imageSLF,
    technologies: 'HTML / CSS / PHP',
    description: "Concevoir et développer un site web e-commerce spécialisé dans la vente de vêtements, permettant à la fois aux vendeurs de proposer leurs produits et aux clients d’effectuer leurs achats facilement.",
    link: 'https://github.com/Laura29092002/SLF',
    video: '',
  },
  {
    title: 'Application de bureau - Messagerie instantanée',
    image: imageMessagerie,
    technologies: 'Java Swing / Web Sockets / AWS',
    description:
      "Développement d'une application de messagerie instantanée pour postes de travail, permettant aux utilisateurs de communiquer en temps réel dans un environnement sécurisé.",
    link: 'https://github.com/ProjetJavaMessagerieInstantanee/ProjetJava/tree/main',
    video: '',
  },
  {
    title: 'Weekly Meals - Application de recettes',
    image: imageWeeklyMeals,
    technologies: 'ANGULAR / Java Spring Boot/ PostgreSQL',
    description:
      "Développement d'une application web permettant aux utilisateurs de plannifier ces recettes de la semaines et de générer des recettes de cuisine en fonction de ces préférences alimentaires (Végétarien, Vegan, Sans gluten, etc).",
    link: 'https://github.com/Laura29092002/foodApp',
    video: '',
  },
  {
    title: "Dashboard de gestion d'un parc informatique",
    image: imageCapteur,
    technologies: 'ReactJS / NodeJS / MongoDB',
    description: "Développement d'un dashboard de gestion d'un parc informatique permettant de suivre et d'afficher des métriques de différents capteurs. Une partie administrateur permet d'ajouter, de modifier et de supprimer ces appareils et utilisateurs.",
    link: '',
    video: videoCapteur,
  },
  {
    title: 'LICORNE - Dashboard pour la gestion de projets',
    image: imageLicorne,
    technologies:
      'Angular / Java (Spring Boot) / JPA/Hibernate / PostgreSQL / ECharts / Maven / Karma / Jasmine / SonarQube',
    description:
      "Conception et développement d'une application web pour la gestion et le suivi de projets, intégrant un dashboard interactif, une API REST, ainsi qu'une méthodologie de développement structurée axée sur la qualité du code et les bonnes pratiques agiles.",
    link: '',
    video: '',
  },
  {
    title: 'AReal - Visualiser les plats en Réalité Augmentée',
    image: imageAR,
    technologies: 'Unity / Blender',
    description:
      "En scannant un menu de restaurant, l'application permet de visualiser les plats en 3D ainsi que ses allergènes, sa composition et son apport en calories.",
    link: '',
    video: '',
  },
  {
    title: 'Hélicoptère en 3D',
    image: imageHelico,
    technologies: 'Fusion360',
    description: "Création d'un modèle d'hélicoptère en 3D sur l'outil Fusion 360.",
    link: fileHelico,
    video: videoHelico,
  },
  {
    title: "Portail étudiant - Application pour l'ECAM",
    image: imageEcam,
    technologies: 'Kotlin Compose MultiPlatform',
    description:
      "Développement d'une application mobile destinée à servir de portail pour les étudiants, facilitant l'accès aux informations académiques, aux ressources pédagogiques et aux services administratifs.",
    link: 'https://github.com/RISE-Remote-Intranet-School-Environment/RISE_PROJECT_TEAM_2',
    video: '',
  },
  {
    title: 'CinéCosmo - Application de films, comics et séries',
    image: imageFilm,
    technologies: 'Flutter',
    description:
      "Développement d’une application mobile dont le but est de récupérer depuis une API externe des données de types : films, comics et séries. L’application permet d'afficher, de classer et de rechercher ces données.",
    link: 'https://github.com/Laura29092002/ProjetProgrammationMobile',
    video: videoFilm,
  },
  {
    title: 'Prototype FIGMA - Réplique site SNCF',
    image: imageSNCF,
    technologies: 'FIGMA',
    description:
      "Réplique complète du site de la SNCF dans FIGMA à but de formation à l'outil.",
    link: '',
    video: videoSNCF,
  },
  
]
