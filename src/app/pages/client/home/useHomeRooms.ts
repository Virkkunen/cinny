import { useAtomValue } from 'jotai';
import { useMemo } from 'react';
import { allRoomsAtom } from '../../../state/room-list/roomList';
import { useMatrixClient } from '../../../hooks/useMatrixClient';
import { isSpace } from '../../../utils/room';

export const useHomeRooms = () => {
  const mx = useMatrixClient();
  const rooms = useAtomValue(allRoomsAtom);

  return useMemo(
    () => rooms.filter((roomId) => !isSpace(mx.getRoom(roomId))),
    [mx, rooms]
  );
};
