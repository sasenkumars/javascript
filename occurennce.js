function getOccurrence (str) {
    const splitStr = str.split('');
    const occurrenceObj = {};

    splitStr.map(item => {
        if (occurrenceObj[item]) {
            occurrenceObj[item] += 1;
        }
        else{
            occurrenceObj[item] = 1;
        }
    })

    for (let [value, index] of Object.entries(occurrenceObj)){
        console.log(`${value} occurring ${occurrenceObj[value]} times`);
    }
}

getOccurrence("OCCURRENCE")
