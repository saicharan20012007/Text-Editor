import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const EditorCard = styled.div`
  background-color: #1b1c22;
  height: 80vh;
  width: 90vw;
  display: flex;
`

export const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Title = styled.h1`
  font-family: Roboto;
  color: #f8fafc;
`

export const Image = styled.img`
  height: 400px;
`
export const EditorContainer = styled.div`
  background-color: #25262c;
  border-style: solid;
  border-color: #334155;
  height: 500px;
  align-self: center;
  justify-content: center;
  width: 85%;
  margin: 30px;
  border-width: 1px;
  border-radius: 10px;
`
export const NavContainer = styled.ul`
  height: 50px;
  border-style: solid;
  background-color: transparent;
  border-color: #334155;
  border-width: 1px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  margin: 0px;
`
export const Li = styled.li`
  list-style-type: none;
`

export const NavButton1 = styled.button`
  height: 30px;
  background-color: transparent;
  border: none;
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
  cursor: pointer;
`
export const NavButton2 = styled.button`
  height: 30px;
  background-color: transparent;
  border: none;
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
  cursor: pointer;
`
export const NavButton3 = styled.button`
  height: 30px;
  background-color: transparent;
  border: none;
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
  cursor: pointer;
`
export const TextArea = styled.textarea`
  min-height: 400px;
  margin: 15px;

  min-width: 800px;
  color: #f1f5f9;
  background-color: transparent;
  border-style: none;
  outline: none;
  font-family: Roboto;
  font-weight: ${props => (props.isBoldActive ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalicActive ? 'italic' : 'normal')};
  text-decoration: ${props =>
    props.isUnderlineActive ? 'underline' : 'normal'};
`
