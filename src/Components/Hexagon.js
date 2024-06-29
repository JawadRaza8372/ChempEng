import React from 'react';
import { View, StyleSheet } from 'react-native';

const Hexagon = ({ size = 100, color = '#FF5733' }) => {
  const polygonPoints = [
    size / 2, 0,
    size, size * 0.25,
    size, size * 0.75,
    size / 2, size,
    0, size * 0.75,
    0, size * 0.25,
  ].join(',');

  return (
    <View style={[styles.hexagon, { width: size, height: size * 0.866 }]}>
      <View style={[styles.hexagonInner, { width: size, height: size * 0.866 }]}>
        <View style={[styles.hexagonBeforeAfter, styles.hexagonBefore]} />
        <View style={[styles.hexagonBeforeAfter, styles.hexagonAfter]} />
      </View>
      <View style={[styles.hexagonInner, { width: size, height: size * 0.866, backgroundColor: color }]}>
        <svg height={size} width={size}>
          <polygon points={polygonPoints} fill={color} />
        </svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hexagon: {
    overflow: 'hidden',
    position: 'relative',
  },
  hexagonInner: {
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  hexagonBeforeAfter: {
    content: '',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'inherit',
    borderRadius: 0,
  },
  hexagonBefore: {
    transform: [{ rotate: '60deg' }],
  },
  hexagonAfter: {
    transform: [{ rotate: '-60deg' }],
  },
});

export default Hexagon;
