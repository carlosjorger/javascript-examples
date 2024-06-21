export function getColors(marbles) {
  // white
  let marblesByColors = [];
  let marblesBySize = [];

  for (const marble of marbles) {
    // black
    {
      // red
      const colorGroup = marblesByColors.find(
        (colorGroup) => colorGroup.color == marble.color
      );
      if (colorGroup) {
        colorGroup.count += marble.count;
      } else {
        marblesByColors.push({
          color: marble.color,
          count: marble.count,
        });
      }
    }
    {
      //yellow
      const sizeGroup = marblesBySize.find(
        (sizeGroup) => sizeGroup.size == marble.size
      );
      if (sizeGroup) {
        sizeGroup.count += marble.count;
      } else {
        marblesBySize.push({
          size: marble.size,
          count: marble.count,
        });
      }
    }
  }
  return function info(query) {
    // shadowing info
    let info = {};
    // green
    let colorCount = marblesByColors.find(
      (colorGroup) => colorGroup.color == query.color
    )?.count;

    let sizeCount = marblesBySize.find(
      (sizeGroup) => sizeGroup.size == query.size
    ).count;
    if (query.color) {
      info = { ...info, colorCount };
    }
    if (query.size) {
      info = { ...info, sizeCount };
    }
    if (query.color && query.size) {
      // purple
      let count = 0;
      for (const marble of marbles) {
        // orange
        if (marble.color == query.color && marble.size == query.size) {
          count += marble.count;
        }
      }
      info = { ...info, count };
    }
    return info;
  };
}
