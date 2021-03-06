var r = Raphael('foo', 1009, 633),

    //variables for original pieces
    originX = 0,
    originY = 126,
    mainUnit = 126,
    midFloorHeight = mainUnit*2/3,
    
    //variables for height changes in level up animations
    jumpHeight = -(midFloorHeight+10),
    heightXOne = originX + jumpHeight,
    heightXTwo = originX + 2*jumpHeight,
    heightXThree = originX + 3*jumpHeight - mainUnit/3,
    heightYOne = originY + jumpHeight,
    heightYTwo = originY + 2*jumpHeight,
    heightYThree = originY + 3*jumpHeight - mainUnit/3,

    //variables for the indentation pieces
    indentUnit = mainUnit/3,
    indentHeight = mainUnit-indentUnit,
    indentStartPt = heightXThree+indentUnit,
    indentEndPt = indentStartPt+indentHeight,

    //variables for the star pieces
    starUnit = indentHeight/6,
    starHeight = 5*starUnit,
    starStartPt = indentEndPt+2.5*starUnit,
    starEndPt = indentStartPt+2.5*starUnit,
    starLimb = 2*starUnit,
    starOrigin = starEndPt + starLimb,

    duration = 3000,

    //Defining standard shapes
    squareL = 'l' + mainUnit + '  ' + mainUnit + ' l' + mainUnit + '  0   l-' + mainUnit + ' -' + mainUnit + ' l-' + mainUnit + ' 0',
    squareR = 'l' + mainUnit + '  ' + mainUnit + ' l0   ' + mainUnit + '  l-' + mainUnit + ' -' + mainUnit + ' l0  -' + mainUnit + '',
    rectangleL = 'l' + midFloorHeight + '  ' + midFloorHeight + ' l' + mainUnit + '  0   l-' + midFloorHeight + ' -' + midFloorHeight + ' l-' + mainUnit + ' 0',
    rectangleR = 'l' + midFloorHeight + '  ' + midFloorHeight + ' l0   ' + mainUnit + '  l-' + midFloorHeight + ' -' + midFloorHeight + ' l0  -' + mainUnit + '',


    baseL = r.path('M' + originX + ' ' + originY + ' ' + squareL),
    baseR = r.path('M' + originY + ' ' + originX + ' ' + squareR),
    baseT = r.rect(0, 0, 126, 126),

    firstFloorL = r.path('M' + originX + ' ' + originY + ' ' + rectangleL),
    firstFloorR = r.path('M' + originY + ' ' + originX + ' ' + rectangleR),
    firstFloorT = r.rect(0, 0, 126, 126),

    secondFloorL = r.path('M' + originX + ' ' + originY + ' ' + rectangleL),
    secondFloorR = r.path('M' + originY + ' ' + originX + ' ' + rectangleR),
    secondFloorT = r.rect(0, 0, 126, 126),

    topFloorL = r.path('M' + originX + ' ' + originY + ' ' + rectangleL),
    topFloorR = r.path('M' + originY + ' ' + originX + ' ' + rectangleR),
    topFloorT = r.rect(0, 0, 126, 126),

    indentL = r.path('M' + indentStartPt + ' ' + indentStartPt + ' l' + indentHeight + '  0 l0  0    l-' + indentHeight + ' 0  l0 0'),
    indentR = r.path('M' + indentStartPt + ' ' + indentStartPt + ' l0   ' + indentHeight + ' l0  0  l0  -' + indentHeight + ' l0 0'),
    indentT = r.rect(indentStartPt, indentStartPt, indentHeight , indentHeight ),

    starLeftL = r.path('M' + (starOrigin) + ' ' + (starOrigin + starUnit) + ' l' + starUnit +' '+ starUnit +' l0  0   l-'+starUnit+' -'+starUnit + ' l0 0'),
    starLeftT = r.rect(starOrigin, starOrigin, 0, starUnit),

    starBackR = r.path('M' + (starOrigin+starUnit) + ' ' + (starOrigin) + ' l' + starUnit +  ' ' + starUnit + ' l0   0  l-' + starUnit +  ' -'  + starUnit +  'l0  0'),
    starBackT = r.rect(starOrigin, starOrigin, starUnit, 0),

    starCenterL = r.path('M' + starStartPt + ' ' + (starStartPt + starUnit) + ' l0  0 l' + starUnit + '  0   l0 0 l-' + starUnit + ' 0'),
    starCenterR = r.path('M' + (starStartPt + starUnit) + ' ' + starStartPt + ' l0  0 l0   ' + starUnit + '  l0 0 l0  -' + starUnit + ''),
    starCenterT = r.rect(starStartPt, starStartPt, starUnit, starUnit), 
    
    starRightL = r.path('M' + (starOrigin+starUnit) + ' ' + (starOrigin+starUnit) + ' l' + starUnit +  ' ' + starUnit + ' l0   0  l-' + starUnit +  ' -'  + starUnit +  'l0  0'),
    starRightR = r.path('M' + (starOrigin+ starUnit) + ' ' + (starOrigin) + ' l' + starUnit +  ' ' + starUnit + ' l0   ' + starUnit + '  l-' + starUnit +  ' -'  + starUnit +  'l0  -' + starUnit + ''),
    starRightT = r.rect(starOrigin+starUnit, starOrigin, 0, starUnit),

    starFrontL = r.path('M' + (starOrigin) + ' ' + (starOrigin + starUnit) + ' l' + starUnit +  ' ' + starUnit + ' l' + starUnit + ' 0  l-' + starUnit +  ' -'  + starUnit +  'l-' + starUnit + ' 0'),
    starFrontR = r.path('M' + (starOrigin+starUnit) + ' ' + (starOrigin + starUnit) + ' l' + starUnit +  ' ' + starUnit + ' l0   0  l-' + starUnit +  ' -'  + starUnit +  'l0  0'),
    starFrontT = r.rect(starOrigin, starOrigin+starUnit, starUnit, 0),

    //Sets grouped for styling or animation
    invisible = r.set([indentT, starCenterT,starFrontL, starRightR]),

    jumpTops = r.set([topFloorT, secondFloorT, firstFloorT]),
    jumpLefts = r.set([topFloorL, secondFloorL, firstFloorL]),
    jumpRights = r.set([topFloorR, secondFloorR, firstFloorR]),

    star = r.set([starCenterT,starRightT, starLeftT, starFrontT, starBackT, starCenterL,starRightL, starLeftL, starFrontL, starCenterR,starRightR, starFrontR, starBackR]),
    starTops = r.set([starCenterT,starRightT, starLeftT, starFrontT, starBackT]),
    starLefts = r.set([starCenterL,starRightL, starLeftL, starFrontL]),
    starRights = r.set([starCenterR,starRightR, starFrontR, starBackR]),

    allTops = r.set([baseT, jumpTops, indentT, starTops]),
    allLefts = r.set([baseL, jumpLefts, indentL, starLefts]),
    allRights = r.set([baseR, jumpRights, indentR, starRights]),
   

    set = r.set([allTops, allLefts, allRights]);


