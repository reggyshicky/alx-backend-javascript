import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const instance = new ClassRoom();
  const instance1 = new ClassRoom();
  const instance2 = new ClassRoom();
  instance._maxStudentsSize = 19;
  instance1._maxStudentsSize = 20;
  instance2._maxStudentsSize = 34;

  return [
    `ClassRoom { _maxStudentsSize: ${instance._maxStudentsSize}}``ClassRoom { _maxStudentsSize: ${instance1._maxStudentsSize}}``ClassRoom { _maxStudentsSize: ${instance2._maxStudentsSize}}`,
  ];
}
