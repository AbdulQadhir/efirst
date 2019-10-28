import React, {Component} from 'react';
import {View, Dimensions, FlatList} from 'react-native';

import {SRDocumentItem} from '../../../pages/uicomponents/components';
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

import {calcHeight, calcWidth} from '../../../config';
import {connect} from 'react-redux';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';

import RNFetchBlob from 'rn-fetch-blob';
import Loader from '../../../styled/loader';
const getLocalPath = fileName => {
  // feel free to change main path according to your requirements
  return `${RNFS.DocumentDirectoryPath}/${fileName}`;
};

class Documents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  viewFile = () => {
    const url =
      'https://www.adobe.com/content/dam/Adobe/en/devnet/pdf/pdfs/PDF32000_2008.pdf';
    const localFile = getLocalPath(url);

    const options = {
      fromUrl: url,
      toFile: localFile,
    };
    RNFS.downloadFile(options)
      .promise.then(() => FileViewer.open(localFile))
      .then(() => {
        // success
      })
      .catch(error => {
        // error
      });
  };
  downloadFile(docId) {
    this.setState({loading: true});

    const {UserId} = this.props.profile.data.userdetail;
    const token = this.props.token.token;
    RNFetchBlob.fetch(
      'POST',
      `https://api.efirst.ae/ServiceRequest/GetSRDocument?userid=${UserId}&id=${docId}`,
      {
        Authorization: `Bearer ${token}`,
        // more headers  ..
      },
    )
      // when response status code is 200
      .then(res => {
        // the conversion is done in native code
        const data = res.base64();

        // const localFile = getLocalPath(url);
        const info = res.info();
        const fileName = this.getFileName(info.headers['Content-Disposition']);
        const path = getLocalPath(fileName);
        RNFS.writeFile(path, data, 'base64')
          .then(() => {
            this.setState({loading: false});
            setTimeout(() => {
              try {
                FileViewer.open(path, {showOpenWithDialog: true})
                  .then(() => {
                    this.setState({loading: false});
                  })
                  .catch(error => {
                    this.setState({loading: false});
                  });
              } catch (error) {}
            }, 50);

            this.setState({loading: false});
          })
          .catch(error => {
            this.setState({loading: false});
          });
      })
      // Status code is not 200
      .catch((errorMessage, statusCode) => {
        this.setState({loading: false});
      });
  }
  getFileName(disposition) {
    var filename = '';
    if (disposition && disposition.indexOf('attachment') !== -1) {
      var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
      var matches = filenameRegex.exec(disposition);
      if (matches != null && matches[1]) {
        filename = matches[1].replace(/['"]/g, '');
        return filename;
      }
    }
    return filename;
  }

  render() {
    const {documents} = this.props;
    return (
      <View style={styles.body}>
        <Loader loading={this.state.loading} />
        <FlatList
          data={documents}
          extraData={documents}
          numColumns={2}
          renderItem={({item, index}) => (
            <SRDocumentItem
              onPress={() => this.downloadFile(item.SRDocID)}
              name={
                item.FileName.length > 12
                  ? item.FileName.substr(0, 12) + '...'
                  : item.FileName
              }
            />
          )}
        />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  body: {
    flex: 1,
    padding: calcHeight(1),
    alignItems: 'center',
  },
});

const mapStateToProps = ({servicerequest: {documents}, profile, token}) => ({
  documents,
  profile,
  token,
});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Documents);
