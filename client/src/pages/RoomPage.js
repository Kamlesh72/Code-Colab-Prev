import CodeEditor from '../components/Room/CodeEditor';
import Whiteboard from '../components/Room/Whiteboard';
import ControlPanel from '../components/Room/ControlPanel';

const RoomPage = () => {
  return (
    <div className="bg-gray-700 h-full flex flex-col max-w-screen">
      <div className="grid grid-cols-2 w-full flex-1 p-3 gap-3">
        <CodeEditor />
        <div className="grid h-full grid-rows-5 gap-3">
          <Whiteboard />
          <ControlPanel />
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
