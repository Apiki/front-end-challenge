import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  padding: 1.6rem;

  &::after {
    content: "";
    width: 100%;
    height: .1rem;
    background-color: ${colors.primary[400]};
  }

  .title {
    color: ${colors.primary[600]};
    font-size: 1.8rem;
    font-weight: 800;
    line-height: 2.4rem;
  }

  .subtitle {
    color: ${colors.primary[600]};
    font-size: 1.4rem;
    font-weight: 400;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .date {
    display: flex;
    gap: .8rem;

    span {
      color: ${colors.primary[500]};
      font-size: 1.2rem;
      .minutes {
        font-weight: 600;
      }
    }
  }

  ${device.tablet} {
    padding: 0;
    .title {
      font-size: 2.8rem;
      line-height: 2.4rem;
    }
    .subtitle {
      font-size: 1.6rem;
      line-height: 2rem;
    }
    .wrapper {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .date span{
      font-size: 1.4rem;
    }
  }

  ${device.laptop} {
    .title {
      font-size: 3.2rem;
      line-height: 3.6rem;
    }
  }

  ${device.laptopL} {
    .title {
      font-size: 2.8rem;
      line-height: 3.2rem;
    }
    .subtitle {
      font-size: 1.8rem;
      line-height: 2.4rem;
    }
    .date span {
      font-size: 1.6rem;
    }
  }
`;