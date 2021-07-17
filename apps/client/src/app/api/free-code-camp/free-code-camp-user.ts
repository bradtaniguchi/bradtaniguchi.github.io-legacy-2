export interface FreeCodeCampUser {
  about: string;
  completedChallenges: Array<{
    completedDate: number;
    id: string;
    // **note** not defining type as it wont be used.
    files: Array<unknown>;
  }>;
  githubProfile: string;
  isApisMicroservicesCert: boolean;
  isBackEndCert: boolean;
  isCheater: boolean;
  isDonating: null;
  is2018DataVisCert: boolean;
  isDataVisCert: boolean;
  isFrontEndCert: boolean;
  isFullStackCert: boolean;
  isFrontEndLibsCert: boolean;
  isHonest: boolean;
  isInfosecQaCert: boolean;
  isQaCertV7: boolean;
  isInfosecCertV7: boolean;
  isJsAlgoDataStructCert: boolean;
  isRespWebDesignCert: boolean;
  isSciCompPyCertV7: boolean;
  isDataAnalysisPyCertV7: boolean;
  isMachineLearningPyCertV7: boolean;
  linkedin: '';
  location: null;
  name: 'Brad';
  portfolio: [];
  profileUI: {
    isLocked: boolean;
    showAbout: boolean;
    showCerts: boolean;
    showHeatMap: boolean;
    showLocation: boolean;
    showName: boolean;
    showPoints: boolean;
    showPortfolio: boolean;
    showTimeLine: boolean;
  };
  twitter: '';
  username: 'bradtaniguchi';
  website: '';
  yearsTopContributor: ['2019', '2020'];
  isGithub: boolean;
  isLinkedIn: boolean;
  isTwitter: boolean;
  isWebsite: boolean;
  points: 672;
  calendar: {
    [key: string]: number;
  };
  streak: { longest: 7; current: 0 };
  picture: 'https://avatars3.githubusercontent.com/u/10079147?v=4';
  joinDate: '2017-06-11T18:08:39.000Z';
}
