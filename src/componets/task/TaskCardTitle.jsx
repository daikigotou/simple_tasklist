import React, { useState } from "react";
import Datetime from "react-datetime";

const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("Today");

  const handleClick = () => {
    setIsClick(true);
  };

  const hadleChange = (e) => {
    setInputCardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  };

  const handleBlur = () => {
    setIsClick(false);
  };

  const weekendsInvalidDate = (current) => {
    return current.day() !== 0 && current.day() !== 6;
  };

  return (
    <div onClick={handleClick} className="taskCardTitleInputArea">
      <Datetime
        initialValue={new Date()}
        dateFormat={"YYYY年MM月DD日"}
        timeFormat={false}
        isValidDate={weekendsInvalidDate}
      />
    </div>
  );
};

export default TaskCardTitle;

// {isClick ? (
//   <form onSubmit={handleSubmit}>
//     <input
//       className="taskCardTitleInput"
//       autoFocus
//       type="text"
//       onChange={hadleChange}
//       onBlur={handleBlur}
//       value={inputCardTitle}
//       maxLength={10}
//     />
//   </form>
// ) : (
//   <h3>{inputCardTitle}</h3>
// )}
