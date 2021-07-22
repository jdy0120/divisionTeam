import { UserInfo } from "../../types/type"

type DivedTeam = {
    redTeam: UserInfo[],
    blueTeam: UserInfo[]
}

interface UserInfoIDX extends UserInfo {
    idx:number
}

const makeBitMaskDivision = (userInfoList: UserInfoIDX[], teamBitMask:number): boolean => {
    const userNoTeam = userInfoList.filter((el) => {
        if (el.team === 0) {
            return true
        }
        return false
    }).sort((a,b) => {
        return b.mmr - a.mmr
    })

    const userOneTeam = userInfoList.filter((el) => {
        if (el.team === 1) {
            return true
        }
        return false
    }).sort((a,b) => {
        return b.mmr - a.mmr
    })

    const userTwoTeam = userInfoList.filter((el) => {
        if (el.team === 2) {
            return true
        }
        return false
    }).sort((a,b) => {
        return b.mmr - a.mmr
    })

    let allUser = []
    if (userTwoTeam[0]) {
        allUser.push(userTwoTeam[0])
    }
    if (userOneTeam[0]) {
        allUser.push(userOneTeam[0])
    }
    if (userNoTeam[0]) {
        allUser.push( ...userNoTeam )
    }

    if (allUser.length < 2) {
        return true
    } else {
        let splitedIdx = allUser.splice(0,2)
        const one = splitedIdx[0].idx
        const two = splitedIdx[1].idx
        
        const compareOne = teamBitMask & (1<<one)
        const compareTwo = teamBitMask & (1<<two)

        if (compareOne && compareTwo) {
            return false
        }
        if (compareOne === 0 && compareTwo === 0) {
            return false
        }
        return true
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
        return false
    })

    const jugUser = userInfoListWithIdx.filter((el) => {
        if (el.position === 'Junggle') return true
        return false
    })

    const midUser = userInfoListWithIdx.filter((el) => {
        if (el.position === 'Mid') return true
        return false
    })

    const adcUser = userInfoListWithIdx.filter((el) => {
        if (el.position === 'ADC') return true
        return false
    })

    const supUser = userInfoListWithIdx.filter((el) => {
        if (el.position === 'Support') return true
        return false
    })

    if (topUser.length >= 2) {
        if (!makeBitMaskDivision(topUser,teamBitMask)) {
            
            return false
        }
    }
    if (jugUser.length >= 2) {
        if (!makeBitMaskDivision(jugUser,teamBitMask)) {
            return false
        }
    }
    if (midUser.length >= 2) {
        if (!makeBitMaskDivision(midUser,teamBitMask)) {
            return false
        }
    }
    if (adcUser.length >= 2) {
        if (!makeBitMaskDivision(adcUser,teamBitMask)) {
            return false
        }
    }
    if (supUser.length >= 2) {
        if (!makeBitMaskDivision(supUser,teamBitMask)) {
            return false
        }
    }
    return true
}

const checkSelectedTeam = (userListLength:number, i:number,teamOne:number,teamTwo:number) => {

    const reverseI = (1<<userListLength)-1-i

    if ((i&teamOne) === teamOne && (reverseI&teamTwo) === teamTwo) {
        return false
    }

    if ((reverseI&teamOne) === teamOne && (i&teamTwo) === teamTwo) {
        return false
    }

    return true
}

export const divisionTeam= (userList: UserInfo[]): DivedTeam => {
    let teamBitMask = -1
    let diff = -1
    const userListLength = userList.length

    let teamOneBitMask = 0
    let teamTwoBitMask = 0
    for (let i = 0 ; i < userListLength; i++) {
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

        if (!divisionPosition(userList,i)) continue

        if (checkSelectedTeam(userListLength,i,teamOneBitMask,teamTwoBitMask)) continue

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
