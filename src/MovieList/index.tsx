import React from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import styles from './styles';

interface MovieListProps {
  cachedData: string;
  onMoviePressed: (item: MovieItem) => void;
}

export default function MovieList({
  cachedData,
  onMoviePressed,
}: MovieListProps) {
  const {width, height} = useWindowDimensions();

  // Determine if landscape based on updated dimensions
  const landscape = width > height;

  // Calculate image size based on orientation
  const imageWidth = landscape ? width / 4 : width / 3.6;
  const imageHeight = landscape ? height / 4 : height / 5;

  const renderItem = ({item}: {item: MovieItem}) => (
    <TouchableOpacity
      onPress={() => onMoviePressed(item)}
      style={styles.itemContainer}>
      <Image
        resizeMode="cover"
        source={{uri: item.artworkUrl100}}
        style={[styles.image, {width: imageWidth, height: imageHeight}]}
      />
      <Text numberOfLines={1} style={styles.title}>
        {item.trackName}
      </Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={cachedData ? JSON.parse(cachedData) : []}
      renderItem={renderItem}
      keyExtractor={item => item?.trackId.toString()}
      contentContainerStyle={styles.list}
      numColumns={3} // Dynamically adjust columns
    />
  );
}
