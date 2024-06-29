import React, { useRef, useState } from 'react';
import { StyleSheet, View, StatusBar, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import OnboardingCard from '../Components/OnBoardingCard';
import { useNavigation } from '@react-navigation/native';
import OnBoardingIcon from '../Utils/Images/Icons/OnboardingIcon';
import { grey, light_grey, primary } from '../Utils/Colors/Colors';


const OnBoardingScreen = () => {
  const navigation = useNavigation();
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const width = Dimensions.get('screen').width;

  const data = [
    {
      image:require('../Utils/Images/Images/1.jpg'),

      title: 'Self Assessment',
      description: 'Lorem ipsum dolor sit amet consectetur. Ut cras pellentesque diam mauris laoreet donec a eget aliquam.',
    },
    {
      image:require('../Utils/Images/Images/3.jpg'),

      title: 'Cometation',
      description: 'Lorem ipsum dolor sit amet consectetur. Ut cras pellentesque diam mauris laoreet donec a eget aliquam.',
    },
    {
      image:require('../Utils/Images/Images/2.jpg'),

      title: 'Scrabble',
      description: 'Lorem ipsum dolor sit amet consectetur. Ut cras pellentesque diam mauris laoreet donec a eget aliquam.',
    },
    
  ];

  const renderItem = ({ item, index }) => (
    <OnboardingCard
    image={item.image}
      Icon={item.icon}
      CardTitle={item.title}
      Description={item.description}
      SkipPress={()=>{
        navigation.replace('LoginScreen');

      }}
      onPress={() => {
        if (index === data.length - 1) {
          navigation.replace('LoginScreen');
        } else {
          carouselRef.current.snapToNext();
        }
      }}
    />
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent />
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        loop={false}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeIndex}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.activeDot}
        inactiveDotStyle={styles.inactiveDot}
        inactiveDotOpacity={0.7}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 70,
  },
  activeDot: {
    width: 15,
    height: 15,
    borderRadius: 20,
    backgroundColor: primary,
  },
  inactiveDot: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: grey,
  },
});

export default OnBoardingScreen;
