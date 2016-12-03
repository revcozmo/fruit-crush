var gridSize = 10;
var cellSize = 27;
var actualSize = 10 * 27;

var assets = {
    'apple': 'assets/apple.jpg',
    'grape': 'assets/grape.jpg',
    'cherry': 'assets/cherry.jpg',
    'orange': 'assets/orange.jpg',
};

function initializeGrid()
{
    $('.grid').css('width', actualSize);
    $('.grid').css('height', actualSize); 
}

initializeGrid();

for (var y = 1; y <= gridSize; y++) {
    for (var x = 1 ; x <= gridSize; x++) {
        $('.grid').append('<div class="cell"></div>');
    }
}