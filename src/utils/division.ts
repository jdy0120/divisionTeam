import { UserInfo } from "../../types/type"

type DivedTeam = {
    redTeam: UserInfo[],
    blueTeam: UserInfo[]
}

interface UserInfoIDX extends UserInfo {
    idx:number
}

const makeBitMaskDivision = (userInfoList: UserInfoIDX[]): number => {
    const topUserNoTeam = userInfoList.filter((el) => {
        if (el.team === 0) {
            return true
        }
        return false
    }).sort((a,b) => {
        return b.mmr - a.mmr
    })
    const topUserOneTeam = userInfoList.filter((el) => {
        if (el.team === 1) {
            return true
        }
    }).sort((a,b) => {
        return b.mmr - a.mmr
    })
    const topUserTwoTeam = userInfoList.filter((el) => {
        if (el.team === 2) {
            return true
        }
    }).sort((a,b) => {
        return b.mmr - a.mmr
    })

    
    let allTopUser = []
    if (topUserTwoTeam[0]) {
        allTopUser.push(topUserTwoTeam[0])
    }
    if (topUserOneTeam[0]) {
        allTopUser.push(topUserOneTeam[0])
    }
    if (topUserNoTeam[0]) {
        allTopUser.push( ...topUserNoTeam )
    }
    if (allTopUser.length < 2) {
        return 0
    } else {
        let needDivBitMask = 0
        for (let i = 0 ; i < 2 ; i++) {
            needDivBitMask |= allTopUser[i].idx
        }
        return needDivBitMask
    }
}

const divisionPosition = (userInfoList:UserInfo[], teamBitMask:number) => {
    const userInfoListWithIdx:UserInfoIDX[] = userInfoList.map((el,idx) => {
        return {
            idx:idx,
            ...el,
        }
    })

    const topUser = userInfoListWithIdx.filter((el) => {
        if (el.position === 'Top') return true
    })

    const jugUser = userInfoListWithIdx.filter((el) => {
        if (el.position === 'Junggle') return true
    })

    const midUser = userInfoListWithIdx.filter((el) => {
        if (el.position === 'Mid') return true
    })

    const adcUser = userInfoListWithIdx.filter((el) => {
        if (el.position === 'ADC') return true
    })

    const supUser = userInfoListWithIdx.filter((el) => {
        if (el.position === 'Support') return true
    })

    if (topUser.length >= 2) {
        if (teamBitMask && makeBitMaskDivision(topUser)) {
            return false
        }
    }
    if (jugUser.length >= 2) {
        if (teamBitMask && makeBitMaskDivision(jugUser)) {
            return false
        }
    }
    if (midUser.length >= 2) {
        if (teamBitMask && makeBitMaskDivision(midUser)) {
            return false
        }
    }
    if (adcUser.length >= 2) {
        if (teamBitMask && makeBitMaskDivision(adcUser)) {
            return false
        }
    }
    if (supUser.length >= 2) {
        if (teamBitMask && makeBitMaskDivision(supUser)) {
            return false
        }
    }
    return true
}

export const divisionTeam= (userList: UserInfo[]): DivedTeam => {
    let teamBitMask = -1
    let diff = -1

    let teamOneBitMask = 0
    let teamTwoBitMask = 0
    for (let i = 0 ; i < userList.length; i++) {
        if (userList[i].team === 1) {
            teamOneBitMask |= (1 << i)
        } else if (userList[i].team === 2) {
            teamTwoBitMask |= (1 << i)
        }
    }

    console.log('team >>>', teamOneBitMask,teamTwoBitMask)

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

        if ((i&teamOneBitMask) || (i&teamTwoBitMask)){
            continue
        }

        if (!divisionPosition(userList,i)) continue

        const teamDiff = teamOneMMR-teamTwoMMR
        
        if (diff === -1 || Math.abs(diff) > Math.abs(teamDiff)) {
            console.log(teamDiff,i)
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
