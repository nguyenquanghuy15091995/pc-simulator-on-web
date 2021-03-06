import React, { PureComponent } from 'react';

import {
  SoftwareContainer,
  SoftwareContent,
  SoftwareContentTop,
  ContentTopLabel,
  ContentTopClose,
  ContentMain,
} from 'components/SoftwareView';

import CloseIcon from 'icons/Close';

import TextEditor from 'softwares/TextEditor';

import {
  SOFTWARE_LIST,
} from './constants';

class Software extends PureComponent {
  render() {
    const { currentSoftwareId, closeCurrentSoftware } = this.props;
    const currentSoftware = SOFTWARE_LIST.ARRAY.find(element => element.id === currentSoftwareId);
    const software = currentSoftware ? currentSoftware : {
      id: 0,
      name: '--Unknown--',
      icon: '',
      softwareJSX: '',
    };
    return (
      <SoftwareContainer>
        <SoftwareContent>
          <SoftwareContentTop>
            <ContentTopLabel>{software.name}</ContentTopLabel>
            <ContentTopClose onClick={closeCurrentSoftware}>
              <CloseIcon color="#FFF" size={14} />
            </ContentTopClose>
          </SoftwareContentTop>
          <ContentMain>
            {SOFTWARE_LIST.TEXT_EDITOR.id === currentSoftwareId ? <TextEditor /> : null}
          </ContentMain>
        </SoftwareContent>
      </SoftwareContainer>
    );
  }
}

export default Software;
