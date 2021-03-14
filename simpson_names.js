// https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript

//Given: an array containing hashes of names
//Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

listss = [{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]



const list = (names) => {

    if (names.length === 0){
        return ''
    }

    else if (names.length === 1) {
        console.log("this", names[0].name)
        return names[0].name
    }

    else if (names.length === 2) {
        console.log(`${names[0].name} & ${names[1].name}`)
        let end = `${names[0].name} & ${names[1].name}`
        console.log(end, "THISSS")
        return end

    }


    else if (names.length >= 2) {

        newlist = names.map((a) => a.name)
        let listA = newlist.slice(0, names.length - 1)
        let last = newlist[newlist.length - 1]
        let finA = listA.join(", ")
        let fin = finA + " & " + last
        console.log(fin)
    }

}

list(listss)


