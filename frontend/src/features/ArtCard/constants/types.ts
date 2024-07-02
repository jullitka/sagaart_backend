interface ArtCardProps {
  id: number;
  title: string;
  imageUrl: string;
  artist: string;
  original: number;
  print: number;
  isInFavorites: boolean;
  handleRemoveFromArray: ({ removedArtId }: { removedArtId: number }) => void;
  handleAddToArray?: ({ artId }: { artId: number }) => void;
}

export type { ArtCardProps };
