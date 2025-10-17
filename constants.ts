import { Category, Business, Job, ProfessionalService, NewsItem, User } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Magasins', slug: 'magasins', icon: 'fa-store' },
  { id: '2', name: 'Pharmacies', slug: 'pharmacies', icon: 'fa-pills' },
  { id: '3', name: 'Cafés & Restaurants', slug: 'cafes-restaurants', icon: 'fa-utensils' },
  { id: '4', name: 'Médecins & Cliniques', slug: 'medecins', icon: 'fa-user-doctor' },
  { id: '5', name: 'Taxis', slug: 'taxis', icon: 'fa-taxi' },
  { id: '6', name: 'Services Pro', slug: 'services-pro', icon: 'fa-screwdriver-wrench' },
  { id: '7', name: 'Emplois', slug: 'emplois', icon: 'fa-briefcase' },
];

export const BUSINESSES: Business[] = [
    // Magasins
    { id: 'b1', categorySlug: 'magasins', name: 'Marjane Nador', image: 'https://picsum.photos/400/300?random=1', address: 'Boulevard Hassan II, Nador', phone: '0536-XX-XX-XX', workingHours: '09:00 - 22:00', coordinates: { lat: 35.166, lng: -2.928 }, rating: 4.5, reviews: [{id: 'r1', userName: 'Ahmed', userImage: 'https://picsum.photos/100/100?random=11', rating: 5, comment: 'Très grand choix !', date: '2024-07-20'}]},
    { id: 'b2', categorySlug: 'magasins', name: 'BIM Oulad Mimoun', image: 'https://picsum.photos/400/300?random=2', address: 'Quartier Oulad Mimoun, Nador', phone: '0536-XX-XX-XX', workingHours: '09:00 - 21:00', coordinates: { lat: 35.17, lng: -2.93 }, rating: 4.0, reviews: [] },
    // Pharmacies
    { id: 'b3', categorySlug: 'pharmacies', name: 'Pharmacie Al Amal', image: 'https://picsum.photos/400/300?random=3', address: 'Avenue Mohammed V, Nador', phone: '0536-XX-XX-XX', workingHours: '09:00 - 20:00', coordinates: { lat: 35.175, lng: -2.932 }, rating: 4.8, isPharmacyOnDuty: false, reviews: [] },
    { id: 'b4', categorySlug: 'pharmacies', name: 'Pharmacie de Garde Nador', image: 'https://picsum.photos/400/300?random=4', address: 'Rue 24, Nador', phone: '0536-XX-XX-XX', workingHours: '24h/24', coordinates: { lat: 35.16, lng: -2.935 }, rating: 4.9, isPharmacyOnDuty: true, reviews: [{id: 'r2', userName: 'Fatima', userImage: 'https://picsum.photos/100/100?random=12', rating: 5, comment: 'Ouverte tard le soir, merci !', date: '2024-07-19'}]},
    // Cafés & Restaurants
    { id: 'b5', categorySlug: 'cafes-restaurants', name: 'Café de la Corniche', image: 'https://picsum.photos/400/300?random=5', address: 'Corniche de Nador', phone: '0536-XX-XX-XX', workingHours: '07:00 - 00:00', coordinates: { lat: 35.18, lng: -2.92 }, rating: 4.6, reviews: [] },
    { id: 'b6', categorySlug: 'cafes-restaurants', name: 'Restaurant Poissons "Chez Said"', image: 'https://picsum.photos/400/300?random=6', address: 'Port de Nador', phone: '0536-XX-XX-XX', workingHours: '12:00 - 23:00', coordinates: { lat: 35.178, lng: -2.925 }, rating: 4.9, reviews: [] },
    // Médecins
    { id: 'b7', categorySlug: 'medecins', name: 'Dr. Karim Alami - Cardiologue', image: 'https://picsum.photos/400/300?random=7', address: 'Clinique Al Hikma, Nador', phone: '0536-XX-XX-XX', workingHours: '09:00 - 17:00', coordinates: { lat: 35.172, lng: -2.934 }, rating: 5.0, reviews: [] },
    { id: 'b8', categorySlug: 'medecins', name: 'Hôpital Al Hassani', image: 'https://picsum.photos/400/300?random=8', address: 'Avenue des FAR, Nador', phone: '0536-XX-XX-XX', workingHours: '24h/24', coordinates: { lat: 35.163, lng: -2.931 }, rating: 3.5, reviews: [] },
];

export const JOBS: Job[] = [
  { id: 'j1', title: 'Serveur/Serveuse de café', company: 'Café de la Corniche', category: 'Restauration', description: 'Recherche serveur/serveuse avec expérience pour service en salle et terrasse. Flexibilité et dynamisme requis.', contact: '0612-34-56-78', postedDate: '2024-07-20', status: 'approved' },
  { id: 'j2', title: 'Vendeur en magasin', company: 'Marjane Nador', category: 'Vente', description: 'Vendeur recherché pour le rayon électronique. Connaissance des produits high-tech exigée.', contact: 'rh@marjane.ma', postedDate: '2024-07-19', status: 'approved' },
  { id: 'j3', title: 'Développeur Web Junior', company: 'Nador Tech', category: 'Informatique', description: 'Nous cherchons un développeur React pour rejoindre notre équipe. Possibilité de pré-embauche.', contact: 'jobs@nadortech.ma', postedDate: '2024-07-21', status: 'pending' },
];

export const SERVICES: ProfessionalService[] = [
  { id: 's1', name: 'Hassan Plomberie', profession: 'Plomberie', phone: '0661-XX-XX-XX', whatsapp: '0661-XX-XX-XX', rating: 4.8, image: 'https://picsum.photos/400/300?random=9' },
  { id: 's2', name: 'Électricité Express', profession: 'Électricité', phone: '0662-XX-XX-XX', rating: 4.5, image: 'https://picsum.photos/400/300?random=10' },
  { id: 's3', name: 'Menuisier de Nador', profession: 'Menuiserie', phone: '0663-XX-XX-XX', whatsapp: '0663-XX-XX-XX', rating: 4.9, image: 'https://picsum.photos/400/300?random=11' },
];

export const NEWS: NewsItem[] = [
    { id: 'n1', content: 'Info : Coupure d\'eau prévue demain dans le quartier Al Matar de 10h à 14h.' },
    { id: 'n2', content: 'La pharmacie de garde cette semaine est "Pharmacie de Garde Nador".' },
    { id: 'n3', content: 'Le festival de musique de Nador commence ce week-end sur la corniche !' },
];

export const MOCK_USER: User = {
    id: 'u1',
    name: 'Yassine B.',
    email: 'yassin@nadorconnect.ma',
    profilePicture: 'https://picsum.photos/200/200?random=50',
    favorites: ['b1', 'b5', 's3'],
    posts: [JOBS[2]],
};