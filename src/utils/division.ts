import { UserInfo } from "../../types/type"

type DivedTeam = {
    redTeam: UserInfo[],
    blueTeam: UserInfo[]
}

export const divisionTeam= (userList: UserInfo[]): DivedTeam => {
    let teamBitMask = -1
    let diff = -1
    for (let i = 0; i < (1<<userList.length); i++) {
        let teamOneMMR = 0
        let teamTwoMMR = 0
        let count = 0
        for (let k = 0; k < userList.length; k++) {
            if (((1 << k) & i )) {
                count += 1
                teamOneMMR += userList[k].mmr
            } else {
                teamTwoMMR += userList[k].mmr
            }
        }
        if (userList.length/2 !== count) {
            continue
        }
        const teamDiff = teamOneMMR-teamTwoMMR
        if (diff === -1 || Math.abs(diff) > Math.abs(teamDiff)) {
            diff = teamDiff
            teamBitMask = i
        }
    }
    
    const teamOne = userList.filter((element,index) => {
        if (teamBitMask & (1<<index)) {
            return true
        } else {
            return false
        }
    })
    const teamTwo = userList.filter((element,index) => {
        if (teamBitMask & (1<<index)) {
            return false
        } else {
            return true
        }
    })

    if (diff >= 0) {
        return {
            redTeam: teamOne,
            blueTeam: teamTwo,
        }
    } else {
        return {
            redTeam: teamTwo,
            blueTeam: teamOne,
        }
    }
}
