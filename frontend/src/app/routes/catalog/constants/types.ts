interface Art {
  artist: string;
  author_signature: string;
  brushstrokes_material: string;
  decoration: string;
  description: string;
  imageUrl: string;
  orientation: string;
  series: string;
  size: string;
  style: string;
  title: string;
  year: string;
  id: number;
  isInFavorites: boolean;
}

interface ArtInFavorites {
  art_name: string;
  art_photo: string;
  artist_name: string;
  artwork: number;
  original_price: number;
  poster_price: number;
}

export type { Art, ArtInFavorites };
