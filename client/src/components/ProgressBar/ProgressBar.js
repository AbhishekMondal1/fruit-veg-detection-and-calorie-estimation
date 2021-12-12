import React from 'react'
import "./progressBar.css"

const ProgressBar = ({ progressPercent }) => {
console.log(progressPercent);
    return (
      <div>
        <h4>Progress: {progressPercent} %</h4>
        <div className="progress">
          <span
            className="progress-bar"
            style={{ width: `${progressPercent}%` }}
          ></span>
        </div>
      </div>
    );
}

export default ProgressBar