set.transform('T311,309 s1,0.575 ,0,0r45,0,0')

//styling
allLefts.attr({ fill:'#536782', stroke:'none' })
allRights.attr({ fill:'#8ea2bd', stroke:'none' })
allTops.attr({ fill:'#ccc', stroke:'none' })

invisible.attr({ fill:'none', stroke:'none' })


var firstGrowL = Raphael.animation({path: 'M' + heightXOne + ' ' + heightYOne + ' ' + rectangleL}, duration, "elastic");
var firstGrowR = Raphael.animation({path: 'M' + heightYOne + ' ' + heightXOne + ' ' + rectangleR}, duration,"elastic");
var firstGrowT = Raphael.animation({y: heightXOne, x: heightXOne}, duration, "elastic");


var secondGrowL = Raphael.animation({path: 'M' + heightXTwo + ' ' + heightYTwo + ' ' + rectangleL}, duration, "elastic");
var secondGrowR = Raphael.animation({path: 'M' + heightYTwo + ' ' + heightXTwo + ' ' + rectangleR}, duration,"elastic");
var secondGrowT = Raphael.animation({y: heightXTwo, x: heightXTwo}, duration, "elastic");


var finalGrowL = Raphael.animation({path: 'M' + heightXThree + ' ' + heightYThree + ' ' + squareL}, duration, "elastic");
var finalGrowR = Raphael.animation({path: 'M' + heightYThree + ' ' + heightXThree + ' ' + squareR}, duration, "elastic");
var finalGrowT = Raphael.animation({y: heightXThree, x: heightXThree}, duration, "elastic");


