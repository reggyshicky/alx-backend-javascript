import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const instance = new ClassRoom(19);
  const instance1 = new ClassRoom(20);
  const instance2 = new ClassRoom(24);

  return [
    `ClassRoom { _maxStudentsSize: ${instance._maxStudentsSize}}`,
    `ClassRoom { _maxStudentsSize: ${instance1._maxStudentsSize}}`,
    `ClassRoom { _maxStudentsSize: ${instance2._maxStudentsSize}}`,
  ];
}
