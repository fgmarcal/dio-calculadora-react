import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #FFFFFF;
    width: 50%;
    border-radius: 100px 100px 100px 100px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #00aaff;
    color: #00aaff;
    border-radius: 100px 100px 0 0;
`

export const ColumnBottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #00aaff;
    color: #00aaff;
    border-radius: 0 0 100px 100px;
`