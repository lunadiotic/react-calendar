import React from 'react';

const Sidebar = (props) => {
    return (
        <div className='col-3'>
            <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button">
                    Create New Event
                </button>
            </div>
            <div className="m-t-20">
                <br />
                <div className="my-1 p-2 bg-primary">
                    Watch Movies
                </div>
                <div className="my-1 p-2 bg-success">
                    Learn
                </div>
                <div className="my-1 p-2 bg-danger">
                    Hangout
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
