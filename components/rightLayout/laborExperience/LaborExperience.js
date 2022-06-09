
import JobExperience from './jobExperience/JobExperience';

const LaborExperience = ({ laborExperienceInfo }) => {
    return (
        <div className="row px-5">
            <h2>{laborExperienceInfo.title}</h2>
            {laborExperienceInfo.jobs?.map(job => (
                <JobExperience key={job.company} job={job} />
            ))}
        </div>
    );
}
export default LaborExperience;