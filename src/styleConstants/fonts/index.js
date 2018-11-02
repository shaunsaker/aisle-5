import colors from '../colors';

const fonts = {};

// Font families
fonts.families = {
  title: {
    fontFamily: 'ArchivoBlack-Regular',
  },
  bold: {
    fontFamily: 'Muli-Bold',
  },
  medium: {
    fontFamily: 'Muli-SemiBold',
  },
};

// Font sizes
fonts.sizes = {
  large: 24,
  regular: 17,
  small: 15,
  verySmall: 11,
  icon: 24,
  emoji: 20,
};

// Font types
fonts.types = {
  title: {
    ...fonts.families.title,
    fontSize: fonts.sizes.large,
    color: colors.primaryText,
  },
  heading: {
    ...fonts.families.bold,
    fontSize: fonts.sizes.regular,
    color: colors.primaryText,
  },
  paragraph: {
    ...fonts.families.medium,
    fontSize: fonts.sizes.regular,
    color: colors.primaryText,
  },
  small: {
    ...fonts.families.medium,
    fontSize: fonts.sizes.small,
    color: colors.primaryText,
  },
  extraSmall: {
    ...fonts.families.bold,
    fontSize: fonts.sizes.verySmall,
    color: colors.primaryText,
  },
};

export default fonts;
