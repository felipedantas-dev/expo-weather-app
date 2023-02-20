import styled from 'styled-components/native';

export const Content = styled.View`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color: #327d96;
    padding: 10px 15px;
`;

export const City = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid #ffffff;
  border-radius: 50px;

  padding: 5px 20px 2px 20px;
  width: auto;

  margin-right: -20px;
`;

export const Name = styled.Text`
  color: #fff;
  font-size: 12px;
  font-family: Inter_600SemiBold;
`;

export const Btn = styled.TouchableOpacity`
    padding: 5px;
`;