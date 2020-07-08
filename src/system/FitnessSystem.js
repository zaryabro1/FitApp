  import AsyncStorage from '@react-native-community/async-storage';
  import FullBodyBeginner1Data from '../data/fullBody/BeginnerOneData';
  import FullBodyBeginner2Data from '../data/fullBody/BeginnerTwoData';
  import FullBodyIntermediate1Data from '../data/fullBody/IntermediateOneData';
  import FullBodyIntermediate2Data from '../data/fullBody/IntermediateTwoData';
  import FullBodyProfessional1Data from '../data/fullBody/ProfessionalOneData';
  import FullBodyProfessional2Data from '../data/fullBody/ProfessionalTwoData';

  import AbsBeginner1Data from '../data/abs/BeginnerOneData';
  import AbsBeginner2Data from '../data/abs/BeginnerTwoData';
  import AbsIntermediate1Data from '../data/abs/IntermediateOneData';
  import AbsIntermediate2Data from '../data/abs/IntermediateTwoData';
  import AbsProfessional1Data from '../data/abs/ProfessionalOneData';
  import AbsProfessional2Data from '../data/abs/ProfessionalTwoData';

  import ButtBeginner1Data from '../data/butt/BeginnerOneData';
  import ButtBeginner2Data from '../data/butt/BeginnerTwoData';
  import ButtIntermediate1Data from '../data/butt/IntermediateOneData';
  import ButtIntermediate2Data from '../data/butt/IntermediateTwoData';
  import ButtProfessional1Data from '../data/butt/ProfessionalOneData';
  import ButtProfessional2Data from '../data/butt/ProfessionalTwoData';

  import ArmsBeginner1Data from '../data/arm/BeginnerOneData';
  import ArmsBeginner2Data from '../data/arm/BeginnerTwoData';
  import ArmsIntermediate1Data from '../data/arm/IntermediateOneData';
  import ArmsIntermediate2Data from '../data/arm/IntermediateTwoData';
  import ArmsProfessional1Data from '../data/arm/ProfessionalOneData';
  import ArmsProfessional2Data from '../data/arm/ProfessionalTwoData';

  import LegsBeginner1Data from '../data/legs/BeginnerOneData';
  import LegsBeginner2Data from '../data/legs/BeginnerTwoData';
  import LegsIntermediate1Data from '../data/legs/IntermediateOneData';
  import LegsIntermediate2Data from '../data/legs/IntermediateTwoData';
  import LegsProfessional1Data from '../data/legs/ProfessionalOneData';
  import LegsProfessional2Data from '../data/legs/ProfessionalTwoData';

  const STORAGE_KEY = 'fitness-system';

  const WORKOUT_TYPE = {
    fullBody: 'FULL BODY WORKOUT',
    abs: 'ABS WORKOUT',
    butt: 'BUTT WORKOUT',
    arms: 'ARM WORKOUT',
    legs: 'LEG WORKOUT',
  };

  const CHALLENGE_LEVEL = {
    beginner1: 'Beginner 1',
    beginner2: 'Beginner 2',
    intermediate1: 'Intermediate 1',
    intermediate2: 'Intermediate 2',
    professional1: 'Professional 1',
    professional2: 'Professional 2',
  };

  const ChallengeLevel = {};
  ChallengeLevel[CHALLENGE_LEVEL.beginner1] = [...Array(30)].fill(false);
  ChallengeLevel[CHALLENGE_LEVEL.beginner2] = [...Array(30)].fill(false);
  ChallengeLevel[CHALLENGE_LEVEL.intermediate1] = [...Array(30)].fill(false);
  ChallengeLevel[CHALLENGE_LEVEL.intermediate2] = [...Array(30)].fill(false);
  ChallengeLevel[CHALLENGE_LEVEL.professional1] = [...Array(30)].fill(false);
  ChallengeLevel[CHALLENGE_LEVEL.professional2] = [...Array(30)].fill(false);

  const FitnessSystem = {};
  FitnessSystem[WORKOUT_TYPE.fullBody] = {...ChallengeLevel};
  FitnessSystem[WORKOUT_TYPE.fullBody][CHALLENGE_LEVEL.beginner1] = [
    ...FullBodyBeginner1Data,
  ];
  FitnessSystem[WORKOUT_TYPE.fullBody][CHALLENGE_LEVEL.beginner2] = [
    ...FullBodyBeginner2Data,
  ];
  FitnessSystem[WORKOUT_TYPE.fullBody][CHALLENGE_LEVEL.intermediate1] = [
    ...FullBodyIntermediate1Data,
  ];
  FitnessSystem[WORKOUT_TYPE.fullBody][CHALLENGE_LEVEL.intermediate2] = [
    ...FullBodyIntermediate2Data,
  ];
  FitnessSystem[WORKOUT_TYPE.fullBody][CHALLENGE_LEVEL.professional1] = [
    ...FullBodyProfessional1Data,
  ];
  FitnessSystem[WORKOUT_TYPE.fullBody][CHALLENGE_LEVEL.professional2] = [
    ...FullBodyProfessional2Data,
  ];

  FitnessSystem[WORKOUT_TYPE.abs] = {...ChallengeLevel};
  FitnessSystem[WORKOUT_TYPE.abs][CHALLENGE_LEVEL.beginner1] = [
    ...AbsBeginner1Data,
  ];
  FitnessSystem[WORKOUT_TYPE.abs][CHALLENGE_LEVEL.beginner2] = [
    ...AbsBeginner2Data,
  ];
  FitnessSystem[WORKOUT_TYPE.abs][CHALLENGE_LEVEL.intermediate1] = [
    ...AbsIntermediate1Data,
  ];
  FitnessSystem[WORKOUT_TYPE.abs][CHALLENGE_LEVEL.intermediate2] = [
    ...AbsIntermediate2Data,
  ];
  FitnessSystem[WORKOUT_TYPE.abs][CHALLENGE_LEVEL.professional1] = [
    ...AbsProfessional1Data,
  ];
  FitnessSystem[WORKOUT_TYPE.abs][CHALLENGE_LEVEL.professional2] = [
    ...AbsProfessional2Data,
  ];

  FitnessSystem[WORKOUT_TYPE.butt] = {...ChallengeLevel};
  FitnessSystem[WORKOUT_TYPE.butt][CHALLENGE_LEVEL.beginner1] = [
    ...ButtBeginner1Data,
  ];
  FitnessSystem[WORKOUT_TYPE.butt][CHALLENGE_LEVEL.beginner2] = [
    ...ButtBeginner2Data,
  ];
  FitnessSystem[WORKOUT_TYPE.butt][CHALLENGE_LEVEL.intermediate1] = [
    ...ButtIntermediate1Data,
  ];
  FitnessSystem[WORKOUT_TYPE.butt][CHALLENGE_LEVEL.intermediate2] = [
    ...ButtIntermediate2Data,
  ];
  FitnessSystem[WORKOUT_TYPE.butt][CHALLENGE_LEVEL.professional1] = [
    ...ButtProfessional1Data,
  ];
  FitnessSystem[WORKOUT_TYPE.butt][CHALLENGE_LEVEL.professional2] = [
    ...ButtProfessional2Data,
  ];

  FitnessSystem[WORKOUT_TYPE.arms] = {...ChallengeLevel};
  FitnessSystem[WORKOUT_TYPE.arms][CHALLENGE_LEVEL.beginner1] = [
    ...ArmsBeginner1Data,
  ];
  FitnessSystem[WORKOUT_TYPE.arms][CHALLENGE_LEVEL.beginner2] = [
    ...ArmsBeginner2Data,
  ];
  FitnessSystem[WORKOUT_TYPE.arms][CHALLENGE_LEVEL.intermediate1] = [
    ...ArmsIntermediate1Data,
  ];
  FitnessSystem[WORKOUT_TYPE.arms][CHALLENGE_LEVEL.intermediate2] = [
    ...ArmsIntermediate2Data,
  ];
  FitnessSystem[WORKOUT_TYPE.arms][CHALLENGE_LEVEL.professional1] = [
    ...ArmsProfessional1Data,
  ];
  FitnessSystem[WORKOUT_TYPE.arms][CHALLENGE_LEVEL.professional2] = [
    ...ArmsProfessional2Data,
  ];

  FitnessSystem[WORKOUT_TYPE.legs] = {...ChallengeLevel};
  FitnessSystem[WORKOUT_TYPE.legs][CHALLENGE_LEVEL.beginner1] = [
    ...LegsBeginner1Data,
  ];
  FitnessSystem[WORKOUT_TYPE.legs][CHALLENGE_LEVEL.beginner2] = [
    ...LegsBeginner2Data,
  ];
  FitnessSystem[WORKOUT_TYPE.legs][CHALLENGE_LEVEL.intermediate1] = [
    ...LegsIntermediate1Data,
  ];
  FitnessSystem[WORKOUT_TYPE.legs][CHALLENGE_LEVEL.intermediate2] = [
    ...LegsIntermediate2Data,
  ];
  FitnessSystem[WORKOUT_TYPE.legs][CHALLENGE_LEVEL.professional1] = [
    ...LegsProfessional1Data,
  ];
  FitnessSystem[WORKOUT_TYPE.legs][CHALLENGE_LEVEL.professional2] = [
    ...LegsProfessional2Data,
  ];

  // ---- METHODS -----

  const InitializeFitnessSystem = async () => {
    // await AsyncStorage.clear();
    let data = await AsyncStorage.getItem(STORAGE_KEY);
    if (!data) {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(FitnessSystem));
      data = FitnessSystem;
    } else {
      data = JSON.parse(data);
    }
    return data;
  };

  const GetFitnessByTypeAndChallenge = async (type, challengeLevel) => {
    let data = await AsyncStorage.getItem(STORAGE_KEY);
    data = JSON.parse(data);
    // console.log(data)
    return data[type][challengeLevel];
  };

  const GetFitnessStatus = async (type, challengeLevel, day) => {
    let data = await AsyncStorage.getItem(STORAGE_KEY);
    data = JSON.parse(data);
    return data[type][challengeLevel][day];
  };

  const SetFitnessStatusTrue = async (type, challengeLevel, day) => {
    let data = await AsyncStorage.getItem(STORAGE_KEY);
    data = JSON.parse(data);
    data[type][challengeLevel][day].done = true;
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  // ---- EXPORTS ----

  export {
    InitializeFitnessSystem,
    GetFitnessByTypeAndChallenge,
    GetFitnessStatus,
    SetFitnessStatusTrue,
    CHALLENGE_LEVEL,
    WORKOUT_TYPE,
  };
