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
      name
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
          <div className="review-card-bg">
            <Icon
              handleBlur={this.handleBlur}
              handleFocus={this.handleFocus}
              type={this.state.isImageHovered ? 'close' : 'checkmark'} size={42}/>
          </div>
        </Col>
        <Col style={{ width: '60%' }}>
          <Row className="review-card-name-container">
            <H3 center rowClassName="review-card-name-row" style={{ fontSize: '1rem', lineHeight: '1rem' }}>
              { name.toUpperCase() }
            </H3>
          </Row>
          <Row className="review-card-tag-container">
            <div>
              <Tag
                style={{
                  fontSize: 12,
                  margin: 0,
                }}
                title={categories[0].title}
              />
            </div>
          </Row>
        </Col>
      </Grid>
    )
  }
}
