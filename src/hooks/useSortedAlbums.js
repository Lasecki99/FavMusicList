import { useMemo } from "react";
import { useSelector } from "react-redux";

export function useSortedAlbums(sortBy, direction) {
  const albums = useSelector((state) => state.albums.albums);

  const data = useMemo(() => {
    const sortedData = [...albums].sort((a, b) =>
      String(a[sortBy]).localeCompare(String(b[sortBy]))
    );
    if (direction === "desc") {
      sortedData.reverse();
    }
    return sortedData;
  }, [sortBy, direction, albums]);

  return data;
}
