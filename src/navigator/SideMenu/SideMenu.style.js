import {calcHeight, calcWidth} from '../../config';
export default {
  container: {
    paddingTop: calcHeight(5),
    flex: 1,
    backgroundColor: '#f8f9fc',
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
