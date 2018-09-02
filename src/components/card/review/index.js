import React from 'react'

import { Col, Grid, Row } from 'react-bootstrap'
import Icon from '../../icons'
import { H3 } from '../../text'
import Tag from '../../tag'

export class ReviewCard extends React.Component {
  state = {
    isImageHovered: false,
  }

  handleBlur() {
    console.log('blur')
  }

  handleFocus() {
    console.log('focus')
  }

  render() {
    const {
      categories,
      imageUrl,
      name,
      selected
    } = this.props
    return (
      <Grid
        className='review-card-container'
      >
        <Col
          className={'review-card-bg-container'}
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        >
          {
            selected ?
              <div className="review-card-bg">
                <Icon
                  handleBlur={this.handleBlur}
                  handleFocus={this.handleFocus}
                  type={ this.state.isImageHovered ? 'close' : 'checkmark' }
                  size={42}
                />
              </div>
              :
              null
          }

        </Col>
        <Col style={{ width: '60%' }}>
          <Row className="review-card-name-container">
            <H3 center className="review-card-name" rowClassName="review-card-name-row">
              { name.toUpperCase() }
            </H3>
          </Row>
          <Row className="review-card-tag-container">
            <React.Fragment>
              <Tag
                style={{
                  fontSize: 12,
                  margin: 0,
                }}
                title={categories[0].title}
              />
            </React.Fragment>
          </Row>
        </Col>
      </Grid>
    )
  }
}
