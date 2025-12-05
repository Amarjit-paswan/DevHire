import React, { useContext, useEffect } from 'react';
import JobForm from './JobForm';
import { useParams } from 'react-router-dom';
import { JobContext } from '../../context/JobContext';
import JobRecommended from './JobRecommended';
import { selectedJob_detail } from '../../api/skillApi';

function JobDetail() {

  const { selectedJob, setSelectedJob } = useContext(JobContext);

  const { id } = useParams();

  // Fetch job details on refresh or URL change
  useEffect(() => {
    selectedJob_detail(id)
      .then((data) => {
        setSelectedJob(data.job); // FIXED
      })
      .catch((err) => console.log(err));
  }, [id]); // FIXED dependency

  return (
    <div className="d-flex justify-content-between align-items-start gap-4 w-100">

      {/* Job Details */}
      <div className="selected_job_details text-start w-100 p-3">

        <h1>{selectedJob.title}</h1>
        <p className="text-secondary">{selectedJob.company}</p>

        <div className="d-flex align-items-center gap-2">
          <div className="box btn btn-jobType">{selectedJob.job_type}</div>
          <p className="m-0 fw-bold">${selectedJob.salary} per year</p>
        </div>

        <div className="job_description my-4">
          <h3>Job Description</h3>
          <p className="text-secondary">{selectedJob.description}</p>
        </div>

        {/* Skills */}
        <div className="skills mt-2 d-flex gap-2">
          {selectedJob.job_with_skill &&
            selectedJob.job_with_skill.map((skill) => (
              <div key={skill.id} className="skill btn btn-skill">
                {skill.name}
              </div>
            ))}
        </div>

        <JobForm />

        <div className="w-75 d-grid mt-3">
          <button
            type="button"
            className="btn btn-lg btn-danger w-50"
            data-bs-toggle="modal"
            data-bs-target="#ApplyJobModal"
          >
            Apply Job
          </button>
        </div>
      </div>

      {/* Recommended Jobs */}
      <div className="recommanded_jobs_container p-3 border w-50 rounded border-danger">
        <div className="title">
          <h4 className="text-danger">Recommended Jobs</h4>
        </div>

        <div className="d-flex flex-column gap-3 mt-3">
          <JobRecommended />
          <JobRecommended />
          <JobRecommended />
        </div>
      </div>

    </div>
  );
}

export default JobDetail;
