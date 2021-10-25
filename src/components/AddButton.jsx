import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as AddIcon} from '../assets/plusIcon.svg'

const AddButton = () => {
    return (
      <Link to="/note/new" className="floating-button">
        <AddIcon className="plusIcon" />
      </Link>
    );
}

export default AddButton
