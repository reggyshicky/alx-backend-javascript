export default function getListStudents() {
  const myarray = [];
  const obj1 = {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  };

  const obj2 = {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  };

  const obj3 = {
    id: 5,
    firstName: 'Serena',
    location: 'San Francisco',
  };

  myarray.push(obj1);
  myarray.push(obj2);
  myarray.push(obj3);
  return myarray;
}
