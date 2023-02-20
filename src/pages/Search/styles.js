import styled from 'styled-components/native';

export const Content = styled.View`
    flex: 1;
    background-color: #1E1E2C;
    display: flex;
    flex-direction: column;
`;

export const Btn = styled.TouchableOpacity`
    margin-bottom: 20px;
    padding: 5px;
`;

export const List = styled.View`
    display: flex;
    flex-direction: column;
    padding: 15px 20px;
`;

export const Item = styled.TouchableOpacity`
    padding: 20px;
    text-align: left;
    background-color: #327d9620;
    margin-top: 15px;
    border-radius: 20px;
    border-bottom-width: 2;
    borderColor: #327d9640;
    borderStyle: solid;
`;

export const ItemText = styled.Text`
    font-size: 14px;
    color: #ffffff;
    font-family: Inter_300Light;
    width: auto;
`;