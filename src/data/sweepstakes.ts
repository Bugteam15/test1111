
export interface Sweepstake {
  id: number;
  title: string;
  description: string;
  image: string;
  endDate: string;
  rating?: number;
  isPopular?: boolean;
  disclaimer?: string;
}

const sweepstakesData: Sweepstake[] = [
  {
    id: 1,
    title: "150% Extra Coins on 1st Purchase",
    description: "GC 50K + SC 25 FREE",
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2015&auto=format&fit=crop",
    endDate: "2025-04-30T23:59:59",
    rating: 9.8,
    isPopular: true,
    disclaimer: "No purchase necessary. Not available in AL, GA, ID, KY, MT, NV, LA, MI, MS, WA, DE, NJ, NY, CT, OH, PA, MD, WV. Void where prohibited by law. Must be 18 or older."
  },
  {
    id: 2,
    title: "Get Up To 625,000 Gold Coins",
    description: "Coins + 125 SC Free + 1250 VIP Points",
    image: "https://images.unsplash.com/photo-1584052189791-2b028d70f4d6?q=80&w=1974&auto=format&fit=crop",
    endDate: "2025-05-15T23:59:59",
    rating: 9.7,
    isPopular: true,
    disclaimer: "No purchase necessary. Not available in WA, ID, KY, GA, AL, MI, NV, MT, LA, DE. Void where prohibited by law. Must be 21+. Full T&Cs apply."
  },
  {
    id: 3,
    title: "Get Up to 57.5K GC + 27.5 FREE SC",
    description: "",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop",
    endDate: "2025-06-01T23:59:59",
    rating: 9.5,
    disclaimer: "No purchase necessary. Not available in WA, ID, KY, GA, AL, MI, NV, MT, LA, DE. Void where prohibited by law. Must be 21+. Full T&Cs apply."
  },
  {
    id: 4,
    title: "150% Extra, GC 60,000 + Free SC 30 for $9.99",
    description: "",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2026&auto=format&fit=crop",
    endDate: "2025-05-20T23:59:59",
    rating: 9.2,
    disclaimer: "No purchase necessary. Not available in WA, ID, KY, GA, AL, MI, NV, MT, LA, DE. Void where prohibited by law. Must be 21+. Full T&Cs apply."
  },
  {
    id: 5,
    title: "200% Extra on 1st Purchase – GC 60K + FREE SC 40",
    description: "+ Infinity Wheel",
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2015&auto=format&fit=crop",
    endDate: "2025-04-25T23:59:59",
    rating: 9.0,
    disclaimer: "No purchase necessary. Not available in WA, ID, KY, GA, AL, MI, NV, MT, LA, DE. Void where prohibited by law. Must be 21+. Full T&Cs apply."
  }
];

export default sweepstakesData;
