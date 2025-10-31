import type { schoolStep } from '@/types/stepType'

export const schoolData: schoolStep[] = [
  {
    title: "Diplôme d'ingénieur en informatique",
    period: '2022 - 2025',
    description:
      'Développement frontend (HTML CSS, React et Vue);Développement backend (Python, Java, PHP);Bases de données (SQL et NoSQL);Méthodologies agiles (Scrum, Kanban)',
    place: 'ECE - Paris (75015)',
    direction: 'left',
  },
  {
    title: 'CPGE MPSI puis MP',
    period: '2020 - 2022',
    description:
      'Analyse et résolution de problèmes complexes;Travail en équipe et gestion du temps sous pression;Préparation aux concours d’entrée aux écoles d’ingénieurs',
    place: 'Lycée Leconte De Lisle - Réunion (97490)',
    direction: 'right',
  },
  {
    title: 'Baccalaureat Scientifique',
    period: '2020',
    description: '',
    place: 'Lycée Pierre Poivre - Réunion (97480)',
    direction: 'left',
  },
]
