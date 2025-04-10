
export interface Sweepstake {
  id: number;
  title: string;
  description: string;
  image: string;
  endDate: string;
}

const sweepstakesData: Sweepstake[] = [
  {
    id: 1,
    title: "Win an iPhone 15 Pro!",
    description: "Enter by completing a quick survey. Limited time offer!",
    image: "https://images.unsplash.com/photo-1695630621669-f0ce94779457?q=80&w=1974&auto=format&fit=crop",
    endDate: "2025-04-30T23:59:59"
  },
  {
    id: 2,
    title: "$10,000 Cash Giveaway",
    description: "One lucky winner will receive $10,000 in cash. No purchase necessary.",
    image: "https://images.unsplash.com/photo-1584052189791-2b028d70f4d6?q=80&w=1974&auto=format&fit=crop",
    endDate: "2025-05-15T23:59:59"
  },
  {
    id: 3,
    title: "Dream Vacation Sweepstakes",
    description: "Win a 7-day vacation for two to the destination of your choice!",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop",
    endDate: "2025-06-01T23:59:59"
  },
  {
    id: 4,
    title: "MacBook Pro Giveaway",
    description: "The latest MacBook Pro with M3 chip could be yours! Enter now.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2026&auto=format&fit=crop",
    endDate: "2025-05-20T23:59:59"
  },
  {
    id: 5,
    title: "$500 Amazon Gift Card",
    description: "Shop for anything you want with this $500 Amazon gift card!",
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2015&auto=format&fit=crop",
    endDate: "2025-04-25T23:59:59"
  },
  {
    id: 6,
    title: "Gaming PC Bundle",
    description: "Win a high-end gaming PC with accessories worth over $3,000!",
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=2071&auto=format&fit=crop",
    endDate: "2025-06-10T23:59:59"
  },
];

export default sweepstakesData;
