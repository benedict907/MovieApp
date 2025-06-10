import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
export const scaleFontSize = (size: number) => (width / 375) * size;
