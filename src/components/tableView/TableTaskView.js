import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTaskData } from '../../reduxStore/dataSlices/taskDataSlice';
import './TableView.css'

function TableTaskView() {
    const dispatch = useDispatch();
    const { data, status, error, } = useSelector((state) => state.taskData)

    useEffect(() => {
        dispatch((fetchTaskData()))
    }, [dispatch])

    return (
        <>
        <div className='accordion-title'>All Tasks</div>
        <div className="Kanban-main-container">
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error}</p>}
            {status === 'succeeded' && (
                <div className="Kanban-project-grid">
                <table className="Kanban-project-table">
    <thead>
        <tr>
            <th>Id</th>
            <th><div className='table-head-icon-heading-wrapper'><img className="reviewer-avatar" src="./assets/notificationTable.svg" alt="Reviewer" /><span>Task Name</span></div></th>
            <th><div className='table-head-icon-heading-wrapper'><img className="reviewer-avatar" src="./assets/teamworkTable.svg" alt="Reviewer" /><span>Associated Team</span></div></th>
            <th><div className='table-head-icon-heading-wrapper'><img className="reviewer-avatar" src="./assets/owner.svg" alt="Reviewer" /><span>Owner</span></div></th>
            <th><div className='table-head-icon-heading-wrapper'><img className="reviewer-avatar" src="./assets/status.svg" alt="Reviewer" /><span>Status</span></div></th>
            <th><div className='table-head-icon-heading-wrapper'><img className="reviewer-avatar" src="./assets/calander.svg" alt="Reviewer" /><span>Start Date</span></div></th>
            <th><div className='table-head-icon-heading-wrapper'><img className="reviewer-avatar" src="./assets/calander.svg" alt="Reviewer" /><span>End Date</span></div></th>
            <th><div className='table-head-icon-heading-wrapper'><img className="reviewer-avatar" src="./assets/task.svg" alt="Reviewer" /><span>% Tasks completed</span></div></th>
            <th><div className='table-head-icon-heading-wrapper'><img className="reviewer-avatar" src="./assets/task.svg" alt="Reviewer" /><span>Pirority</span></div></th>

        </tr>
    </thead>
    <tbody>
        {data.map((item, index) => (
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.projectNameContent}</td>
                <td><span className="progress-percentage-table">{item.AssociatedTeam}</span></td>
                <td>
                    <div className="reviewer-info-table">
                        <img className="reviewer-avatar" src={item.reviewrsAvatar} alt="Reviewer" />
                        <span className="reviewer-count">{item.projectOwnerName}</span>
                        
                    </div>
                </td>
                
                <td className={`project-status ${item.started ? 'in-review ' : '' }${item.started && item.completed ? 'delayed ':''}${item.archived ? 'on-Track ' : ''}${item.revision ? 'revision ' : ''}`}>{item.status}</td>
                <td>{item.startDate}</td>
                <td>{item.endDate}</td>
                <td>
                    <div className="task-progress">
                        
                        <div className="progress-container">
                            <progress value={item.taskProgress} max="100"></progress>
                            <span className="progress-percentage-table-Status">{item.taskProgress}%</span>
                        </div>
                    </div>
                </td>
                <td><span className={`pirority ${item.pirority==="High" ? "high" : ''}${item.pirority==="Medium"? "medium":''}${item.pirority==="Low" ? "low":''}${item.pirority === "None" ? "none":''}`}>{item.pirority}</span></td>
            </tr>
        ))}
    </tbody>
</table>
                </div>
            )}
        </div>
        </>
    )
}

export default TableTaskView