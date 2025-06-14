import type { ResumeDataType } from './ResumeDataType';

export default interface ResumeContextType {
  resume: ResumeDataType;
  setResume: React.Dispatch<React.SetStateAction<ResumeDataType>>;
}
