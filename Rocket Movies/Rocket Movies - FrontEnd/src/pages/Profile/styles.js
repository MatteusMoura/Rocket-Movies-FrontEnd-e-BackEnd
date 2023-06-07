import styled from "styled-components"

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 124px;
        background: ${({ theme }) => theme.COLORS.BACKGROUND_WINE};

        display: flex;
        align-items: center;

        padding: 0 124px;

        a {
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.PINK};
            
            svg {
                margin-top: 2px;
                font-size: 18px;
            }
        }

        button {
            display: flex;
            gap: 2px;
            font-size: 15px;
            background: none;
            border: none;
            color: ${({ theme }) => theme.COLORS.PINK}
        }
    }
`
export const Form = styled.form`
    max-width: 340px;
    margin: 30px auto 0;

    > div:nth-child(4){
        margin-top: 14px;
    }

`
export const Avatar = styled.div`
    position: relative;
    margin: -124px auto 32px;
    width: 186px;
    height: 186px;

    > img {
      width: 176px;
      height: 176px;
      border-radius: 50%;
    }

    > label {
        width: 48px;
        height: 48px;

        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 10px;
        right: 10px;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;
            color: ${({ theme }) => theme.COLORS.BLACK};
        }
    }
`