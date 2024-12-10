import { useEffect, useState } from "react";
import { StyledButton } from "./StyledButton";

export const DeadlineButton = ({ closingDate }) => {
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const targetDate = new Date(closingDate);
    const now = new Date();
    if (now > targetDate) {
      setIsPast(true);
    }
  }, [closingDate]);
  return (
    <>
      {isPast && (
        <StyledButton
          size={"xxs"}
          label={"마감"}
          variant={"orange"}
          cusor={"default"}
        />
      )}
    </>
  );
};
