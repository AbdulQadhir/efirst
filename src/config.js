import {Dimensions, PixelRatio} from 'react-native';
export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
export const calcHeight = x =>
  PixelRatio.roundToNearestPixel((deviceHeight * x) / 100);
export const calcWidth = x =>
  PixelRatio.roundToNearestPixel((deviceWidth * x) / 100);

// ["CustomerName","Anees"],
// ["Email","thanikalanees@yahoo.com"],
// ["PersonalPhone","+919686957085"],
// ["OfficePhone","09686957085"],
// ["SelectedCountryId",103],
// ["SelectedCertificateType",6],
// ["Files[]",{"uri":"file:///Users/ubaidchalil/Library/Developer/CoreSimulator/Devices/47A0815E-E323-48C7-9369-77A07DD10A91/data/Containers/Data/Application/A74A2666-15C0-480E-B11C-0AC81C78D2E6/tmp/2F48F154-32BC-4088-8E01-3B35DCDDE55C.jpg","type":"image/jpeg","name":"2F48F154-32BC-4088-8E01-3B35DCDDE55C.jpg"}],
// ["Rate",605],
// ["ServiceName","ATTESTATION SERVICE"],
// ["PickUpandDropOption","Through Courier"],
// ["DocumentCount",1],
// ["AddressLine1","Electronic city"],
// ["POBox",""],
// ["Country","United Arab Emirates"],
// ["StreetAddress","Vengara"],
// ["City","Chaliil"],
// ["State","Ras Al Khaima"],
// ["Address","Electronic city,Vengara Chaliil, Ras Al Khaima United Arab Emirates - "]
