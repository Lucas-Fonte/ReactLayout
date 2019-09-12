import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100%;
    padding:0;
    margin-left:200px;
    transition: margin-left 0.5s;
`;

export const Sidebar = styled.div`
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    transition: 0.5s;
    padding-top: 60px;

  a {
    padding: 8px 8px 8px 32px;
    position: relative;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    transition: 0.3s;
  }

  a:hover {
    color: #f1f1f1;
  }

  @media screen and (max-height: 450px) {
    padding-top: 15px;  
    font-size: 18px;
  }

`;

export const ToggleButton = styled.button`
    position: absolute;
    top: 10px;
    right: 20px;
    background: #7159c1;
    border: 0;
    padding: 15px;
    margin-right: 10px;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;
        
`;



export const Header = styled.div`
  background-color: #f1f1f1;
  padding: 30px;
  text-align: center;
  font-size: 35px;


`;

export const Content = styled.div`
    display: -webkit-flex;
    display: flex;

    @media (max-width: 600px) {
        -webkit-flex-direction: column;
        flex-direction: column;
    }

    .column {
        padding: 10px;
        
    }

    .column.middle {
        padding: 30px;
        -webkit-flex: 2;
        -ms-flex: 2;
        flex: 2;
    }
    .column.side {
        background: #aaa;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }



`;

export const Footer = styled.div`
    background-color: #f1f1f1;
    padding: 10px;
    text-align: center;

`;

export const CalendarContainer = styled.div`
    background-color: #f1f1f1;
    padding: 10px;
    text-align: center;

`;
