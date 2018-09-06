import React from 'react'

import { Button } from 'react-bootstrap'
import Icon from '../icons'

import './styles.css'

const Modal = ({ children, handleClose, handleSave, show, title }) => (
  <React.Fragment>
    {
      show
        ?
        <div className="basic-modal-container">
          <div className="basic-modal">
            <div className="basic-modal-header-container">
              <div className="basic-modal-header-title">
                { title }
              </div>
              <div className="basic-modal-header-close" onClick={() => { handleClose()} }>
                <Icon type="closeDark"/>
              </div>
            </div>
            <div>
              {children}
            </div>
            <div className="basic-modal-footer-container">
              <Button
                bsStyle="primary"
                onClick={() => { handleSave()} }
                style={{ margin: '0 20px' }}
              >
                Save Changes
              </Button>
              <Button
                onClick={() => { handleClose()} }
                style={{ margin: '0 20px' }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
        :
        null
    }
  </React.Fragment>
)

export default Modal