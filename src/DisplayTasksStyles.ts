import styled from "styled-components";

const Task = styled.div`
  background-color: #eee;
  padding: 1em;
  margin: 1em auto;
  display: flex;
  align-items: center;
  width: 750px;
`;

const TaskInformation = styled.div``;

const Description = styled.div``;

const Started = styled.div``;

const Finished = styled.div``;

const Priority = styled.div``;

const ThumbnailContainer = styled.div``;

const Thumbnail = styled.div``;

// const Id = styled.div`
//   font-size: 0.8em;
//   color: white;
//   background-color: rgba(0, 0, 0, 0.5);
//   padding: 0.5em;
//   margin: 0.5em;
//   display: inline-block;

//   &:first-child {
//     margin-left: 0;
//   }
//   &:last-child {
//     margin-right: 0;
//   }
// `;

const styles = {
    Task,
    TaskInformation,
    Description,
    Started,
    Finished,
    Priority,
    ThumbnailContainer,
    Thumbnail,
    // Id,
};

export default styles;