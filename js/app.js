var gridSize = 10;
var cellSize = 27;
var actualSize = 10 * 27;

var assets = {
    'apple': 'assets/apple.jpg',
    'grape': 'assets/grape.jpg',
    'cherry': 'assets/cherry.jpg',
    'orange': 'assets/orange.jpg',
};

var randomFruitContainer = [
    'apple', 
    'grape',
    'cherry',
    'orange'
];

var grid = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
];


function initializeGrid()
{
    $('.grid').css('width', actualSize);
    $('.grid').css('height', actualSize); 
}

function randomFruit()
{
    index = Math.floor(Math.random() * ((randomFruitContainer.length - 1) - 0 + 1)) + 0;
    return randomFruitContainer[index];
}

function randomizeGrid()
{
    for (var y = 1; y <= gridSize; y++) {
        for (var x = 1 ; x <= gridSize; x++) {
            fruit  = randomFruit();
            grid[y-1][x-1] = fruit;
            $('.grid').append('<div class="cell '+fruit+'" data-fruit="'+fruit+'" data-x="'+(x-1)+'" data-y="'+(y-1)+'"></div>');
        }
    }
}

function checkAround(x, y, fruit)
{
    
}

initializeGrid();
randomizeGrid();


$('.cell').click(function(){
    console.log($(this).data('fruit'));
});

