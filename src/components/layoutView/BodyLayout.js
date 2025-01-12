import React, { useState } from 'react'
import './BodyLayout.css'
import KanbanProjectView from '../kanbanView/KanbanProjectView'
import TableView from '../tableView/TableView'
import TableTaskView from '../tableView/TableTaskView';
import KanbanTaskView from '../kanbanView/kanbanTaskView'

function BodyLayout() {
const [cardView, setCardView] = useState(true);
// const [listView, setlistView] = useState(false);

  const onViewSwitch = (value) =>{
    console.log("clicked");
    setCardView(value)
  }

  return (
    <div className='content-body-layout-view'>
      <div className='project-title-addproject-btn-container'><div>Projects <button className='add-project-btn'>+ Projects</button></div>
      <div className='dashboard-project-overview-text'>Dashboard/<span className='link'>Project Overview</span></div>
    </div>
    <div className='view-type-button'>
      <button className={`view-btns card-view ${cardView ? "active":""}`} onClick={()=>onViewSwitch(true)}><img className="reviewer-avatar-icon" src="/assets/cardView.svg" alt="Reviewer" /></button>
      <button className={`view-btns table-view ${cardView ? "":"active"}`} onClick={()=>onViewSwitch(false)}><img className="reviewer-avatar-icon" src="/assets/listView.svg" alt="Reviewer" /></button>
      <div className='fade-text'> click here to change view</div>
    </div>
    {cardView ? (<><KanbanProjectView/>
      <KanbanTaskView/></>) : (<><TableView/>
        <TableTaskView/></>) }

    
    </div>
  )
}

export default BodyLayout;