import {
    SET_FILTER
} from '../actions/actions';

const initState = {
    filters: {
        typesFilter: {
            programming: false,
            machineLearning: false,
            analytics: false,
            marketing: false,
            design: false,
            management: false,
        },
        outputKnowledgeFilter: {
            junior: false,
            middle: false,
            middlePlus: false
        },
        learningType: {
            Profession: false,
            course: false
        },
        onlinePlatforms: {
            skillBox: false,
            geekBrains: false,
            hacklet: false,
            stepik: false,
            udemy: false
        },
        Installment: {
            exist: false
        }
    }
};

const reducer = (state = initState, {type, payload}) => {
    switch (type) {
        case SET_FILTER:
            return {
                ...state,
                filters:payload
            }
        default:
            return state
    }
};
export default reducer