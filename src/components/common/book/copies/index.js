import React from "react";
import styled from "styled-components";
import { qbGreen, qbRed } from "../../../../styles/colors";

//Style for copies
const Copies = styled.p`
  color: ${(props) => (props.isAvailable ? qbGreen : qbRed)};
`;

const BookCopies = ({ no_of_copies, featured }) => {
  let message;

  // Check if the number of available copies is more than 0
  const isAvailable = no_of_copies > 0;

  //If there are available copies
  if (isAvailable) {
    // Format the message based on if it's featured
    message = featured ? "Available" : no_of_copies + " Copies Available";
  } else {
    // Message is "Out of stock" if there are no copies available
    message = "Out of stock";
  }
  return <Copies isAvailable={isAvailable}>{message}</Copies>;
};

export default BookCopies;
