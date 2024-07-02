interface ArtProps {
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
  about_author: string;
  author_photo: string;
  author_user_id: number;
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

export type { ArtProps, ArtInFavorites };
