let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// YOUR CODE BELOW


function attendanceCheck(day) {
    let attendance = [];

    for (let i=0; i<classRoom.length; i++) {
        let name = Object.keys(classRoom[i])[0];

        for (let j=0; j<classRoom[i][name].length; j++) {
            if (Object.keys(classRoom[i][name][j])[0] === day) {
                if (classRoom[i][name][j][day] === true) {
                    attendance.push(name);
                }
            }
        }
        
        if (classRoom[i][name][day] === true) {
            attendance.push(name);
        }
    }
    console.log(attendance);
    return attendance;
    
}

attendanceCheck('Monday'); // => ['Marnie', 'Shoshanna']
attendanceCheck('Wednesday'); // => ['Marnie', 'Lena']