var finalIndentL = Raphael.animation({path: 'M' + indentStartPt + ' ' + indentStartPt + ' l' + indentHeight + '  0 l' + indentHeight + '  ' + indentHeight + '    l-' + indentHeight + ' 0  l-' + indentHeight + ' -' + indentHeight + ' '}, duration/3);
var finalIndentR = Raphael.animation({path: 'M' + indentStartPt + ' ' + indentStartPt + ' l0   ' + indentHeight + ' l' + indentHeight + '  ' + indentHeight + '  l0  -' + indentHeight + ' l-' + indentHeight + ' -' + indentHeight + ' '}, duration/3);
var finalIndentT = Raphael.animation({x: indentEndPt, y: indentEndPt}, duration/3);


var starUpL = Raphael.animation({path: 'M' + starEndPt + ' ' + (starEndPt + starUnit) + ' l' + starHeight + '  ' + starHeight + ' l' + starUnit + '  0   l-' + starHeight + ' -' + starHeight + ' l-' + starUnit + ' 0'}, duration/3);
var starUpR = Raphael.animation({path: 'M' + (starEndPt + starUnit) + ' ' + starEndPt + ' l' + starHeight + '  ' + starHeight + ' l0   ' + starUnit + '  l-' + starHeight + ' -' + starHeight + ' l0  -' + starUnit + ''}, duration/3);
var starUpT = Raphael.animation({x:starEndPt, y:starEndPt}, duration/3);


var starBurstRT = Raphael.animation({width:starLimb}, duration);
var starBurstRR = Raphael.animation({path: 'M' + (starOrigin + starUnit + starLimb) + ' ' + (starOrigin) + ' l' + starUnit +  ' ' + starUnit + ' l0   ' + starUnit + '  l-' + starUnit +  ' -'  + starUnit +  'l0  -' + starUnit + ''}, duration);
var starBurstRL = Raphael.animation({path: 'M' + (starOrigin+starUnit) + ' ' + (starOrigin+starUnit) + ' l' + starUnit +  ' ' + starUnit + ' l'+ starLimb +  ' 0 l-' + starUnit +  ' -'  + starUnit +  'l-' + starLimb+' 0'}, duration);


var starBurstLT = Raphael.animation({width:starLimb, x: starEndPt}, duration);
var starBurstLL = Raphael.animation({path: 'M' + (starOrigin) + ' ' + (starOrigin + starUnit) + ' l' + starUnit +' '+ starUnit +' l-' + starLimb + '  0   l-'+starUnit+' -'+starUnit + ' l' + starLimb +' 0'}, duration);


var starBurstFT = Raphael.animation({height:starLimb}, duration);
var starBurstFL = Raphael.animation({path: 'M' + (starOrigin) + ' ' + (starOrigin + starLimb + starUnit) + ' l' + starUnit +  ' ' + starUnit + ' l' + starUnit + ' 0  l-' + starUnit +  ' -'  + starUnit +  'l-' + starUnit + ' 0'},duration);
var starBurstFR = Raphael.animation({path: 'M' + (starOrigin+starUnit) + ' ' + (starOrigin + starUnit) + ' l' + starUnit +  ' ' + starUnit + ' l0   ' + starLimb + '  l-' + starUnit +  ' -'  + starUnit +  'l0 -'+ starLimb}, duration);


var starBurstBT = Raphael.animation({height:starLimb, y: starEndPt}, duration);
var starBurstBR = Raphael.animation({path: 'M' + (starOrigin+starUnit) + ' ' + (starOrigin) + ' l' + starUnit +  ' ' + starUnit + ' l0   -' + starLimb + '  l-' + starUnit +  ' -'  + starUnit +  'l0 '+ starLimb}, duration);

var starFloatUp = Raphael.animation({transform: 'T311,299 s1,0.575 ,0,0r45,0,0'},duration);
var starFloatDown = Raphael.animation({transform: 'T311,319 s1,0.575 ,0,0r45,0,0'},duration);


var firstLevelUp = function() {
    jumpRights.animate(firstGrowR);
    jumpLefts.animate(firstGrowL);
    jumpTops.animate(firstGrowT);

    jumpRights.pop();
    jumpLefts.pop();
    jumpTops.pop();
}

