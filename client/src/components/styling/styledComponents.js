import styled from "styled-components";

export const StyledLogin = styled.div`
height : 100vh;
width : 100%;
background-color : whitesmoke;
#links {
    position : fixed;
    background-color : royalblue;
    top : 0;
    display : flex;
    justify-content : space-around;
    border-bottom : 2px solid lightgray;
    width : 100%;
    height : 5rem;
    align-items : center;
    a {
        display : flex;
        align-items : center;
        text-decoration : none;
        transition : .01s;
        color : black;
        &:hover {
            transform : scale(1.05);
            color : white;
            transition : .01s;
        }
    }
}
#routes {
    padding-top : 5rem;
    display : flex;
    height : 100vh;
    justify-content : center;
    align-items : center; 
}
`

export const StyledForm = styled.div`
    box-shadow : 0 0 2em lightgrey;
    border-radius : 10px;
    height : 30rem;
    width : 20rem;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    background-color : royalblue;
    #loginHead {
        width : 100%;
        display : flex;
        padding-left : 2rem;
        padding-bottom  : 1rem;
        color : white;
        align-items : center;
    }
    #contents {
        background-color : white;
        display : flex;
        flex-direction : column;
        padding : 1rem;
        width : 100%;
        input {
            margin-top : 1rem;
            border-radius : 10px;
            border : none;
            outline : 1px solid rgb(220, 241, 248);
            padding-left : 1rem;
            height : 2.3rem;
            width : 15rem;
        }
        input[type=text], input[type=password] {
            &:hover {
                outline-offset : 4px;
                outline-color : rgb(220, 241, 248);
                box-shadow : 0 0 1em lightblue;
                transition : .2s ease-in-out; 
            }
        }
        input[type=submit] {
            background-color : royalblue;
            color : white;
            outline : 2px solid royalblue;
            outline-offset : -2px;
            margin-bottom : 1rem;
            &:hover {
                outline-offset : 4px;
                outline-color : rgb(220, 241, 248);
                box-shadow : 0 0 1em lightblue;
                transition : .2s ease-in-out; 
            }
            &:active {
                outline-color : royalblue;
                outline-offset : 7px;
            }
        }
    }
    .container {
        position : relative;
        display : inline-block;
        width : 100%;
        .lock {
            position : absolute;
            top : 1.4rem;
            right : 3rem;
        }
    }
`