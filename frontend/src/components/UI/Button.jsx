import styled from 'styled-components';

export const Button = styled.button`
    background-color: #3e8ed0;
    border-width: 1px;
    border-color: #3db5eb;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    justify-content: center;
    line-height: 1;
    margin-bottom: 0.5rem;
    padding: 8px 16px;
    text-align: center;
    transition: all 0.3s ease;
    white-space: nowrap;

    &:hover,
    &:focus {
        background-color: #3db5eb;
        border-color: #3db5eb;
        outline: none;
    }
`;
