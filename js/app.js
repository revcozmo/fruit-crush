// sound stuff
var correct = "correct";
var incorrect = "incorrrect";
var played = false;
createjs.Sound.registerSound("sounds/correct.wav", correct);
createjs.Sound.registerSound("sounds/incorrect.wav", incorrect);


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

function checkUp(x, y, fruit)
{   
    if (y !== 0) {
        if (grid[(y - 1)][x] == fruit) {
                $('[data-x="'+x+'"][data-y="'+y+'"]').addClass('removed');
                createjs.Sound.play(correct);
                played = true;

            if (grid[y][x] == fruit) {
                $('[data-x="'+x+'"][data-y="'+(y -1)+'"]').addClass('removed');
            }

            current = (y - 1);
            checkUp(x, current, fruit);
            played = false;
        }else{
            if (played === false){
                // createjs.Sound.play(incorrect);
            }
        }
    }
}

function checkDown(x, y, fruit)
{   
    if (y !== 9) {
        if (grid[(y + 1)][x] == fruit) {
                $('[data-x="'+x+'"][data-y="'+y+'"]').addClass('removed');
                createjs.Sound.play(correct);
                played = true;

            if (grid[y][x] == fruit) {
                $('[data-x="'+x+'"][data-y="'+(y + 1)+'"]').addClass('removed');
            }

            current = (y + 1);
            checkDown(x, current, fruit);
            played = false;
        }else{
            if (played === false){
                // createjs.Sound.play(incorrect);
            }
        }
    }
}

function checkLeft(x, y, fruit)
{   
    if (x !== 0) {
        if (grid[(y)][x - 1] == fruit) {
                $('[data-x="'+x+'"][data-y="'+y+'"]').addClass('removed');
                createjs.Sound.play(correct);
                played = true;

            if (grid[y][x] == fruit) {
                $('[data-x="'+(x - 1)+'"][data-y="'+(y)+'"]').addClass('removed');
            }

            current = (x - 1);
            checkLeft(current, y, fruit);
            played = false;
        }else{
            if (played === false){
                // createjs.Sound.play(incorrect);
            }
        }
    }
}

function checkRight(x, y, fruit)
{   
    if (x !== 9) {
        if (grid[(y)][x + 1] == fruit) {
                $('[data-x="'+x+'"][data-y="'+y+'"]').addClass('removed');
                createjs.Sound.play(correct);
                played = true;

            if (grid[y][x] == fruit) {
                $('[data-x="'+(x + 1)+'"][data-y="'+(y)+'"]').addClass('removed');
            }

            current = (x + 1);
            checkLeft(current, y, fruit);
            played = false;
        }else{
            if (played === false){
                // createjs.Sound.play(incorrect);
            }
        }
    }
}

initializeGrid();
randomizeGrid();

$('.cell').click(function(){
    if ($(this).hasClass('removed')){

    }else{
        fruit = $(this).data('fruit');
        x = $(this).data('x');
        y = $(this).data('y');
        fruit = $(this).data('fruit');

        checkUp(x, y, fruit);
        checkDown(x, y, fruit);
        checkLeft(x, y, fruit);
        checkRight(x, y, fruit);
    }
});

