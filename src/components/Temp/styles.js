import styled from 'styled-components/native';

export const Card = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    flex-direction: row;
    margin-top: -10px;
`;

export const Body = styled.View`
    padding-bottom: 30px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 90px;
  font-family: Inter_700Bold;
  padding-left: 5px;
`;

export const Metric = styled.Text`
    color: #fff;
    font-size: 12px;
    font-family: Inter_600SemiBold;
    height: 50px;
    padding-left: 0px;
`;

export const City = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: Inter_600SemiBold;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid #ffffff;
  border-radius: 50px;

  padding: 5px 15px;
  width: auto;

  column-gap: 10px;

  margin: auto;
`;

export const WeatherImg = styled.View`
  background-image: url(${props => props.url});
  background-size: contain;
  height: 100px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Description = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: Inter_400Regular;
  text-transform: capitalize;

  margin: auto;
`;

export const DateText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: Inter_600SemiBold;
  margin: auto;
  padding: 5px;
`;

export const HourText = styled.Text`
  color: #ffffff98;
  font-size: 16px;
  font-family: Inter_600SemiBold;
  margin: auto;
`;

export const Min = styled.Text`
  font-size: 10px;
  color: #ffffff80;
  font-family: Inter_300Light;
  margin-left: 2px;
`;

export const CurrentInfos = styled.View`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
`;

export const BoxInfos = styled.View`
  padding: 5px 15px;
  background-color: #ffffff10;
  border-radius: 15px;
  margin: 3px;
  width: 31%;
  min-height: 110px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const BoxTitle = styled.Text`
  color:  #ffffff90;
  font-size: 14px;
  font-family: Inter_600SemiBold;
`;

export const BoxText = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-family: Inter_600SemiBold;
`;

export const BoxContent = styled.View`
  padding: 5px;
`;