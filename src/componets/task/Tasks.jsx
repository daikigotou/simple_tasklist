import React from "react";
import Task from "./Task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const Tasks = ({ taskList, setTaskList }) => {
  const reorder = (taskList, startIndex, endIndex) => {
    // タスクを並び変える
    const remove = taskList.splice(startIndex, 1);
    taskList.splice(endIndex, 0, remove[0]);
  };

  const handleDragEnd = (result) => {
    if (result.destination == null) {
      return;
    }
    reorder(taskList, result.source.index, result.destination.index);

    setTaskList(taskList);
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    index={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Tasks;
