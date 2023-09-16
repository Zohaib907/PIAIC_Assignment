// Q20.Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
const mountainList: string[] = ["Mount Everest", "K2", "Matterhorn", "Mount Kilimanjaro", "Denali", "Mount Fuji", "The Andes", "The Rocky Mountains", "The Alps"];
console.log("Mountains:");
for(let i =0; i< mountainList.length; i++){
    console.log(mountainList[i]);
}