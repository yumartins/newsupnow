import styled from 'styled-components';

const appearances = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
};

const aligns = {
  left: 'left',
  center: 'center',
  right: 'right',
};

const Title = styled.Text`
  text-align: left;
  font-family: 'SegoeUI-Bold';

  ${(props) => props.type === appearances.primary && `
    color: #000;
  `}
`;

export default Title;