var secondLevelUp = function() {
    jumpRights.animate(secondGrowR);
    jumpLefts.animate(secondGrowL);
    jumpTops.animate(secondGrowT);

    jumpRights.pop();
    jumpLefts.pop();
    jumpTops.pop();
}

var finalLevelUp = function() {
    jumpRights.animate(finalGrowR);
    jumpLefts.animate(finalGrowL);
    jumpTops.animate(finalGrowT); 

    window.setTimeout(indent, duration);
    window.setTimeout(starUp, duration+duration/3);
    window.setTimeout(starBurst, duration+duration*2/3);
    window.setTimeout(finishUp, duration+duration*5/3);
    window.setTimeout(floatStar, duration+duration*5/3);
}

var indent = function() {
    indentT.attr({ fill:'#ccc', stroke:'none' })

    indentR.animate(finalIndentR);
    indentL.animate(finalIndentL);
    indentT.animate(finalIndentT);
}

var starUp=function() {
    starCenterT.attr({ fill:'#ccc', stroke:'none' })

    starCenterR.animate(starUpR);
    starCenterL.animate(starUpL);
    starCenterT.animate(starUpT);
}

var starBurst=function() {
    starRightR.attr({ fill:'#8ea2bd', stroke:'none' });
    starFrontL.attr({ fill:'#536782', stroke:'none' });

    starRightR.animate(starBurstRR);
    starRightL.animate(starBurstRL);
    starRightT.animate(starBurstRT);

    starLeftL.animate(starBurstLL);
    starLeftT.animate(starBurstLT);

    starFrontR.animate(starBurstFR);
    starFrontL.animate(starBurstFL);
    starFrontT.animate(starBurstFT);

    starBackR.animate(starBurstBR);
    starBackT.animate(starBurstBT);
}

var floatStar = function() {
    star.animate(starFloatUp);
    star.transform('T311,299 s1,0.575 ,0,0r45,0,0');
    star.animate(starFloatDown.delay(duration));
    star.transform('T311,319 s1,0.575 ,0,0r45,0,0');
}

var finishUp = function() {
    window.setInterval(floatStar,duration*2);
}

