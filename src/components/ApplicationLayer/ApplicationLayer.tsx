import { Header, User } from "../Header/Header"
import userIcon from '../../assets/user.svg'
import banana from '../../assets/banana.png'
import styled from 'styled-components'
import { Tile } from "../Tile/Tile"

const user:User ={name:"Ana", avatar:userIcon
    
}
export const ApplicationLayer= ()=>{
return(
<ApplicationDiv className="landing-page">
    <Header logo={banana} isSearch={true} user={user} title={"Banana Components"}/>
    <PageDiv className="page-container">
    {/* Left section */}
        <LeftDiv className="column-left">
         <Tile style={{width:"30rem"}} title="Placeholder" onClick={()=>{} }/>
        </LeftDiv>

         {/* Right section */}
        <RightDiv className="column-right">
          <Tile style={{width:"30rem"}} title="Placeholder" onClick={()=>{} }/>
        </RightDiv>
        </PageDiv>
</ApplicationDiv>
)
}

const ApplicationDiv = styled.div`
  background-color: var(--color-background);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100vw;
  height:100vw;
  align-items:center;
`;

const PageDiv = styled.div`
 max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    @media (max-width: 640px) {
        flex-wrap: wrap;
    }
}
`;

const LeftDiv = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-md);
    padding: 1rem;

     @media (max-width: 640px) {
        order: 3;
        width: 100%;
        max-width: none;
        margin-top: 1rem;
    }
`;

const RightDiv = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-md);
    padding: 1rem;
`;