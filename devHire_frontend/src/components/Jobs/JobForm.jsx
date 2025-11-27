import React from 'react'

function JobForm() {
  return (
    // Apply form modal box 
    <div class="modal fade" id="ApplyJobModal" tabindex="-1" data-bs-backdrop="static" aria-labelledby="ApplyJobModalLabel" aria-hidden="true" >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Job Form</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            {/* form box for apply job  */}
            <form action="" method="post">
                <div class="modal-body text-start">
                    
                    {/* Name  */}
                    <div className="mb-3">
                        <label htmlFor="" className="form-label fw-bold">Name</label>
                        <input type="text" className="form-control" placeholder='Enter Name' />
                    </div>

                    {/* Email  */}
                    <div className="mb-3">
                        <label htmlFor="" className="form-label fw-bold">Email</label>
                        <input type="text" className="form-control" placeholder='Enter Email' />
                    </div>

                    {/* Phone  */}
                    <div className="mb-3">
                        <label htmlFor="" className="form-label fw-bold">Phone</label>
                        <input type="text" className="form-control" placeholder='Enter Phone' />
                    </div>
                </div>
                <div class="p-3 pt-0">
                    <div className="d-grid">
                        <button type="button" class="btn btn-danger">Submit</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default JobForm