import {
  MultiChatWindow,
  useMultiChatLogic,
  MultiChatSocket,
} from "react-chat-engine-advanced";

const projectId: string = "7c93b175-a0a9-41f6-bc7b-862bab3cadcf";
const username: string = "Bayrem";
const secret: string = "bayrem123";

const EspaceChat = () => {
  const chatProps = useMultiChatLogic(projectId, username, secret);

  return (
    <>
      <div>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: "89vh" }} />
      </div>
    </>
  );
};

export default EspaceChat;
