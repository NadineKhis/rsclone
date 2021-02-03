import styled from 'styled-components/macro';

const Title = styled.p`
  font-size: 24px;
  color: #e5e5e5;
  font-weight: bold;
  margin-left: 56px;
  margin-right: 56px;
  margin-top: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  height: 360px;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: black;
  margin-top: 10px;
  margin-bottom: 10px;
  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;
 
  }
`;

export const FeatureTitle = styled.p`
  font-size: 24px;
  color: #e5e5e5;
  font-weight: bold;
  margin-left: 0;
  margin-right: 56px;
  margin-top: 0;
`;

export const FeatureText = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  font-size: 18px;
  color: white;
  font-weight: ${({ fontWeight }) => (fontWeight === 'bold' ? 'bold' : 'normal')};
  margin: 0;
  overflow: hidden;
  height: 145px;
  text-overflow: ellipsis;
  //white-space: nowrap;
  @media (max-width: 600px) {
    line-height: 22px;
  }
`;

export const FeatureClose = styled.button`
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  font-size: 20px;
  text-shadow: 0 0 6px rgba(255,255,255,0.7);
`;

export const Content = styled.div`
  margin: 56px;
  max-width: 500px;
  line-height: normal;
  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};
  > ${Container}:first-of-type {
    @media (min-width: 1100px) {
      margin-top: -100px;
    }
  }
`;

export const Maturity = styled.div`
  background-color: ${({ rating }) => (rating >= 15 ? '#f44336' : '#2f9600')};
  border-radius: 15px;
  width: 28px;
  line-height: 28px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  font-size: 12px;
`;

export const AddToList = styled.div`
  margin-left: 14px;
  cursor: pointer;
  background: gray;
  border-radius: 11px;
  padding: 19px 34px;
  color: #ffffff;
  display: inline-block;
  font: normal bold 20px/1 "Open Sans", sans-serif;
  text-align: center;
  margin-right: 15px;
  margin-top: 15px;

  &:hover {
    background: #5c5c5c;
  }
`;

export const PlayButton = styled.div`
  background: #ff0000;
  border-radius: 11px;
  padding: 19px 54px;
  color: #ffffff;
  display: inline-block;
  font: normal bold 20px/1 "Open Sans", sans-serif;
  text-align: center;
  margin-right: 15px;
  margin-top: 15px;
  cursor: pointer;
  &:hover {
    background: #c50000;
  }
`;

export const BeforeDescription = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
`

