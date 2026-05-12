import React from 'react';

const page = () => {
    return (
        <div className='px-10 md:px-30 lg:px-50 py-10'>
            <div className='space-y-8'>
                <h1 className='text-4xl font-bold'>Timeline</h1>

                <label className="select">
                    <span className="label">Filter Timeline</span>
                    <select>
                        <option>All</option>
                        <option>Audio Call</option>
                        <option>Text</option>
                        <option>Video Call</option>
                    </select>
                </label>
            </div>
            <div>
                
            </div>

        </div>
    );
};

export default page;