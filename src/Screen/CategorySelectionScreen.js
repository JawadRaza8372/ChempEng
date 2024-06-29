import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {primary, white, black, backgroundColor} from '../Utils/Colors/Colors';
import {Bold, Medium} from '../Utils/Fonts/FontFamily';
import Ionicons from 'react-native-vector-icons/Ionicons';

const categories = ['Preposition', 'Vowels', 'Vocabulary'];

const CategorySelectionScreen = ({navigation}) => {
  const handleCategoryPress = category => {
    navigation.navigate('SelfAssessmentScreen', {category});
  };

  return (
    <ImageBackground
      source={require('../Utils/Images/Images/1.jpg')}
      style={styles.container}>
      <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 20,
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backIcon}>
            <Ionicons name="arrow-back" size={24} color={white} />
          </TouchableOpacity>
          <Text style={styles.title}>Select a Category</Text>
          <View></View>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {categories.map(category => (
            <TouchableOpacity
              key={category}
              style={styles.categoryButton}
              onPress={() => handleCategoryPress(category)}>
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary,
  },
  title: {
    fontSize: 24,
    fontFamily: Bold,
    color: white,
  },
  categoryButton: {
    backgroundColor: backgroundColor,
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 18,
    fontFamily: Medium,
    color: white,
  },
});

export default CategorySelectionScreen;
