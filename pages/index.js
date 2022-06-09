import Head from 'next/head';
import LeftLayout from '../components/leftLayout/LeftLayout';
import InformationList from '../components/leftLayout/informationList/InformationList';
import SkillsList from '../components/leftLayout/skillsList/SkillsList';
import LanguagesList from '../components/leftLayout/languagesList/LanguagesList';
import RightLayout from '../components/rightLayout/RightLayout';
import Introduction from '../components/rightLayout/introduction/Introduction';
import LaborExperience from '../components/rightLayout/laborExperience/LaborExperience';
import Education from '../components/rightLayout/education/Education';
import { getInformationData } from '../lib/information';
import { getElementFromDataInformation } from '../utils/utils';
import {
  EDUCATION_INFO_KEY,
  INTRODUCTION_INFO_KEY,
  LABOR_EXPERIENCE_INFO_KEY,
  SITE_TITLE
} from '../constants/constants';


export default function Home({ allInformationData }) {
  const introductionInfo =
    getElementFromDataInformation(allInformationData, INTRODUCTION_INFO_KEY);
  const laborExperienceInfo =
    getElementFromDataInformation(allInformationData, LABOR_EXPERIENCE_INFO_KEY);
  const educationInfo =
    getElementFromDataInformation(allInformationData, EDUCATION_INFO_KEY);
  return (
    <div className='row'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{SITE_TITLE}</title>
      </Head>
      <LeftLayout home>
        <InformationList />
        <SkillsList />
        <LanguagesList />
      </LeftLayout>
      <RightLayout>
        <Introduction introductionInfo={introductionInfo} />
        <LaborExperience laborExperienceInfo={laborExperienceInfo} />
        <Education educationInfo={educationInfo} />
      </RightLayout>
    </div>
  );
}

export async function getStaticProps() {
  const allInformationData = getInformationData();
  return {
    props: {
      allInformationData,
    },
  };
}