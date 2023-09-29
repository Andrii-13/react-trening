import {Container} from './User.styled.js' 


export const UserInfo =({isOnline})=>{
    return <Container isHide={isOnline}><h2>UserInfo</h2>Lorem ipsum dolor sit amet.</Container>
}

