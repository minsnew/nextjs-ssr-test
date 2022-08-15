import classNames from "classnames";
import { useEffect, useState } from "react";
import { getAlbums } from "../../api";
import { Album } from "../../types/Album";

const AlbumList = ({ userId }: { userId: number }) => {
  const [albumList, setAlbumList] = useState<Album[]>([]);

  const getAlbumsByUserId = async (id: number) => {
    const albums = await getAlbums(id);
    setAlbumList(albums);
  };

  useEffect(() => {
    getAlbumsByUserId(userId);
  }, [userId]);

  return (
    <div className="mt-4">
      <div className="font-bold text-2xl mb-3">Albums</div>
      <div className="flex flex-wrap">
        {albumList.map((it, idx) => (
          <div
            key={it.id}
            className={classNames(
              "flex flex-row items-center",
              "rounded-lg",
              "bg-indigo-100",
              "w-80 h-20",
              "p-2",
              "mr-4 mb-2",
              "last:mr-0 last:mb-0",
              "text-ellipsis overflow-hidden"
            )}
          >
            <div className="rounded-full bg-indigo-400 w-7 h-7 flex items-center justify-center mr-3">
              {idx + 1}
            </div>
            {it.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumList;
