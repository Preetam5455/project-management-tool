import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchprojectData } from '../../reduxStore/dataSlices/projectDataSlice';
import './TableView.css'

function TableProjectView() {
    const dispatch = useDispatch();
    const [openProject, setOpenAccordion] = useState(true)

    const { data, status, error, } = useSelector((state) => state.projectData)

    useEffect(() => {
        dispatch((fetchprojectData()))
    }, [dispatch])


    const onAccordionBtnClick = () => {
        setOpenAccordion(prevState => !prevState)
    }

    return (
        <>
            <div className={`accordion-title ${openProject ? '' : 'closed-accordion'}`} onClick={onAccordionBtnClick}>All Projects{openProject ? <img className="reviewer-avatar" src="./assets/downArrow.svg" alt="Reviewer" /> : <img className="reviewer-avatar" src="./assets/rightArrow.svg" alt="Reviewer" />}</div>
            {openProject ? (<div className="Kanban-main-container">
                {status === 'loading' && <p>Loading...</p>}
                {status === 'failed' && <p>Error: {error}</p>}
                {status === 'succeeded' && (
                    <div className="Kanban-project-grid">
                        <table className="Kanban-project-table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th><div className='table-head-icon-heading-wrapper'><img className="reviewer-avatar" src="./assets/folder.svg" alt="Reviewer" /><span>Project Name</span></div></th>
                                    <th>%</th>
                                    <th><div className='table-head-icon-heading-wrapper'><img className="reviewer-avatar" src="./assets/owner.svg" alt="Reviewer" /><span>Owner</span></div></th>
                                    <th><div className='table-head-icon-heading-wrapper'><img className="reviewer-avatar" src="./assets/task.svg" alt="Reviewer" /><span>Tasks</span></div></th>
                                    <th><div className='table-head-icon-heading-wrapper'><img className="reviewer-avatar" src="./assets/status.svg" alt="Reviewer" /><span>Status</span></div></th>
                                    <th><div className='table-head-icon-heading-wrapper'><img className="reviewer-avatar" src="./assets/calander.svg" alt="Reviewer" /><span>Start Date</span></div></th>
                                    <th><div className='table-head-icon-heading-wrapper'><img className="reviewer-avatar" src="./assets/calander.svg" alt="Reviewer" /><span>End Date</span></div></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.projectNameContent}</td>
                                        <td><span className="progress-percentage-table">{item.taskProgress}%</span></td>
                                        <td>
                                            <div className="reviewer-info-table">
                                                <img className="reviewer-avatar" src={item.reviewrsAvatar} alt="Reviewer" />
                                                <span className="reviewer-count">{item.projectOwnerName}</span>

                                            </div>
                                        </td>
                                        <td>
                                            <div className="task-progress">
                                                <span className="completed-tasks">{item.completedTasks}</span>
                                                <div className="progress-container">
                                                    <progress value={item.taskProgress} max="100"></progress>
                                                    <span className="progress-percentage-table-Status">{item.taskProgress}%</span>
                                                </div>
                                                <span className="total-tasks">{item.totalTasks}</span>
                                            </div>
                                        </td>
                                        <td className={`project-status ${item.started ? 'in-progress ' : ''}${item.started && item.completed ? 'completed ' : ''}${item.archived ? 'archived' : ''}`}>{item.status}</td>
                                        <td>{item.startDate}</td>
                                        <td>{item.endDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>) : ''}
        </>
    )
}

export default TableProjectView