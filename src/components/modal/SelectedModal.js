import React from 'react'

const SelectedModal = () => {
  return (
    <div className="modal" tabIndex="-1" id="select-event">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Event</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body p-3">
            
          </div>
          <div className="modal-footer d-flex justify-content-evenly">
            <button 
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#edit-event"
              >Edit Event</button>
            <span className='text-white'>Or</span>
            <button className="btn btn-danger" data-bs-dismiss="modal">Delete Event</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectedModal