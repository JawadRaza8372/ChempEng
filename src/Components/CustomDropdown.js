import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {black, tertiary} from '../Utils/Colors/Colors';
import {Medium, SemiBold} from '../Utils/Fonts/FontFamily';
import DownIcon from '../Utils/Images/Icons/DownIcon';

const CustomDropdown = ({
  options,
  selectedOption,
  onSelectOption,
  CustomTitle,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionPress = option => {
    onSelectOption(option);
    setShowOptions(false);
  };

  return (
    <View style={styles.dropdownContainer}>
      <Text style={styles.titleInput}>{CustomTitle}</Text>

      <TouchableOpacity
        onPress={() => setShowOptions(!showOptions)}
        style={styles.selectedOption}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: Medium,
            color: tertiary,
          }}>
          {selectedOption}
        </Text>
        <DownIcon />
      </TouchableOpacity>
      {showOptions && (
        <View style={styles.optionsContainer}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleOptionPress(option)}
              style={styles.option}>
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    position: 'relative',
    paddingHorizontal: 20,
    width: '100%',
  },
  selectedOption: {
    padding: 10,
    borderColor: '#ccc',
    borderRadius: 10,
    borderColor: black,
    marginBottom: 20,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#C4C4C433',
    zIndex:1
  },
  optionsContainer: {
    position: 'absolute',
    top: '100%',
    marginHorizontal: 25,
    left: 0,
    right: 0,
    backgroundColor: '#C4C4C433',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    zIndex: 2,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  titleInput: {
    fontSize: 16,
    fontFamily: SemiBold,
    color: black,
    marginBottom: 4,
  },
});

export default CustomDropdown;
