///////////////////////////////
//// Assignment code setup ////
///////////////////////////////

function getIcecreamInStock()
{
    const icecreamFlavors = ['chocolate','vanilla','strawberry','coffee','mint','chocolate chip','rocky road','cookie dough','bubblegum'];
    const icecreamFlavorInStock = icecreamFlavors[Math.floor(Math.random() * icecreamFlavors.length)];
    return icecreamFlavorInStock;
}

/////////////////////////////////////
//// Don't modify anything above ////
/////////////////////////////////////



function sayWords(wordsToSay, amountOfTimesToSayWords)
{
    if (amountOfTimesToSayWords > 0)
    {
        console.log(wordsToSay);

        // 1) Complete the recursive function here so that "wordsToSay" is only said the number
        //    of times specified in the caller's instruction. For example, if we call
        //    sayWords("Hello", 2), the two console logs should occur saying "Hello".
        //
        //    Note 1: Remember that if the condition in which it calls itself stays the same,
        //            an infinite loop will occur if that condition always evaluates to true.
        //            In other words, if "amountOfTimesToSayWords" is always above 0, every
        //            time the recursion occurs, it will always say the words forever nonstop.
        //
        //    Note 2: Remember that our "sayWords" function requires two parameters to run
    }
}

sayWords("Hello", 2); // This should console log "Hello" two times


// 2) Complete the recursive function below so that it returns one of three things:
//    the recursive call, a string saying the favorite ice cream was found, and a
//    a string saying the favorite ice cream was NOT found.
//
//    Note 1: I've marked below the three spots where returns should go. They are not
//            necessarily in the order specified above; therefore, Return A is not
//            necessarily where you would put the recursive call, Return B is not
//            necessarily where you would put the string saying the favorite icecream
//            was found, and so forth.
//
//    Note 2: It is up to you to determine the correct place to put each return thing
//            specified above in problem (2)
//
//    Note 3: Remember that if the condition in which it calls itself stays the same,
//            an infinite loop will occur if that condition always evaluates to true.
//            Think about how the recursion works in problem 1 without looping
//            infinitely and if you can do a similar thing in this case. Would you do
//            something similar in area A, B, or C?
function searchStoresForFavoriteIcecream(favoriteIcecream, numberOfStoresToCheck)
{
    if (numberOfStoresToCheck > 0)
    {
        const icecreamFlavorAtThisStore = getIcecreamInStock();

        if (icecreamFlavorAtThisStore === favoriteIcecream)
        {
            // Return A
        }
        else 
        {
            // Return B
        }
    }
    else
    {
        // Return C
    }
}

// This should either say the ice cream was or wasn't found
let searchResultString = searchStoresForFavoriteIcecream('chocolate', 5);
console.log(`Search Result: ${searchResultString}`);
