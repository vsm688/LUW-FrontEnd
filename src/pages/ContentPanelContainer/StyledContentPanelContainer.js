import styled from "styled-components";


export const StyledContentPanel = styled.div`
    display:flex;
    flex-direction: column ;
    align-items:center ;
    width: 95%;
    height: 100vh;
    border-radius: 20px;
    background-color: #d4f2ff;
    overflow: scroll;
    p{
        color: #707070;
    }
    h1{
        color: #707070;
    }

    #main{
        display:flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        @media screen and (max-width:1000px) {
            flex-direction: column;
            height: auto;
        }

      #contDiv{
          display:flex;
          height:50%;
          margin-left: 50px;
      }
      #contDivChild{
          display:flex;
          flex-direction: column;
      }
      #imgHolder{
          display:flex;
      }

    }
    #makeProjectContent{
         display:flex;
         flex-direction: column;
         align-items: center;
         width: 100%;
         
     
         #InnerTextDiv{
             display:flex;
             flex-direction: column;
             width:100%;
           
             
         }
         #textDiv{
             display: flex;
             flex-direction: column;
             align-items: center;
             margin-bottom: 40px;
           
         }
         .CenterDivText{
             display:flex;
             flex-direction: column;
             width:50%;
                
           
         }
         #ProjectBanner{
             display:flex;
             width: 100%;
             justify-content: space-between;
             align-items: center;
             margin-bottom: 40px;
             .RightButton{
                margin-right: 4%;
                width: 80px;
                height: 80px;
                border-radius: 50%;
                background-color: rgba(255,255,255,.5);
                border: 3px solid white;
                
             }
             .LeftButton{
                margin-left: 4%;
                width: 80px;
                height: 80px;
                border-radius: 50%;
                background-color: rgba(255,255,255,.5);
                border: 3px solid white;
             }
         }
         #BottomText{
             display:flex;
             
             width:100%;
             justify-content: center;
         } 
     }

    #VideoAligner{
        display:flex;
        align-items: flex-start;
     
        height:100%;
        width: 100%;
    }

     #VideoContainer{
             display:flex;
             justify-content: space-between;
             width: 100%;
             height: 50%;
             align-items: center;
          
             
             img{
                 height: 90%;
                 width: 60%;
             }
             .RightButton{
                margin-right: 4%;
                width: 80px;
                height: 80px;
                border-radius: 50%;
                background-color: rgba(255,255,255,.5);
                border: 3px solid white;
                
             }
             .LeftButton{
                margin-left: 4%;
                width: 80px;
                height: 80px;
                border-radius: 50%;
                background-color: rgba(255,255,255,.5);
                border: 3px solid white;
             }
         }
    @media screen and (max-width:1000px) {
            flex-direction: column;
        }



    

`