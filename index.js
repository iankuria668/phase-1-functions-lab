const Destination = 42
let startingLocation;
function distanceFromHqInBlocks(startingLocation, destination)
{
    const blocks = Math.abs(Destination -startingLocation);
    return blocks;
}

function  distanceFromHqInFeet(startingLocation, destination)
{
    let feet;
    feet = distanceFromHqInBlocks(startingLocation) * 264;
    return feet
}

let currentLocation;
let feet;
function distanceTravelledInFeet(startingLocation, currentLocation)
{
    feet = Math.abs(currentLocation - startingLocation) * 264;
    return feet
}
let fare;
function calculatesFarePrice(currentLocation, startingLocation)
{
    if (distanceTravelledInFeet(startingLocation, currentLocation) <= 400) {
        fare = 0;
        return fare;
    } else if (distanceTravelledInFeet(startingLocation, currentLocation) > 400 &&  distanceTravelledInFeet(startingLocation, currentLocation) < 2000){
        fare = 0.02 * (distanceTravelledInFeet(startingLocation, currentLocation) - 400);
        return fare
    } else if (distanceTravelledInFeet(startingLocation, currentLocation) > 2000 &&  distanceTravelledInFeet(startingLocation, currentLocation) < 2500){
        fare = 25;
        return fare
    } else 
    {
        return 'cannot travel that far';
    }
}
