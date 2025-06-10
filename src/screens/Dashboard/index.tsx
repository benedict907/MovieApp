import React, {useEffect} from 'react';
import {ActivityIndicator, Dimensions, View} from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import {useAuth} from '../../storage/AuthContext';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import MovieList from '../../MovieList';

type RootStackParamList = {
  DetailsScreen: {movie: MovieItem};
};

const Dashboard = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {isLoading, setLoading, cachedData, insertCachedData} = useAuth();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://itunes.apple.com/search?term=movie&media=movie',
        );
        const result = await response.json();
        // Assuming you want to update the data variable with the fetched results

        if (result.results && Array.isArray(result.results)) {
          insertCachedData(JSON.stringify(result.results));
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const onMoviePressed = (item: MovieItem) => {
    navigation.navigate('DetailsScreen', {
      movie: item,
    });
  };

  return isLoading ? (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  ) : (
    <View style={styles.container}>
      <Header title="Dashboard" />
      <View style={styles.content}>
        <MovieList
          cachedData={cachedData || ''}
          onMoviePressed={onMoviePressed}
        />
      </View>
    </View>
  );
};

export default Dashboard;
