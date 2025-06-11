interface MovieItem {
  wrapperType: string;
  kind: string;
  collectionId?: number;
  artistId?: number;
  trackId: number;
  artistName: string;
  collectionName?: string;
  trackName: string;
  artistViewUrl?: string;
  collectionCensoredName?: string;
  collectionArtistName?: string;
  trackCensoredName: string;
  collectionArtistId?: number;
  collectionArtistViewUrl?: string;
  collectionViewUrl?: string;
  trackViewUrl: string;
  previewUrl?: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice?: number;
  trackPrice?: number;
  trackRentalPrice?: number;
  collectionHdPrice?: number;
  trackHdPrice?: number;
  trackHdRentalPrice?: number;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness: string;
  discCount?: number;
  discNumber?: number;
  trackCount?: number;
  trackNumber?: number;
  trackTimeMillis?: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  contentAdvisoryRating?: string;
  shortDescription?: string;
  longDescription?: string;
  hasITunesExtras?: boolean;
  isStreamable?: boolean;
}

interface MovieData {
  resultCount: number;
  results: MovieItem[];
}

interface MoviesByGenre {
  genre: string;
  data: MovieItem[];
}
