import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchprojectData } from '../../reduxStore/dataSlices/projectDataSlice';
import './KanbanProjectView.css'

function KanbanProjectView() {
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
                        {data.map((item, index) => (
                            <div className="Kanban-project-card" key={index}>
                                <div className="card-top">
                                    <div className="project-info">
                                        <img className="reviewer-avatar" src={item.projectNameIcon} alt="Reviewer" />
                                        <span className="project-name">{item.projectName}</span>
                                    </div>
                                    <div className="project-id">Id: {item.projectId}</div>
                                </div>
                                <div className="card-middle">
                                    <div className="task-progress">
                                        <span className="completed-tasks">{item.completedTasks}</span>
                                        <div className="progress-container">
                                            <progress value="50" max="100"></progress>
                                            <span className="progress-percentage">50%</span>
                                        </div>
                                        <span className="total-tasks">{item.totalTasks}</span>
                                    </div>
                                    <div className="date-range">
                                        <img className="reviewer-avatar" src={item.dateIcon} alt="Reviewer" />
                                        <span>{item.startDate} - {item.endDate}</span>
                                    </div>
                                </div>
                                <div className="card-bottom">
                                    <div className="reviewer-info">
                                        <img className="reviewer-avatar" src={item.reviewrsAvatar} alt="Reviewer" />
                                        <img className="reviewer-avatar" src={item.reviewrsAvatar} alt="Reviewer" />
                                        <img className="reviewer-avatar" src={item.reviewrsAvatar} alt="Reviewer" />

                                        <span className="reviewer-count">{item.reviewrCount}+</span>
                                    </div>
                                    <div className="attachments">
                                        <img className="reviewer-avatar" src={item.fileTitle} alt="Reviewer" />
                                        <span className="reviewer-count">{item.attachedFilesCount} Files</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>) : ''}
        </>
    );
}

export default KanbanProjectView;
