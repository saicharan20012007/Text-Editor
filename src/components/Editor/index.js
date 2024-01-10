import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  EditorCard,
  LeftContainer,
  Li,
  Title,
  Image,
  EditorContainer,
  NavContainer,
  NavButton1,
  NavButton2,
  NavButton3,
  TextArea,
} from './styledcomponents'

class Editor extends Component {
  state = {isBoldActive: false, isItalicActive: false, isUnderlineActive: false}

  activeBold = () => {
    this.setState(prevState => ({
      isBoldActive: !prevState.isBoldActive,
    }))
  }

  activeItalic = () => {
    this.setState(prevState => ({
      isItalicActive: !prevState.isItalicActive,
    }))
  }

  activeUnderline = () => {
    this.setState(prevState => ({
      isUnderlineActive: !prevState.isUnderlineActive,
    }))
  }

  render() {
    const {isBoldActive, isItalicActive, isUnderlineActive} = this.state
    return (
      <MainContainer>
        <EditorCard>
          <LeftContainer>
            <Title>Text Editor</Title>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </LeftContainer>
          <EditorContainer>
            <NavContainer>
              <Li>
                <NavButton1
                  onClick={this.activeBold}
                  isActive={isBoldActive}
                  data-testid="bold"
                >
                  <VscBold size={25} />
                </NavButton1>
              </Li>
              <Li>
                <NavButton2
                  onClick={this.activeItalic}
                  isActive={isItalicActive}
                  data-testid="italic"
                >
                  <GoItalic size={25} />
                </NavButton2>
              </Li>
              <Li>
                <NavButton3
                  onClick={this.activeUnderline}
                  isActive={isUnderlineActive}
                  data-testid="underline"
                >
                  <AiOutlineUnderline size={25} />
                </NavButton3>
              </Li>
            </NavContainer>
            <TextArea
              isBoldActive={isBoldActive}
              isItalicActive={isItalicActive}
              isUnderlineActive={isUnderlineActive}
            />
          </EditorContainer>
        </EditorCard>
      </MainContainer>
    )
  }
}

export default Editor
