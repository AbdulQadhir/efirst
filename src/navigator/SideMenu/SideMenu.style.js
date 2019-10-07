import {calcHeight, calcWidth} from '../../config';
export default {
  container: {
    paddingTop: calcHeight(5),
    flex: 1,
    backgroundColor: '#f8f9fc',
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
  },
  navItemStyle: {
    padding: calcHeight(2),
  },
  navSectionStyle: {
    backgroundColor: 'lightgrey',
  },
  sectionHeadingStyle: {
    paddingVertical: calcHeight(2),
    paddingHorizontal: calcWidth(5),
  },
  footerContainer: {
    padding: calcHeight(5),
    backgroundColor: 'lightgrey',
  },
};
