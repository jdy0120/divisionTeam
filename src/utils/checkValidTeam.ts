import { UserInfo } from '../../types/type';

// 한팀에 중복된 라인
export const overlapPosition = (userInfoList:UserInfo[]):boolean => {

    const teamOne = userInfoList.filter((el) => {
        if (el.team === 1 && el.position !== 'None') {
            return true
        }
    }).map((el) => {
        return el.position
    })

    const setTeamOne = new Set(teamOne)
    if (teamOne.length !== setTeamOne.size) {
        return false
    }

    const teamTwo =  userInfoList.filter((el) => {
        if (el.team === 2 && el.position !== 'None') {
            return true
        }
    }).map((el) => {
        return el.position
    })
    
    const setTeamTwo = new Set(teamTwo)
    if (teamTwo.length !== setTeamTwo.size ) {
        return false
    }

    return true
}
// team인원 초과
export const excessPersonnel = (userInfoList:UserInfo[]):boolean => {
    const teamOne = userInfoList.filter((el) => {
        if (el.team === 1) {
            return true
        }
    })
    
    if (teamOne.length > userInfoList.length/2) {
        return false
    }

    const teamTwo =  userInfoList.filter((el) => {
        if (el.team === 2) {
            return true
        }
    })

    if (teamTwo.length > userInfoList.length/2) {
        return false
    }

    return true
}

export const checkValidTeam = (userInfoList:UserInfo[]) => {
    if (! overlapPosition(userInfoList)) {
        throw new Error('overlapPosition')
    }
    if (! excessPersonnel(userInfoList)) {
        throw new Error('excessPersonnel')
    }
}