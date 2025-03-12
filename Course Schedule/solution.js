var canFinish = function (numCourses, prerequisites) {
  const couMap = new Map();
  for (let i = 0; i < numCourses; i++) {
    couMap.set(i, []);
  }
  for (let [crs, pre] of prerequisites) {
    couMap.get(crs).push(pre);
  }

  let visit = new Set();

  const dfs = (c) => {
    if (visit.has(c)) {
      return false;
    }

    if (!couMap.has(c)) {
      return true;
    }

    visit.add(c);

    let pres = couMap.get(c);

    for (let pre of pres) {
      if (!dfs(pre)) return false;
    }
    visit.delete(c);
    couMap.set(c, []);
    return true;
  };

  for (let c = 0; c < numCourses; c++) {
    if (!dfs(c)) return false;
  }
  return true;
};
