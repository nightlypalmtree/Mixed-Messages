//Creating terms


const philosophicalConcepts = [];

philosophicalConcepts.push('The Soul');
philosophicalConcepts.push('Nirvana');
philosophicalConcepts.push('Inner Peace');
philosophicalConcepts.push('Trivial Pursuits');
philosophicalConcepts.push('Happiness');
philosophicalConcepts.push('Sadness');
philosophicalConcepts.push('Full Stomach');
philosophicalConcepts.push('Sunshine');
philosophicalConcepts.push('Romance');
philosophicalConcepts.push('Awareness');
philosophicalConcepts.push('Reality');
philosophicalConcepts.push('Heaven');
philosophicalConcepts.push('Freedom');
philosophicalConcepts.push('Friendship');
philosophicalConcepts.push('Self Control');
philosophicalConcepts.push('Family');
philosophicalConcepts.push('Fortune');
philosophicalConcepts.push('Courage');
philosophicalConcepts.push('Doors of Perception');
philosophicalConcepts.push('Balance');
philosophicalConcepts.push('Good and Evil');
philosophicalConcepts.push('Creation');
philosophicalConcepts.push('Serenity');
philosophicalConcepts.push('Causality');
philosophicalConcepts.push('Chaos');
philosophicalConcepts.push('A Shell');
philosophicalConcepts.push('Chamber');
philosophicalConcepts.push('Treasure');
philosophicalConcepts.push('Flower');
philosophicalConcepts.push('Sand');

const combinationWords = [
    'Is The',
'without', 
'with', 
'for', 
'among', 
'through',
'mixed with', 
'adds to', 
'transitions with', 
'by', 
'joins with'];

const objects = [
    'a Circle',
    'a Key',
    'a Car',
    'a Rainbow',
    'a Teapot',
    'Water',
    'Nectar',
    'a Clock',
   'a Wire',
    'a String',
    'a Trail',
    'a Tiger',
    'a Monkey',
    'a Table',
    'a Book',
    'a Superhero',
    'an Outfit',
    'Trinity',
    'a Guardian',
    'a Samurai',
    'the First Chapter',
    'the Last Chapter',
    'a Smile',
    'a Temple',
    'the Root',
    ];

    const proximityWords = [
        'to',
        'for',
        'through',
        'past',
        'by',
        'of',
        'among',
        'along',
        'targetting',
        'following',
        'at the',
        'before',
        'pursuing'
    ];

//Generate Random Philosophical Concepts and conjoining words


const philosophicalConceptA = philosophicalConcepts[Math.floor(Math.random() * philosophicalConcepts.length)];


const combinationWord = combinationWords[Math.floor(Math.random() * combinationWords.length)];


const anObject = objects[Math.floor(Math.random() * objects.length)];



const proximityWord = proximityWords[Math.floor(Math.random() * proximityWords.length)];


const philosophicalConceptB = philosophicalConcepts[Math.floor(Math.random() * philosophicalConcepts.length)];





//'philosophicalConceptA' + combinationWord + article + anObject + proximityWord + philosophicalConceptB
 

console.log(philosophicalConceptA + ' ' + combinationWord + ' ' + anObject + ' ' + proximityWord + ' ' + philosophicalConceptB + '.');


