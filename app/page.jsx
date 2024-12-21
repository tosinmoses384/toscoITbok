// import rooms from '@/data/rooms.json';

import RoomCard from '@/components/RoomCard';
import Heading from '@/components/Heading';
import getAllRooms from './actions/getAllRooms';

export default async function Home() {
  const rooms = await getAllRooms();
  // console.log(rooms)

  return (
    <>
    <Heading title='Available Rooms' />
    {rooms?.length > 0 ? (
      rooms.map((room)=> <h3><RoomCard room={room} key={room.id} /></h3>)   // NOTE THAT THE room.$id will only work before installing and using appwrite
    ) : (<p>No rooms available at the moment</p>)}






      {/* <Heading title='Available Rooms' />
      {rooms.length > 0 ? (
        rooms.map((room) => <RoomCard room={room} key={room.$id} />)
      ) : (
        <p>No rooms available at the moment</p>
      )} */}
    </>
  );
}