var refresh = function() {
    r.clear();

    squareL = 'l' + mainUnit + '  ' + mainUnit + ' l' + mainUnit + '  0   l-' + mainUnit + ' -' + mainUnit + ' l-' + mainUnit + ' 0',
    squareR = 'l' + mainUnit + '  ' + mainUnit + ' l0   ' + mainUnit + '  l-' + mainUnit + ' -' + mainUnit + ' l0  -' + mainUnit + '',
    rectangleL = 'l' + midFloorHeight + '  ' + midFloorHeight + ' l' + mainUnit + '  0   l-' + midFloorHeight + ' -' + midFloorHeight + ' l-' + mainUnit + ' 0',
    rectangleR = 'l' + midFloorHeight + '  ' + midFloorHeight + ' l0   ' + mainUnit + '  l-' + midFloorHeight + ' -' + midFloorHeight + ' l0  -' + mainUnit + '',


    baseL = r.path('M' + originX + ' ' + originY + ' ' + squareL),
    baseR = r.path('M' + originY + ' ' + originX + ' ' + squareR),
    baseT = r.rect(0, 0, 126, 126),

    firstFloorL = r.path('M' + originX + ' ' + originY + ' ' + rectangleL),
    firstFloorR = r.path('M' + originY + ' ' + originX + ' ' + rectangleR),
    firstFloorT = r.rect(0, 0, 126, 126),

    secondFloorL = r.path('M' + originX + ' ' + originY + ' ' + rectangleL),
    secondFloorR = r.path('M' + originY + ' ' + originX + ' ' + rectangleR),
    secondFloorT = r.rect(0, 0, 126, 126),

    topFloorL = r.path('M' + originX + ' ' + originY + ' ' + rectangleL),
    topFloorR = r.path('M' + originY + ' ' + originX + ' ' + rectangleR),
    topFloorT = r.rect(0, 0, 126, 126),

    indentL = r.path('M' + indentStartPt + ' ' + indentStartPt + ' l' + indentHeight + '  0 l0  0    l-' + indentHeight + ' 0  l0 0'),
    indentR = r.path('M' + indentStartPt + ' ' + indentStartPt + ' l0   ' + indentHeight + ' l0  0  l0  -' + indentHeight + ' l0 0'),
    indentT = r.rect(indentStartPt, indentStartPt, indentHeight , indentHeight ),

    starLeftL = r.path('M' + (starOrigin) + ' ' + (starOrigin + starUnit) + ' l' + starUnit +' '+ starUnit +' l0  0   l-'+starUnit+' -'+starUnit + ' l0 0'),
    starLeftT = r.rect(starOrigin, starOrigin, 0, starUnit),

    starBackR = r.path('M' + (starOrigin+starUnit) + ' ' + (starOrigin) + ' l' + starUnit +  ' ' + starUnit + ' l0   0  l-' + starUnit +  ' -'  + starUnit +  'l0  0'),
    starBackT = r.rect(starOrigin, starOrigin, starUnit, 0),

    starCenterL = r.path('M' + starStartPt + ' ' + (starStartPt + starUnit) + ' l0  0 l' + starUnit + '  0   l0 0 l-' + starUnit + ' 0'),
    starCenterR = r.path('M' + (starStartPt + starUnit) + ' ' + starStartPt + ' l0  0 l0   ' + starUnit + '  l0 0 l0  -' + starUnit + ''),
    starCenterT = r.rect(starStartPt, starStartPt, starUnit, starUnit), 
    
    starRightL = r.path('M' + (starOrigin+starUnit) + ' ' + (starOrigin+starUnit) + ' l' + starUnit +  ' ' + starUnit + ' l0   0  l-' + starUnit +  ' -'  + starUnit +  'l0  0'),
    starRightR = r.path('M' + (starOrigin+ starUnit) + ' ' + (starOrigin) + ' l' + starUnit +  ' ' + starUnit + ' l0   ' + starUnit + '  l-' + starUnit +  ' -'  + starUnit +  'l0  -' + starUnit + ''),
    starRightT = r.rect(starOrigin+starUnit, starOrigin, 0, starUnit),

    starFrontL = r.path('M' + (starOrigin) + ' ' + (starOrigin + starUnit) + ' l' + starUnit +  ' ' + starUnit + ' l' + starUnit + ' 0  l-' + starUnit +  ' -'  + starUnit +  'l-' + starUnit + ' 0'),
    starFrontR = r.path('M' + (starOrigin+starUnit) + ' ' + (starOrigin + starUnit) + ' l' + starUnit +  ' ' + starUnit + ' l0   0  l-' + starUnit +  ' -'  + starUnit +  'l0  0'),
    starFrontT = r.rect(starOrigin, starOrigin+starUnit, starUnit, 0),

    //Sets grouped for styling or animation
    invisible = r.set([indentT, starCenterT,starFrontL, starRightR]),

    jumpTops = r.set([topFloorT, secondFloorT, firstFloorT]),
    jumpLefts = r.set([topFloorL, secondFloorL, firstFloorL]),
    jumpRights = r.set([topFloorR, secondFloorR, firstFloorR]),

    star = r.set([starCenterT,starRightT, starLeftT, starFrontT, starBackT, starCenterL,starRightL, starLeftL, starFrontL, starCenterR,starRightR, starFrontR, starBackR]),
    starTops = r.set([starCenterT,starRightT, starLeftT, starFrontT, starBackT]),
    starLefts = r.set([starCenterL,starRightL, starLeftL, starFrontL]),
    starRights = r.set([starCenterR,starRightR, starFrontR, starBackR]),

    allTops = r.set([baseT, jumpTops, indentT, starTops]),
    allLefts = r.set([baseL, jumpLefts, indentL, starLefts]),
    allRights = r.set([baseR, jumpRights, indentR, starRights]),
   

    set = r.set([allTops, allLefts, allRights]);


set.transform('T311,309 s1,0.575 ,0,0r45,0,0')

//styling
allLefts.attr({ fill:'#536782', stroke:'none' })
allRights.attr({ fill:'#8ea2bd', stroke:'none' })
allTops.attr({ fill:'#ccc', stroke:'none' })

invisible.attr({ fill:'none', stroke:'none' })
}

var fullAnimation = function() {
    refresh();
    firstLevelUp();
    window.setTimeout(secondLevelUp,duration);
    window.setTimeout(finalLevelUp,duration*2);
}