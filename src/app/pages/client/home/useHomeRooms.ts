import { useAtomValue } from 'jotai';
import { allRoomsAtom } from '../../../state/room-list/roomList';

export const useHomeRooms = () => {
  const rooms = useAtomValue(allRoomsAtom);
  return rooms;
};
