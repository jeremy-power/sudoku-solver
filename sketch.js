var board = [
    [7, 8, 0, 4, 0, 0, 1, 2, 0],
    [6, 0, 0, 0, 7, 5, 0, 0, 9],
    [0, 0, 0, 6, 0, 1, 0, 7, 8],
    [0, 0, 7, 0, 4, 0, 2, 6, 0],
    [0, 0, 1, 0, 5, 0, 9, 3, 0],
    [9, 0, 4, 0, 6, 0, 0, 0, 5],
    [0, 7, 0, 3, 0, 0, 0, 1, 2],
    [1, 2, 0, 0, 0, 7, 4, 0, 0],
    [0, 4, 9, 2, 0, 6, 0, 0, 7],
];

let font,
  fontsize = 32;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
}

function setup() {
  createCanvas(500, 500);

  // Set text characteristics
  textSize(fontsize);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(160);

  // Set the gap between letters and the left and top margin
  let gap = 52;
  let margin = 10;
  translate(margin * 4, margin * 4);

  // Set the counter to start at the character you want
  // in this case 35, which is the # symbol
  let counter = 35;

  // Loop as long as there is space on the canvas
  for (let y = 0, i = 0; y < height - gap; y += gap, i++) {
    for (let x = 0, j = 0; x < width - gap; x += gap, j++) {
      // Use the counter to retrieve individual letters by their Unicode number

        fill(255);

      // Draw the letter to the screen
      text(board[i][j], x, y);

      // Increment the counter
      counter++;
    }
  }
}
