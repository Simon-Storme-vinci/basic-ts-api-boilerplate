interface Film {
  id: number;
  title: string;
  director: string;
  duration: number;
  budget?: number;
  description?: URL;
  imageUrl?: URL;
}

export type { Film };
