import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const Buttons = styled.div`
  margin-bottom: 4rem;
  padding: 1.6rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  
  .button {
    flex:1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    text-decoration: none;

    .wrapper {
      display: flex;
      align-items: center;
      gap: .2rem;
      
      span {
        color: ${colors.secondary[100]};
        font-size: 1.4rem;
        ${device.laptop} {
          font-size: 1.6rem;
        }
      }
      .icon {
        color: ${colors.secondary[100]};
        font-size: 1.8rem;
      }
    }

    .title {
      color: ${colors.primary[400]};
      font-size: 1rem;
    }

    &:hover {
      .title {
        color: ${colors.primary[500]};
      }
      span, .icon {
        color: ${colors.secondary[200]};
      }
    }
  }

  .button.right {
    align-items: flex-start;
    .wrapper {
      flex-direction: column;
    }
  }

  .button.left {
    align-items: flex-end;
    .wrapper {
      flex-direction: column-reverse;
    }
    .title {
      text-align: right;
    }
  }

  ${device.tablet} {
    .button.right .wrapper,
    .button.left .wrapper {
      flex-direction: row;
      gap: 1rem;
    }

    .button.right .title,
    .button.left .title {
      font-size: 1.2rem;
    }
  }

  ${device.laptop} {
    .button.right .title,
    .button.left .title {
      font-size: 1.4rem;
    }
  }
`;