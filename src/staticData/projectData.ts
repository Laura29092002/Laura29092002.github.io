import type { projectType } from '@/types/projectType'
import imageAR from '@/assets/images/AR.png'
import imageMessagerie from '@/assets/images/messagerie.png'
import imageSizzleAndStudy from '@/assets/images/sizzleandstudy.png'
import imageCapteur from '@/assets/images/capteur.png'
import videoCapteur from '@/assets/videos/capteur.mp4'
import imageHelico from '@/assets/images/helico.png'
import videoHelico from '@/assets/videos/helico.mp4'
import imageEcam from '@/assets/images/ECAM.png'
import imageLicorne from '@/assets/images/licorne.png'
import imageSLF from '@/assets/images/slf.png'

export const projectData: projectType[] = [
  {
    title: "Site d'e-commerce",
    image: imageSLF,
    technologies: 'HTML/ CSS/ PHP',
    description: "Concevoir et développer un site web e-commerce spécialisé dans la vente de vêtements. L’objectif principal est de créer une plateforme intuitive et moderne permettant à la fois aux vendeurs de proposer leurs produits et aux clients d’effectuer leurs achats facilement.",
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
    title: 'Application de recettes',
    image: imageSizzleAndStudy,
    technologies: 'PHP/ HTML/ CSS/ SQL',
    description:
      "Développement d'un site web interactif permettant aux utilisateurs de consulter, rechercher et gérer des recettes de cuisine, avec un espace personnel et un chatbot pour faciliter la découverte de recettes.",
    link: '',
    video: '',
  },
  {
    title: 'Dashboard de capteurs',
    image: imageCapteur,
    technologies: 'ReactJS',
    description: "Développement d'un dashboard de gestion d'un parc informatique.",
    link: 'https://gitlab.com/tw-ece-paris/promo-2023/gr-02/prj-pei-tw-2023-01-moutoussamy-mussard',
    video: videoCapteur,
  },
  {
    title: 'Visualisation de plat en AR',
    image: imageAR,
    technologies: 'Unity / Blender',
    description:
      "En scannant un plat dans un menu de restaurant, l'application permet de voir le plat en 3D avec ses allergènes, sa composition et son poids en calories.",
    link: '',
    video: '',
  },
  {
    title: 'Hélicoptère en 3D',
    image: imageHelico,
    technologies: 'Fusion360',
    description: "Création d'un modèle d'hélicoptère en 3D.",
    link: '',
    video: videoHelico,
  },
  {
    title: 'Application mobile portail étudiant',
    image: imageEcam,
    technologies: 'Kotlin Compose MultiPlatform',
    description:
      "Développement d'une application mobile destinée à servir de portail pour les étudiants, facilitant l'accès aux informations académiques, aux ressources pédagogiques et aux services administratifs.",
    link: 'https://github.com/RISE-Remote-Intranet-School-Environment/RISE_PROJECT_TEAM_2',
    video: '',
  },
  {
    title: 'Dashboard interactif pour la gestion de projets',
    image: imageLicorne,
    technologies:
      'Angular / Java (Spring Boot) / JPA/Hibernate / PostgreSQL / ECharts / Maven / Karma / Jasmine / SonarQube',
    description:
      "Conception et développement d'une application web complète pour la gestion et le suivi de projets, intégrant un dashboard interactif, une API REST, ainsi qu'une méthodologie de développement structurée axée sur la qualité du code et les bonnes pratiques agiles.",
    link: '',
    video: '',
  },
]
