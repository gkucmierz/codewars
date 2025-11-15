
// Look and Write Sequence

function mazeRunner(maze, directions) {
  const [h, w] = [maze.length, maze[0].length];
  const findStartingPos = () => {
    for (let y = 0; y < h; ++y) {
      for (let x = 0; x < w; ++x) {
        if (maze[y][x] === 2) return [x, y];
      }
    }
  };
  const X = 0;
  const Y = 1;
  const pos = findStartingPos();
  const dir2coord = {
    N: [0, -1],
    S: [0, 1],
    E: [1, 0],
    W: [-1, 0],
  };
  for (dir of directions) {
    const coord = dir2coord[dir];
    pos[X] += coord[X];
    pos[Y] += coord[Y];
    if (pos[X] < 0 || pos[X] >= w) return 'Dead';
    if (pos[Y] < 0 || pos[Y] >= h) return 'Dead';
    if (maze[pos[Y]][pos[X]] === 1) return 'Dead';
    if (maze[pos[Y]][pos[X]] === 3) return 'Finish';
  }
  return 'Lost';
}

var maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]];
            
mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E"]); // "Finish"
mazeRunner(maze,["N","N","N","N","N","E","E","S","S","E","E","N","N","E"]); // "Finish"
mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E","W","W"]); // "Finish"

mazeRunner(maze,["N","N","N","W","W"]); // "Dead"
mazeRunner(maze,["N","N","N","N","N","E","E","S","S","S","S","S","S"]); // "Dead"

mazeRunner(maze,["N","E","E","E","E"]); // "Lost"

mazeRunner([
  [
    1, 1, 1, 1, 1,
    1, 1, 1, 0, 1
  ],
  [
    1, 3, 1, 0, 1,
    0, 0, 0, 0, 1
  ],
  [
    1, 0, 1, 0, 0,
    0, 1, 1, 0, 1
  ],
  [
    1, 0, 1, 1, 1,
    1, 1, 0, 0, 1
  ],
  [
    1, 0, 1, 0, 0,
    0, 0, 0, 0, 1
  ],
  [
    1, 0, 1, 0, 1,
    0, 1, 0, 0, 1
  ],
  [
    1, 0, 1, 0, 1,
    0, 0, 0, 0, 0
  ],
  [
    1, 0, 1, 0, 1,
    0, 1, 1, 0, 1
  ],
  [
    1, 0, 0, 0, 1,
    0, 0, 0, 0, 1
  ],
  [
    1, 1, 1, 0, 1,
    1, 1, 1, 2, 1
  ]
], [ 'N', 'W', 'W', 'W', 'W' ]);
