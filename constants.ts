import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'original',
    name: 'Pisang Original',
    description: 'Renyah alami dengan rasa pisang kepok asli pilihan. Tanpa pemanis buatan, cocok untuk yang suka rasa otentik.',
    price: 15000,
    image: 'https://picsum.photos/400/400?random=1',
    badge: 'Best Seller'
  },
  {
    id: 'coklat',
    name: 'Coklat Lumer',
    description: 'Balutan coklat premium yang tebal dan lumer di mulut. Manisnya pas, bikin mood langsung naik!',
    price: 18000,
    image: 'https://picsum.photos/400/400?random=2',
    badge: 'Favorit Anak'
  },
  {
    id: 'pedas',
    name: 'Pedas Balado',
    description: 'Bumbu balado racikan rahasia dengan level pedas yang nendang. Cocok buat teman nonton film.',
    price: 16000,
    image: 'https://picsum.photos/400/400?random=3'
  },
  {
    id: 'keju',
    name: 'Keju Gurih',
    description: 'Taburan bumbu keju manis gurih yang melimpah. Rasanya creamy dan bikin nggak bisa berhenti ngunyah.',
    price: 17000,
    image: 'https://picsum.photos/400/400?random=4'
  }
];

export const WA_NUMBER = "6281234567890"; // Example placeholder