import React from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import styles from './styles';
import {GENRE_TYPES} from '../constants/constants';

interface MovieListProps {
  cachedData: string;
  onMoviePressed: (item: MovieItem) => void;
}

export default function MovieList({
  cachedData,
  onMoviePressed,
}: MovieListProps) {
  // Filter movies by genre
  const moviesByGenre: MoviesByGenre[] = Object.values(GENRE_TYPES).map(
    genre => ({
      genre,
      data: JSON.parse(cachedData).filter(
        (movie: MovieItem) => movie.primaryGenreName === genre,
      ),
    }),
  );

  const renderItem = ({item}: {item: MovieItem}) => (
    <TouchableOpacity
      onPress={() => onMoviePressed(item)}
      style={styles.itemContainer}>
      <Image
        resizeMode="cover"
        source={{uri: item.artworkUrl100}}
        style={[styles.image]}
      />
      <Text numberOfLines={1} style={styles.title}>
        {item.trackName}
      </Text>
    </TouchableOpacity>
  );

  const renderGenreList = ({
    item,
  }: {
    item: {genre: string; data: MovieItem[]};
  }) => (
    <View style={styles.genreSection}>
      <Text style={styles.genreTitle}>{item.genre}</Text>
      <FlatList
        horizontal
        data={item.data}
        renderItem={renderItem}
        keyExtractor={movie => movie.trackId.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.genreList}
      />
    </View>
  );
  return (
    <FlatList
      data={moviesByGenre.filter(genre => genre.data.length > 0)}
      renderItem={renderGenreList}
      keyExtractor={item => item.genre}
      contentContainerStyle={styles.list}
    />
  );
}
