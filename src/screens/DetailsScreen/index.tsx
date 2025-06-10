import React, {useRef} from 'react';
import {ScrollView, Text, View} from 'react-native';
import Header from '../../components/Header';
import VideoPlayer, {type VideoPlayerRef} from 'react-native-video-player';
import styles from './styles';
function DetailScreen({
  route: {
    params: {movie},
  },
}: {
  route: {
    params: {movie: MovieItem};
  };
}) {
  const playerRef = useRef<VideoPlayerRef>(null);
  console.log('DetailScreen rendered with movieItem:', movie);
  return (
    <ScrollView>
      <View>
        <Header title={movie?.trackName || ''} canGoBack={true} />

        <VideoPlayer
          ref={playerRef}
          endWithThumbnail
          thumbnail={{
            uri: movie.previewUrl,
          }}
          source={{
            uri: movie.previewUrl,
          }}
          showDuration={true}
          autoplay={true}
        />

        <View style={styles.row}>
          <Text style={styles.detailText}>{movie.trackName}</Text>
          <Text style={styles.subText}>{movie.longDescription}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.detailText}>Genre: {movie.primaryGenreName}</Text>
          <Text style={styles.subText}>
            Release Date: {new Date(movie.releaseDate).toLocaleDateString()}
          </Text>
          <Text style={styles.subText}>Country: {movie.country}</Text>
          <Text style={styles.subText}>
            Price: {movie.trackPrice ? `$${movie.trackPrice}` : 'Free'}
          </Text>
          <Text style={styles.subText}>
            Rating: {movie.contentAdvisoryRating || 'Not Rated'}
          </Text>
          <Text style={styles.subText}>
            Explicit: {movie.trackExplicitness === 'notExplicit' ? 'No' : 'Yes'}
          </Text>
          <Text style={styles.subText}>
            Has iTunes Extras: {movie.hasITunesExtras ? 'Yes' : 'No'}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default DetailScreen;
