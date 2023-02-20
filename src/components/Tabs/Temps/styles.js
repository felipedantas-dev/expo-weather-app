import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 20px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TabsContainer = styled.ScrollView.attrs({
    horizontal: true,
        contentContainerStyle: {
        },
    showsHorizontalScrollIndicator: false,
    automaticallyAdjustContentInsets: false
})``;

export const TabItem = styled.View`
    width: 75px;
    padding: 10px;

    background: #ffffff08;
    border-radius: 20px;
    margin: 5px;
`;

export const DateText = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const DayText = styled.Text`
    font-size: 12px;
    color: #ffffff;
    font-family: Inter_300Light;
`;

export const HourText = styled.Text`
    font-size: 10px;
    color: #ffffff80;
    font-family: Inter_300Light;
    margin-left: 3px;
`;

export const Temp = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const Max = styled.Text`
    font-size: 10px;
    color: #ffffff;
    font-family: Inter_300Light;
`;

export const Min = styled.Text`
    font-size: 10px;
    color: #ffffff80;
    font-family: Inter_300Light;
    margin-left: 2px;
`;

export const Weather = styled.View`
  background-image: url(${props => props.url});
  background-size: contain;
  height: 50px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
`;